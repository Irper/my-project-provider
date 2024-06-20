import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'
import {Route,Routes,BrowserRouter, RouterProvider,Navigate, Outlet, NavLink } from "react-router-dom";
import router from './Router';

import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Schedule from './Pages/Schedule';
import Map from './Pages/Map';
import Menu from './Pages/Menu';

import { useState } from "react";
import AuthProvider from './AuthProvider';
import { useAuth } from "./AuthProvider";

const PrivateRoute = () => {
  const user = useAuth();
  if (!user.token) return <Navigate to="/login" />;
  return <Menu/>;
};
const LoginRoute = () => {
  const user = useAuth();
  if (!user.token) return <Login/>;
  return <Navigate to="/menu"/>;
};
const HeaderPrivate = () => {
  const user = useAuth();
  if (!user.token) return <></>;
  return <Header/>;
};
const FooterPrivate = () => {
  const user = useAuth();
  if (!user.token) return <></>;
  return <Footer/>;
};
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [userName, setUserName] = useState(localStorage.getItem('userName'));

  return (


    //<>
    // {/* <input type = "text" placeholder = "userName" value = {userName ?? ''} onChange={
    //   e=>{
    //     setUserName(e.target.value)
    //     }
    //   }/> */}

     <BrowserRouter>
    <AuthProvider>
        <div className='my'>
          <HeaderPrivate/>
          <main>
            <div>
              <Routes>
                <Route path='/login' element={<LoginRoute/>}/>
                <Route path='/menu' element={<PrivateRoute/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path="/schedule" element={<Schedule/>}/>
                <Route path="/map" element={<Map/>}/>
              </Routes>
            </div>
          </main>
          <FooterPrivate/>


        </div>
        </AuthProvider>
    </BrowserRouter>  


    //</>
    // <>
    // <RouterProvider router={router}/>
    // </>
  );
}

export default App;