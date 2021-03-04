import React from "react";
import axios from "axios";
import authHeader from "../../security/auth-header";
import {useCookies} from "react-cookie";

const NewTurnus = () => {
    const url = process.env.REACT_APP_URL;
    const [cookies] = useCookies(["user"])


    const validateNewTurnus = (e) => {
        e.preventDefault()
        const turnusName = document.getElementById("new_turnusName").value;
        const turnusNumber = document.getElementById("new_turnusNumber").value;
        const gyakAttendance = document.getElementById("gy_input").value
        const eloAttendance = document.getElementById("e_input").value
        const konzAttendance = document.getElementById("k_input").value


        let data = {
            "name": turnusName,
            "year": turnusNumber,
            "lecture": eloAttendance,
            "practice": gyakAttendance,
            "consultation": konzAttendance,
             "combinedName" : turnusName + "/" +  turnusNumber
        }

        addNewTurnus(data)

    }

    async function addNewTurnus(data) {
        axios.post(url + "/turnus/add", data, {headers: authHeader(cookies.user)}).then(res => {
            alert(res.data);
            window.location.reload();
        })
    }


    return <div className="newTurnus__mainContainer">
        <form onSubmit={validateNewTurnus}>

        <div className="newTurnus__inputs">
            <input required={"required"} id={"new_turnusName"} type="text" placeholder={"turnus neve"}/>
            <input required={"required"} id={"new_turnusNumber"} type={"number"} placeholder={"év"}/>

            <div className="newTurnus__attendances">

                <p>Kötelező jelenlét %-ban</p>
                <div className="add_attendance">
                    <p>Elöadás</p>  <input required={"required"} id={"e_input"} type="number" min={"1"} max={"100"} className="newTurnus__eloadas"/>
                </div>
                <div className="add_attendance">
                    <p>Gyakorlat</p>  < input required={"required"} id={"gy_input"} type="number" min={"1"} max={"100"} className="newTurnus__gyak"/>
                </div>
                <div className="add_attendance">
                    <p>Konzultáció</p> <input required={"required"}  id={"k_input"} type="number" min={"1"} max={"100"} className="newTurnus__konz"/>
                </div>
            </div>


            <button type={"submit"} className={'newLesson__submit'}>Hozzáadás</button>

        </div>
        </form>
    </div>
    }


export default NewTurnus;