import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "axios";

const Teacher = (props) => {
    const url = process.env.REACT_APP_URL;


    const deleteTeacher = () => {
        let ok = window.confirm("Biztosan törölni akarod " + props.data?.name + " nevu oktatot??")
        if (ok === false) {
            return
        }
        deleteTheTeacher()
    }


    async function deleteTheTeacher() {
        axios.delete(url + "/teacher/" + props.data?.id +  "/delete").then(res => {
            alert(res.data)
            window.location.reload();
        })
    }


    return <tr>
            <td>{props.data?.name}</td>
            <td>{props.data?.email}</td>
            <td  onClick={deleteTeacher} > <FontAwesomeIcon  icon="trash"  className={"lesson_trash)"}/></td>
        </tr>
}

export default Teacher;