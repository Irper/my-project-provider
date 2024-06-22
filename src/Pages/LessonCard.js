import "./LessonCard.css"


export default function LessonCard(props){

    return <div className="lessonCard">
    <div className="left">
        <div className="lessonNumber"> {
            props.lesson.date.includes("08")?
            1:props.lesson.date.includes("09")?
            2:props.lesson.date.includes("11")?
            3:props.lesson.date.includes("13")?
            4:props.lesson.date.includes("15")?
            5:props.lesson.date.includes("16")?
            6:props.lesson.date.includes("18")?
            7:8
        }</div>
     <div className="lessonDate"> {props.lesson.date}</div>
    </div>
    <div className="right">
        <div className="lessonLesson"> {props.lesson.lesson}</div>
        <div className="lessonAuditorium"> {props.lesson.auditorium}</div>
        <div className="lessonType"> {props.lesson.lessonType}</div>
        <div className="lessonTeacher"> {props.lesson.teacher}</div>
    </div>
     
    </div>
}