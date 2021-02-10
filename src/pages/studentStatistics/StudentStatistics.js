import React, {useEffect, useState} from "react";
import './StudentStatistics.css'
import Diagram from "../../components/diagram/Diagram";
import axios from "axios";
import authHeader from "../../security/auth-header";
import {useCookies} from "react-cookie";

const StudentStatistics = () => {
    const [cookies, setCookies] = useCookies(["user"])
    const [student, setStudent] = useState(1)
    const [stats, setStats] = useState([])
    const url = process.env.REACT_APP_URL;


    const back = () => {
        window.location = "/student"
    }

    useEffect(() => {
        fetchStudentsStats();
    }, [])



    async  function fetchStudentsStats() {
        axios.get(url + "/student/" + student + "/statistics", {headers: authHeader(cookies.user)}).then(res => {
            setStats(res.data)
        })
    }


    let content = <div className="loading">
        <h1>LOADING</h1>
    </div>


    if (stats.length !== 0) {
        content = <div className="student__statisticsMain">
            <p className="student__title">Practice:</p>
            <Diagram stat={stats.percentages?.practice} practice={true} />
            <p className="student__title">Lecture:</p>
            <Diagram stat={stats.percentages?.lecture} practice={false} />
            <p className="student__title">Consultation:</p>
            <Diagram stat={stats.percentages?.consultation} practice={false} />
            <div className="student__statisticsButtonContainer">
                <button onClick={back} className="student__back">back</button>
            </div>

        </div>
    }


    return content
}

export default StudentStatistics;