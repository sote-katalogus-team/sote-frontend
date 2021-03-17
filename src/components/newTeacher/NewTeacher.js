import React from "react";
import axios from "axios";
import authHeader from "../../security/auth-header";
import {useCookies} from "react-cookie";


const NewTeacher = () => {
    const url = process.env.REACT_APP_URL;
    const [cookies] = useCookies(["user"])

    const validateNewTeacher = (e) => {
        e.preventDefault()
        const name = document.getElementById("newTeacherName").value;
        const email = document.getElementById("newTeacherEmail").value;
        const password = document.getElementById("newTeacherPassword").value;



        const data = {
            'name':name,
            'email': email,
            'password': password
        }
        saveNewTeacher(data)

    }


    async function saveNewTeacher(data) {
        axios.post(url + "/teacher/add/teacher", data, {headers: authHeader(cookies.user)}).then(res => {
            alert(res.data)
            window.location.reload();
        })
    }

    return <div className="newTeacher__main">
        <div className="newTeacher__inputContainer">
            <form autoComplete={"off"} onSubmit={validateNewTeacher}>
            <input required={"required"} autoComplete={"off"} type="text" id={"newTeacherName"} placeholder={"Oktató neve"}/>
            <input required={"required"} autoComplete={"off"} type="email"  id={"newTeacherEmail"} placeholder={"Oktató email címe"}/>
            <input required={"required"} autoComplete={"off"} type="password"  id={"newTeacherPassword"} placeholder={"Oktató jelszava"}/>
            <button  type={"submit"} >Hozzáadás</button>
            </form>
        </div>
    </div>
}

export default NewTeacher;