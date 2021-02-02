import React from "react";
import './StudentStatistics.css'
import Diagram from "../../components/diagram/Diagram";

const StudentStatistics = () => {
    const stat1 = 100;
    const stat2 = 40;
    const stat3 = 70;

    return <div className="student__statisticsMain">
        <Diagram stat={stat1} />
        <Diagram stat={stat2} />
        <Diagram stat={stat3} />
    </div>
}

export default StudentStatistics;