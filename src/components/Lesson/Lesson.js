import React from 'react';
import fontawesome from '@fortawesome/fontawesome'
import {faTrash} from '@fortawesome/fontawesome-free-solid'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Lesson = (props) => {

    fontawesome.library.add(faTrash);


    let potlasText = "nem"
    if (props.data.potas) {
        potlasText = "igen"
    }

    let statuszText = "aktív";

    if (!props.data.active) {
        statuszText = "passzív"
    }

    return <tr>
        <td>{props?.type}</td>
        <td>{props.data?.name}</td>
        <td>{props.data?.date}</td>
        <td>{props.data?.point}</td>
        <td>{potlasText}</td>
        <td>{statuszText}</td>
        <td> <FontAwesomeIcon icon="trash"  className={"lesson_trash)"}/></td>
    </tr>
}

export default Lesson;