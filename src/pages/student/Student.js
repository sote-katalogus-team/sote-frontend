import React from 'react';
import './Student.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import { faUser } from '@fortawesome/fontawesome-free-solid'

const Student = () => {

    const toStatistics = () => {
        window.location = "/student/statistics"
    }

    fontawesome.library.add(faUser);
    const name = "test name";
    const  neptunCode = "123ABC"
    return <div className="student__mainContainer">
        <div className="student__header">
            <p className={"student__welcome"}>welcome</p>
            <p className="student__name">{name} #{neptunCode}</p>
            <FontAwesomeIcon icon="user"  className={"student__userLogo"}/>
        </div>
        <div className="main__LoginContainer">
            <form >
                <input placeholder={"code"} type="text" className="student__codeInput"/><br/>
            </form>
        </div>
        <div className="student__buttonContainer">
            <button className={'main__loginButton'} >send</button>
            <button onClick={toStatistics}  className={'main__registerButton'}>statistics</button>
        </div>

    </div>
}

export default Student;