import React, { Component } from 'react'
import "./Profile.css"

export default function Profile(props) {

    return (

      <div className='back'>
        <div className='back_profile'>
          <div className='profile_left'>
            <div className='text'>Студент</div>
            <div className='text'>Лесков Дмитрий Андреевич</div>
            <div className='photo'></div>
            <div className='text'>20.02.2004</div>
          </div>

              <div className='window_contact'>
                <div className='contact'>Контактная информация</div>
                  <div className='contact_text'>
                    <div>Телефон: </div>
                     <div>+7 909 866 91 00</div>
 
                  </div>
                
                  <div className='contact_text'>
                    <div>email: </div>
                     <div>john@mail.com</div>
                  </div>

                  <div className='contact_text'>
                    <div>Адрес</div>
                    <div>Шеронова д.5, кв.8</div>
                  </div>
      
              </div>

          
        </div>
     
        <div className='back_schedule'>
          <div className='window_contact1'>
          <div className='contact'>Личная информация</div>
                  <div className='contact_text'>
                    <div>Языки: </div>
                     <div>английский, китайский</div>
 
                  </div>
                
                  <div className='contact_text'> 
                    <div>Интересы: </div>
                     <div>рисование, баскетбол</div>
                     
                  </div>
                  <div className='contact_text'>
                  <div>О себе</div>
                  <div>Мечтаю стать крутым веб-дизайнером</div>
                  </div>
          </div>
        </div> 
      </div>
    )
  
}
