import React from 'react';
import './Student.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import { faCheckSquare, faUser } from '@fortawesome/fontawesome-free-solid'

const Student = () => {

    fontawesome.library.add(faUser);
    const name = "test name"
    return <div className="student__mainContainer">
        <div className="student__header">
            <p className={"student__welcome"}>welcome</p>
            <p className="student__name">{name}</p>

            <FontAwesomeIcon icon="user" />
        </div>
    </div>
}

export default Student;