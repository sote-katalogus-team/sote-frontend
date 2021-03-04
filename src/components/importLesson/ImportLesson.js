import React from "react";
import axios from "axios";
import authHeader from "../../security/auth-header";
import {useCookies} from "react-cookie";


const ImportLesson = (props) => {
    const url = process.env.REACT_APP_URL;
    const [cookies] = useCookies("user")


    function changeDate(e) {
        console.log(e.target.value)
        saveNewDate(e.target.value, props.type).then(res => {
            console.log(res)
        })
    }


    async function saveNewDate(date, type) {
        if (type === "konzultáció") {
            type = "konzultacio"
        }
        if (type === "elöadás") {
            type = "eloadas"
        }

        let data = {
            turnusId: props.data.turnusId,
            name: props.data.name,
            date: date,
            point: props.data.point,
            potlas: props.data.potlas
        }
        try {
            const resp = await axios.put(url + "/" + type + "/" + props.data.id + "/update" , data, {headers: authHeader(cookies.user)} )
            return resp.data
        }
        catch (error) {

        }
    }


    function changeName(e) {
        console.log(e.target.value)
        saveNewName(e.target.value, props.type).then(res => {
            console.log(res)
        })
    }


    async function saveNewName(name, type) {
        if (type === "konzultáció") {
            type = "konzultacio"
        }
        if (type === "elöadás") {
            type = "eloadas"
        }

        let data = {
            turnusId: props.data.turnusId,
            name: name,
            date: props.data.date,
            point: props.data.point,
            potlas: props.data.potlas
        }
        try {
            const resp = await axios.put(url + "/" + type + "/" + props.data.id + "/update" , data, {headers: authHeader(cookies.user)} )
            return resp.data
        }
        catch (error) {

        }
    }

    return <tr>
        <td>{props?.type}</td>
        <td><input onBlur={changeName} type="text" defaultValue={props?.data.name}/></td>
        <td><input  onChange={changeDate} type="date"
        defaultValue={props?.data.date}/></td>
        <td>Törlés</td>
    </tr>
}

export default ImportLesson;