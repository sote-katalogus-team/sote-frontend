import React from "react";
import Lesson from "../Lesson/Lesson";

const StatisticsTable = (props) => {
    let data= {

    }
    return <div className="statisticsTable__main">
        <table className={"statistics__table"}>
            <thead>
            <tr>
                <th>Hallgató neve</th>
                <th>neptun kódja</th>
                <th>Elöadás</th>
                <th>Gyakorlat</th>
                <th>Konzultáció</th>
                <th>Figyelmeztetés</th>
            </tr>
            </thead>
            <tbody>

            </tbody>

        </table>
    </div>
}

export default StatisticsTable

