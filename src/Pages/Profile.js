import React, { Component } from 'react'
import "./Profile.css"

export default function Profile(props) {

    return (

      <div className='back'>
        <div className='back_profile'>
          <div className='profile_left'>
            <div className='text'>Должность</div>
            <div className='text'>Фамилия Имя Отчество</div>
            <div className='photo'></div>
            <div className='text'>20.02.2004</div>
          </div>

              <div className='window_contact'>
                <div className='contact'>Контактная информация</div>
                  <div>
                    <div>Телефон: </div>
                     <div>+7 909 866 91 00</div>
                  </div>
                
                  <div>
                    <div>email: </div>
                     <div>john@mail.com</div>
                  </div>
              </div>

          
        </div>
     
        <div className='back_schedule'></div> 
      </div>
    )
  
}
