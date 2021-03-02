import React from "react";
import axios from "axios";
import authHeader from "../../security/auth-header";
import {useCookies} from "react-cookie";


const AdminSettingsBar = () => {
    const url = process.env.REACT_APP_URL;
    const [cookies, setCookies] = useCookies("user")




    const submitEmailChange  = (e) => {
        e.preventDefault();
        changeEmail("admin@gmail.com").then(data => {
            alert(data)
            }
        )


    }


    const submitPasswordChange = (e) => {
        e.preventDefault()

        if (document.getElementById("newPass1").value === document.getElementById("newPass2").value) {
            changePassword(document.getElementById("newPass1").value).then(data => {
                alert(data)
            })
        }
        else {
            alert("A jelszavaknak egyezniuk kell")
        }


            }



    const changePassword = async (data) => {
        console.log(cookies.user)
        const newData = {
            name: cookies.user.name,
            email: cookies.user.email,
            password : data
        }
        try {
            const resp = await axios.put(url + "/teacher/" + cookies.user.id + "/update" , newData, {headers: authHeader(cookies.user)});
            return resp.data
        }
        catch (e) {
            console.log(e)
        }


    }

    const changeEmail = async (email) => {
        console.log(cookies.user)
        const newData = {
            name: cookies.user.name,
            email: email,
            password : ""
        }
        try {
            const resp = await axios.put(url + "/teacher/" + cookies.user.id + "/update" , newData, {headers: authHeader(cookies.user)});
            return resp.data
        }
        catch (e) {
            console.log(e)
        }


    }




    return <div className="adminSettingsMain">
            <div className="updateAdminData">
                <div className="admin__updateEmail">
                    <p>Email megváltoztatása:</p>
                    <form  onSubmit={submitEmailChange}>
                        <input required={"required"} type="email" placeholder={"új email cím"}/> <br/>
                        <button type={"submit"}>mentés</button>
                    </form>
                </div>
               <div className="admin__newPassword">
                   <p>Jelszó megváltoztatása:</p>
                   <form id={"password-change"} onSubmit={submitPasswordChange} >
                       <input id={"newPass1"} type="password" required={"required"} placeholder={"password"}/>
                       <br/>
                       <input id={"newPass2"} type="password" required={"required"} placeholder={"confirm password"}/>
                       <br/>
                       <button type={"submit"}>mentés</button>
                   </form>
               </div>
            </div>
    </div>
}

export default AdminSettingsBar;