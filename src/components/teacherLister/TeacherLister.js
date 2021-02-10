import React, {useState, useEffect} from "react";
import Teacher from "../teacher/Teacher";
import axios from "axios";
import {useCookies} from "react-cookie";
import authHeader from "../../security/auth-header";


const TeacherLister  = () => {
    const url = process.env.REACT_APP_URL;
    const[teachers, setTeachers] = useState([])
    const [cookies, setCookies] = useCookies(["user"])


    useEffect(() => {
        fetchTeachers()
    }, [])


    async function  fetchTeachers() {
        axios.get(url+ "/teacher/all", {headers: authHeader(cookies.user)}).then((res) => {
            setTeachers(res.data)
        })
    }





    return <div className="teacherLister__main">
            <div className="teacherLister_tableContainer">
                <table className={"teacher__AdmintTable"}>
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