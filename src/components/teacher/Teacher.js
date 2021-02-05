import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Teacher = (props) => {
    return <tr>
            <td>{props.data?.name}</td>
            <td>{props.data?.email}</td>
            <td> <FontAwesomeIcon  icon="trash"  className={"lesson_trash)"}/></td>
        </tr>
}

export default Teacher;