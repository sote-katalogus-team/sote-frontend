import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "axios";
import {useCookies} from "react-cookie";
import authHeader from "../../security/auth-header";


const Turnus = (props) => {
    const url = process.env.REACT_APP_URL;
    const[cookies,] = useCookies("user")



    const handleDelete = () => {
       if ( window.confirm("Biztosan törolni szerétned a " + props.combinedName + " turnust?")) {
           deleteTurnus().then(res => {
               alert("Turnus sikeresen törölve!")})
           setTimeout(() => {
               window.location.reload();

           }, 1000)
           }
       }

    const deleteTurnus = async () => {
        try {
            const resp = await axios.delete(url + "/turnus/ " + props.data.id +  "/delete", {headers: authHeader(cookies.user)} )
            return resp.data
        }
        catch (e) {

        }
    }



    return <tr>
        <td>{props.data?.combinedName}</td>
        <td>{props.data?.year}</td>
        <td>{props.data?.lecture}</td>
        <td>{props.data?.practice}</td>
        <td>{props.data?.consultation}</td>
        <td onClick={handleDelete}> <FontAwesomeIcon  icon="trash"  className={"lesson_trash)"}/></td>
    </tr>
}

export default Turnus;