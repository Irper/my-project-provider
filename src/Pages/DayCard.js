import React from "react";
import { useState, useEffect } from "react";
import LessonCard from "./LessonCard";
export default function DayCard(props){
  
    return <div className="schedule">
        {props.day.lessons.map(e=><LessonCard lesson={e}/>)}
    </div>
}