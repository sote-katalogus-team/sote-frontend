import React, {useState} from 'react';
import './home.css';
import axios from "axios";
import { useCookies } from "react-cookie";
import {Snackbar} from "@material-ui/core";
import {Alert} from "@material-ui/lab";


const Home = () => {
    const [cookies, setCookie] = useCookies([
        "user"
    ]);
    const [snackVisible, setSnackVisible] = useState(false)
    const url = process.env.REACT_APP_URL;

    let loginAlert = ""

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackVisible(false);
    };



    if (snackVisible) {
        loginAlert = <Snackbar autoHideDuration={6000} open={snackVisible}>
                <Alert onClose={handleClose} severity="error">
                    Invalid email or password!
                </Alert>
            </Snackbar>
    }

    const goToRegister = () => {
        window.location = "/signup"
    }


    const goToVerify = () => {
        window.location = "/verify"
    }

    const handleLogin = (e) => {
        e.preventDefault()
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        loginRequest(username, password)
    }

    const redirect = roles => {
        console.log(typeof roles)
        console.log(roles[0])

        if (roles[0] === "STUDENT") {
            window.location = "/student"
        } if (roles[0] === "TEACHER") {
            window.location = "/teacher"
        }if (roles[0] === "ADMIN") {
            window.location = "/admin/new-lesson"
        }
    }



    async function loginRequest(username, password) {
        let userCredentials = {
            email: username,
            password: password
        }
        axios.post(url + "/login", userCredentials).then(res => {
            let d = new Date();
            d.setTime(d.getTime() + (120*60*100000));
            setCookie("user", res.data, { path: "/" });
            redirect(res.data.roles)
        }).catch(() => {
            setSnackVisible(true)
        })

    }




    return (
        <div className="main__mainContainer">
            <div className={"home__image"}><img
                src="https://www.semmelweiskiado.hu/images/termekek/2/1691/semmelweis_kiado_logo_1608213956.jpg"
                alt="logo"/></div>
            <form onSubmit={handleLogin}>
                <div className="main__LoginContainer">
                    <input required={"required"} id={"username"} placeholder={"email"} type="email"
                           className="main__usernameInput"/><br/>
                    <input required={"required"} id={"password"} placeholder={"password"} type="password"
                           className="main__passwordInput"/>
                   <br/> <button type={"submit"} className={'main__loginButton'}>Login</button>
                   <br/> <button onClick={goToRegister} className={'main__registerButton'}>Register</button>


                </div>
                <div className="main__buttonContainer">

                    <button onClick={goToVerify} className={'main__registerButton'}>Verify an account</button>
                    <button onClick={e => {window.location = "/reset"}} className={'main__registerButton'}>Reset password</button>
                </div>
            </form>
            { loginAlert}
        </div>
    );
};

export default Home;
