import React from "react"
import "./Profile.css"
import "./Menu.css"
import img2 from "../img/Frame 2.svg"

export default function Menu(props) {

  return(

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
   </div >

<img src={img2} className="image_svg2"/>
   </div>
  )
}

