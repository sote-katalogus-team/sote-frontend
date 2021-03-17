import React from "react";
import "./resetPage.css"
import axios from "axios";

const ResetPage = () => {
    const url = process.env.REACT_APP_URL;

    const handleReset = e => {
        e.preventDefault()
        if (window.confirm("Are you sure about resetting your password?")) {
            resetPassword(document.getElementById("email").value, document.getElementById("neptunCode").value).then(res => {
               if (res !== undefined){
                   alert("Password resetting was successful, please check your email!")
               }

               else {
                   alert("Something went wrong, please check your neptun code and email inputs!")
               }
            })
        }
    }




    const resetPassword = async (email, neptunCode) => {
        const data = {
            email,
            code: neptunCode
        }
        try {
            const resp = await axios.post(url + "/resetpassword", data)
            return resp.data
        }
        catch (e) {
        }
    }





    return <div className="resetPage__main">
        <div className="resetPage__inputContainer">
            <form onSubmit={handleReset} >
                <p>Email:</p> <br/>
                <input required={"required"} id={"email"} type="email"/> <br/>
                <p>Neptun code:</p> <br/>
                <input required={"required"} id={"neptunCode"} type="text"/> <br/>
                <button type={"submit"}>Reset</button> <br/>
            </form>
            <button onClick={e => window.location = "/"}>Back</button>

        </div>
    </div>
}


export default ResetPage