import { Routes, Route } from "react-router-dom";
import { lazy, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  Loader  from '../Loder';
import { getIsLoading } from "../../redux/selector";

import PrivateRoute from "../PrivateRoute";
import PublicRoute from "../PublicRoute";
import AppBar from "../AppBar/AppBar";
import { refresh } from "../../redux/contacts/auth-operetion";

import Home from '../../pages/homePage';


const Login = lazy(() => import('../../pages/loginPage'));
const Register = lazy(() => import('../../pages/registerPage'));
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
        <Route element={<PublicRoute />}>
          <Route path="/" element={<Home />}>
              <Route path="/register" element={<Register/>} />
              <Route redirectTo="/login" element={<Login/>} />
        </Route>
            <Route element={<PrivateRoute/>}>
              <Route path="/contacts" element={<Contacts/>} />
            </Route>           
        </Route>
      </Routes>
      {loader && <Loader/>}
    </div>
    );
}
