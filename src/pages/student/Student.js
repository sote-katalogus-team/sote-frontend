import React, {useState} from 'react';
import './Student.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import { faUser } from '@fortawesome/fontawesome-free-solid'
import axios from "axios";
import authHeader from "../../security/auth-header";
import {useCookies} from "react-cookie";


const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};



const Student = () => {
    const [message, setMessage] = useState("");
    const [cookies, removeCookie] = useCookies(["user"])
    const [user, setUser] = useState(1);
    const url = process.env.REACT_APP_URL;
    const [alert, setAlert] = useState(false)
    const toStatistics = () => {
        window.location = "/student/statistics"
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        const code = document.getElementById("code").value;
         sendCode(code)
    }


    const setAlertClassname = () => {
        if (alert) {
            return "code__alertGood"
        }
        else {
            return "code__alertBad"
        }
    }

    async function sendCode(codeInput) {

        let code =  {"code": codeInput}

        axios.post(url + "/student/" + user + "/send_code", code, {headers: authHeader(cookies.user)}).then(res => {
            console.log(res)
            if (res.status === 200) {
                setAlert(true)
                setMessage(res.data)
            }
        }).catch(error => {
            setAlert(false)
            setMessage("Incorrect code or code is expired, try again or contact your teacher")
        })
    }


    function logOut() {
        removeCookie("user","")
        window.location = "/"
    }


    fontawesome.library.add(faUser);
    const name = cookies.user?.name;
    const  neptunCode = "123ABC"
    return <div className="student__mainContainer">
        <div className="student__header">
            <p className={"student__welcome"}>welcome</p>
            <p className="student__name">{name} #{neptunCode}</p>
            <FontAwesomeIcon icon="user"  className={"student__userLogo"}/>
        </div>
        <form onSubmit={handleSubmit} >
        <div className="main__LoginContainer">

                <input required={"required"} id={'code'} placeholder={"code"} type="text" className="student__codeInput"/><br/>
        </div>
            {message && (
                <div className="form-group">
                    <div className={setAlertClassname()} role="alert">
                        {message}
                    </div>
                </div>
            )}
        <div className="student__buttonContainer">
            <button type={"submit"} className={'main__loginButton'} >send</button>
        </div>
        </form>
        <div className="student__toStatsContainer">
            <button onClick={toStatistics}  className={'main__registerButton'}>statistics</button>
            <button onClick={logOut} className={'main__registerButton'}>Logout</button>
        </div>
    </div>
}

export default Student;
