import "./LessonCard.css"


export default function LessonCard(props){

    return <div className="back_sch">
     
     <h3> {props.lesson.date}</h3>
        <h3>{props.lesson.lesson}</h3>
        <h3>{props.lesson.lessonType}</h3>
        <h3>{props.lesson.teacher}</h3>
        <h3>{props.lesson.teacherContact}</h3>
        <h3>{props.lesson.group}</h3>
        <h3>{props.lesson.auditorium}</h3> 
    </div>
}