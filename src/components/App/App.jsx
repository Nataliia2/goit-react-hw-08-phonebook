import { Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  Loader  from '../Loder';
import { getIsLoading } from "../../redux/selector";

import PrivateRoute from "../PrivateRoute";
import PublicRoute from "../PublicRoute";
import AppBar from "../AppBar/AppBar";
import { refresh } from "../../redux/contacts/auth-operetion";

import Home from '../../pages/homePage';
import Login from '../../pages/loginPage';
import Register from '../../pages/registerPage';
import Contacts from '../../pages/contactPage';



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
        {loader && <Loader />}
        <Route path="/" element={<Home />}/>
        <Route element={<PublicRoute />}>
          
              <Route path="/register" element={<Register/>} />
              <Route path="/login" element={<Login/>} />
        </Route>
            <Route element={<PrivateRoute/>}>
              <Route path="/contacts" element={<Contacts/>} />
            </Route>
        
      </Routes>
      
      
    </div>
    );
}
