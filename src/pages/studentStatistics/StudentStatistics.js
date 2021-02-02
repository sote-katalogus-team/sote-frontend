import React from "react";
import './StudentStatistics.css'
import Diagram from "../../components/diagram/Diagram";

const StudentStatistics = () => {
    const stat1 = 100;
    const stat2 = 40;
    const stat3 = 75;

    return <div className="student__statisticsMain">
        <p className="student__title">Practice:</p>
        <Diagram stat={stat1} />
        <p className="student__title">Lecture:</p>
        <Diagram stat={stat2} />
        <p className="student__title">Consultation:</p>
        <Diagram stat={stat3} />
        <div className="student__statisticsButtonContainer">
            <button className="student__back">back</button>
        </div>

    </div>
}

export default StudentStatistics;