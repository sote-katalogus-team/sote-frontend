import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Turnus = (props) => {
    console.log(props.data)
    return <tr>
        <td>{props.data?.combinedName}</td>
        <td>{props.data?.year}</td>
        <td>{props.data?.lecture}</td>
        <td>{props.data?.practice}</td>
        <td>{props.data?.consultation}</td>
        <td> <FontAwesomeIcon  icon="trash"  className={"lesson_trash)"}/></td>
    </tr>
}

export default Turnus;