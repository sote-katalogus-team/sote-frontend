import React from 'react';
import './Student.css'


const Student = () => {
    const name = "test name"
    return <div className="student__mainContainer">
        <div className="student__header">
            <p className={"student__welcome"}>welcome</p>
            <p className="student__name">{name}</p>
            <span className="student__icon">
            </span>
        </div>
    </div>
}

export default Student;