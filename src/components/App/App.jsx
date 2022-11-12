import { Routes, Route } from "react-router-dom";
import { lazy, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  Loader  from '../Loder';
import { getIsLoading } from "../../redux/selector";

import PrivateRoute from "../PrivateRoute";
import PublicRoute from "../PublicRoute";
import AppBar from "../AppBar/AppBar";
import { refresh } from "../../redux/contacts/auth-operetion";

const Home = lazy(() => import('../../pages/homePage'));
const Register = lazy(() => import('../../pages/registerPage'));
const Login = lazy(() => import('../../pages/loginPage'));
const Contacts = lazy(() => import('../../pages/contactPage'));



export function App() {
  const dispatch = useDispatch();
  const loader = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <div>
      <AppBar />
      <Routes>
        {loader && <Loader/>}
        <Route path="/" element={<Home />}>
          <Route element={<PublicRoute/>}>
              <Route path="/register" element={<Register/>} />
              <Route path="/login" element={<Login/>} />
            </Route>
            <Route element={<PrivateRoute/>}>
              <Route path="/contacts" element={<Contacts/>} />
            </Route>           
        </Route>
      </Routes>
      
    </div>
    );
}
