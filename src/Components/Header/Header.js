import React from 'react'
import "./Header.css";
import logo from "../../img/logo.svg";
import { Outlet } from 'react-router';
import { NavLink } from "react-router-dom";
import { useAuth } from "../../AuthProvider";
import exit from "../../img/exit.svg"

export default function Header(){

  const auth = useAuth();

    return (
      <header>
        <div  className='header'>
        <nav >
         <NavLink
            to="/menu" className={'logo'}>
            <img src={logo}/>
          </NavLink>
   
          <NavLink  
              to='/profile'
              className='mytext'>
              Личный кабинет
          </NavLink>
  
          <NavLink  
             to='/schedule'
             className='mytext'>
              Расписание
          </NavLink>
  
          <NavLink  
           to='/map'
           className='mytext'>
            3D карта
          </NavLink>

          <NavLink onClick={() => auth.logOut()} className='exit'>
          <img
                  src={exit}/>
          </NavLink>

          {/* {
             user.token ? 
             <input type='button' value="Выйти" onClick={e=>user.logOut()}/>
             :           <NavLink  className="myText"
            to='/login'>
             вход
           </NavLink>
  } */}
          {/* <NavLink
            onClick={handleLogOut}
            exact to="/login"
          >
           <img src={exit}/>
          </NavLink> */}
          
        </nav>
        </div>
      </header>
  
      // <div>
      //     <Navbar>
      //       <Container className='header'>
      //         <Navbar.Brand href='/menu'>
      //             <img
      //             src={logo}/>
      //         </Navbar.Brand>
      //         <Navbar.Collapse  >
      //           <Nav>
      //               <Nav.Link className='mytext' href='/profile'>Личный кабинет</Nav.Link>
      //               <Nav.Link className='mytext' href='/schedule'>Расписание</Nav.Link>
      //               <Nav.Link className='mytext' href='/map'>3D карта</Nav.Link>
      //           </Nav>
      //         </Navbar.Collapse>
      //         <Navbar.Brand href='/login'>
      //             <img
      //             src={exit}/>
      //         </Navbar.Brand>
      //       </Container>
      //     </Navbar>
  
      //       <Outlet/>
      //     </div>
      );
  }

