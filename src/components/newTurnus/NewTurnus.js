import React from "react";
import axios from "axios";

const NewTurnus = () => {
    const url = process.env.REACT_APP_URL;


    const validateNewTurnus = () => {
        const turnusName = document.getElementById("new_turnusName").value;

        if (turnusName.length < 1) {
            alert("Legyél szíves értéket megadni a turnus névhez")
            return;
        }
        const turnusNumber = document.getElementById("new_turnusNumber").value;

        if (turnusNumber.length === 0) {
            alert("Legyél szíves értéket megadni a turnus számhoz")
            return;

        }
        const gyakAttendance = document.getElementById("gy_input").value
        const eloAttendance = document.getElementById("e_input").value
        const konzAttendance = document.getElementById("k_input").value

        if (parseInt(gyakAttendance) > 100 || parseInt(gyakAttendance) < 1) {
            alert("legyél szíves 1 és 100 közötti értéket megadni!")
            return;
        }if (parseInt(eloAttendance) > 100 || parseInt(eloAttendance) < 1) {
            alert("legyél szíves 1 és 100 közötti értéket megadni!")
            return;
        }if (parseInt(konzAttendance) > 100 || parseInt(konzAttendance) < 1) {
            alert("legyél szíves 1 és 100 közötti értéket megadni!")
            return;
        }

        let data = {
            "name": turnusName,
            "turnus_number": turnusNumber,
            "lecture": eloAttendance,
            "practice": gyakAttendance,
            "consultation": konzAttendance
        }

        addNewTurnus(data)

    }

    async function addNewTurnus(data) {
        axios.post(url + "/turnus/add", data).then(res => {
            alert(res.data);
            window.location.reload();
        })
    }


    return <div className="newTurnus__mainContainer">
        <div className="newTurnus__inputs">
            <input id={"new_turnusName"} type="text" placeholder={"turnus neve"}/>
            <input id={"new_turnusNumber"} type={"number"} placeholder={"év"}/>

            <div className="newTurnus__attendances">
                <p>Kötelező jelenlét %-ban</p>
                <div className="add_attendance">
                    <p>Elöadás</p>  <input id={"e_input"} type="number" min={"1"} max={"100"} className="newTurnus__eloadas"/>
                </div>
                <div className="add_attendance">
                    <p>Gyakorlat</p>  <input id={"gy_input"} type="number" min={"1"} max={"100"} className="newTurnus__gyak"/>
                </div>
                <div className="add_attendance">
                    <p>Konzultáció</p> <input id={"k_input"} type="number" min={"1"} max={"100"} className="newTurnus__konz"/>
                </div>
            </div>


            <button onClick={validateNewTurnus} className={'newLesson__submit'}>Hozzáadás</button>
        </div>
    </div>
}


export default NewTurnus;