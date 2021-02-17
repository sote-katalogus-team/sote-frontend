import React, {useState} from "react";
import axios from "axios";
import './accountVerification.css'



const AccountVerification = () => {
    const [message, setMessage] = useState("");
    const [alert, setAlert] = useState(false)
    const url = process.env.REACT_APP_URL;



    function goToLogin() {
        const go = window.confirm("Are you sure about leaving this page?")
        if (go) {
            window.location = '/';
        }
    }

    const handleVerifyButtonClick = (e) => {
        e.preventDefault()
        const code = document.getElementById("verificationCode").value;
        const email = document.getElementById("email-input").value;
        axios.post(url + "/validate", {"email": email, "code" : code}).then(res => {
            setAlert(true)
            setMessage(res.data)
        }).catch(error => {
            setAlert(false)
            setMessage("Incorrect code, please try again")
        })
    }
    const setAlertClassname = () => {
        if (alert) {
            return "code__alertGood"
        }
        else {
            return "code__alertBad"
        }
    }

    return <div className="wrapper">
        <div className="title">
            Open your email and enter the verification code
        </div>

        <form onSubmit={handleVerifyButtonClick} >
            <div className="inputs">
                <p className={"input-label"}>email:</p>
                <input required={"required"} type="email" id="email-input" className="codeInput-2" autoFocus />
                <p  className={"input-label"} >code:</p>
                <input required={"required"}  type="text" id="verificationCode" className="codeInput-2" autoFocus />
            </div>



        {message && (
            <div className="form-group">
                <div className={setAlertClassname()} role="alert">
                    {message}
                </div>
            </div>
        )}
        <button
            type="submit"
            className="button"

        >
            Verify
        </button>
        </form>
        <button
            type="button"
            className="button"
            onClick={goToLogin}
        >
            Go to Login
        </button>
    </div>
}



export default AccountVerification