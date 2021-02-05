import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Turnus = (props) => {
    return <tr>
        <td>{props.data?.name}</td>
        <td>{props.data?.turnus_number}</td>
        <td>{props.data?.lecture}</td>
        <td>{props.data?.practice}</td>
        <td>{props.data?.consultation}</td>
        <td> <FontAwesomeIcon  icon="trash"  className={"lesson_trash)"}/></td>
    </tr>
}

export default Turnus;