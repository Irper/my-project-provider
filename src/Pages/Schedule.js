import React, {Component, useEffect, useState} from 'react'
import DayCard from './DayCard'
import img1 from "../img/Frame 4.svg";
import "./Schedule.css"


 export default function Schedule(props) {
  const [days, setDays] = useState([])
  useEffect(e=>{

    fetch("http://localhost:8080/group/54308")
        .then(r=>r.json())
        .then(re=>setDays([re.days[5]]))
        .catch(e=>console.log(e))
    
  },[null]) 
  console.log(days.length)
    return (

<div className='image_svg'>
<img src = {img1} className="image_svg"/>
</div>

        // <div>
        //   { days.map(e=>
        //                 <div>
        //                     <DayCard day={e}/>
        //                 </div>)}

        // </div> 
    )} 
   

