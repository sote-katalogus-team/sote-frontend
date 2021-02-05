import React, {useState, useEffect} from "react";
import Teacher from "../teacher/Teacher";
import axios from "axios";


const TeacherLister  = () => {
    const url = process.env.REACT_APP_URL;
    const[teachers, setTeachers] = useState([])


    useEffect(() => {
        fetchTeachers()
    }, [])


    async function  fetchTeachers() {
        axios.get(url+ "/teacher/all").then((res) => {
            setTeachers(res.data)
        })
    }





    return <div className="teacherLister__main">
            <div className="teacherLister_tableContainer">
                <table className={"teacher__table"}>
                <thead>
                <tr>
                    <th>Oktató neve</th>
                    <th>Oktató email címe</th>
                    <th>Törlés</th>
                </tr>
                </thead>
                <tbody>
                {teachers.map(teacher => (
                    <Teacher data={teacher} />
                ))}
                </tbody>
            </table>
            </div>
    </div>
}

export default TeacherLister