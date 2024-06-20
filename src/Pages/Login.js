import React, { Component, useEffect } from 'react'
import "./Login.css"
import img from "../img/day.svg";
import logo2 from "../img/logo2.svg"
import { useState } from "react";
import { useAuth } from '../AuthProvider';


export const Login = () => {

  
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const auth = useAuth();
  const handleSubmitEvent = (e) => {
    e.preventDefault();

    if (login !== "" && password !== "") {
      let data = {
        'email': login,
        'password': password
      };
      auth.loginAction(data);
      return;
    }
    alert("please provide a valid input");
    
  }

  const handleLoginChange = (e) => {
    setLogin(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  return(
    // <div >
    //   <img className='img' src={img}></img>
    //   <img className='logo' src={logo2}></img>
    //   <input className='input_name' type="text" name="key" placeholder="Введите имя" />
    //   <input className='input_password' type="text" name="key" placeholder="Введите ключ" />
    //   <button className='button'>Войти</button>
    // </div>
    <div>
    <form onSubmit={handleSubmitEvent}>
    <img className='img' src={img}></img>
    <div className='log'>
    <img className='logo' src={logo2}></img>
      <div>
        <input
          className='input_name'
          type="text"
          placeholder="Логин"
          onChange={e=>handleLoginChange(e)}
          value={login}
          required
        />
      </div>
      <div >
        <input
          className='input_paasword'
          type="password"
          placeholder="Пароль"
          onChange={handlePasswordChange}
          value={password}
          required
        />
      </div>
      <div >
        <button  type="submit" className='button' >
          Войти
        </button>
      </div>
      </div>
    </form>
  </div>
    
     );
  };

export default Login;