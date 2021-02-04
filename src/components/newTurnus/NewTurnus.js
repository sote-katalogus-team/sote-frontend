import React from "react";
import axios from "axios";

const NewTurnus = () => {
    const url = process.env.REACT_APP_URL;


    const validateNewTurnus = () => {
        const turnusName = document.getElementById("new_turnusName").value;

        if (turnusName.length < 1) {
            alert("Legyél szíves értéket megadni a turnus névhez")
        }
        const turnusNumber = document.getElementById("new_turnusNumber").value;

        if (turnusNumber.length === 0) {
            alert("Legyél szíves értéket megadni a turnus számhoz")
        }

        let data = {
            "name": turnusName,
            "turnus_number": turnusNumber
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
                <input id={"new_turnusNumber"} type={"number"} placeholder={"turnus száma"} />
                <button onClick={validateNewTurnus} className={'newLesson__submit'}>Hozzáadás</button>
            </div>
    </div>
}


export default NewTurnus;