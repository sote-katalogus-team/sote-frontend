import React from "react";
import axios from "axios";
import authHeader from "../../security/auth-header";
import {useCookies} from "react-cookie";


const NewTeacher = () => {
    const url = process.env.REACT_APP_URL;
    const [cookies, setCookies] = useCookies(["user"])

    const validateNewTeacher = () => {
        const name = document.getElementById("newTeacherName").value;
        if (name.length === 0) {
            alert("Legyél szíves a nevet megadni!")
            return;
        }

        const email = document.getElementById("newTeacherEmail").value;

        if (validateEmail(email) === false) {
            alert('Legyél szíves valid email címet megadni');
                return;
        }

        const data = {
            'name':name,
            'email': email
        }
        saveNewTeacher(data)

    }


    async function saveNewTeacher(data) {
        axios.post(url + "/teacher/add", data, {headers: authHeader(cookies.user)}).then(res => {
            alert(res.data)
            window.location.reload();
        })
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    return <div className="newTeacher__main">
        <div className="newTeacher__inputContainer">
            <input type="text" id={"newTeacherName"} placeholder={"Oktató neve"}/>
            <input type="email"  id={"newTeacherEmail"} placeholder={"Oktató email címe"}/>
            <button onClick={validateNewTeacher}>Hozzáadás</button>
        </div>
    </div>
}

export default NewTeacher;