import React from "react";
import { useState, useEffect } from "react";
import LessonCard from "./LessonCard";
import './DayCard.css';
import img1 from "../img/Frame 3.png";
export default function DayCard(props){
  
    return  <div>
         <div className="back_sch">
        <div className="dayDate">
            <div>
            Расписание на сегодня: 
            </div>
            <div>
                {props.day.date}
            </div>
        </div> 
        {props.day.lessons.map(e=><LessonCard lesson={e}/>)}
        {props.day.lessons.map(e=><LessonCard lesson={e}/>)}

    </div>   
   

 </div>
   
}