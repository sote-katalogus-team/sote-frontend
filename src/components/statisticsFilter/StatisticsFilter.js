import React, {useEffect, useState} from "react";
import axios from "axios";
import LessonStatisticsTable from "../statisticsTable/LessonStatisticsTable";

const StatisticsFilter = () => {
    const[turns, setTurns] = useState([]);
    const[selected, setSelected] = useState([])
    const url = process.env.REACT_APP_URL;


    useEffect(() => {
        fetchTurns();
    }, [])



    useEffect(() => {
        fetchSelected()
    }, [])



    async function fetchTurns() {
        axios.get(url + "/turnus/all").then((res) => {
            setTurns(res.data)
        })
    }
    async function fetchSelected() {
        axios.get(url + "/classes/statistic/1").then(res => {
            setSelected(res.data)
        })
    }


    return <div className="statisticsFilter__main">

        <div className="statistics__turnSelect">
            <p>turnus:</p>
            <select name="turn" id="turner" className="newLesson__turnSelect">
                {turns.map(turn => (
                    <option value={turn.id} className="turn__option">{turn.name}</option>
                ))}
            </select>
        </div>
        <div className="statistics__classSelect">
            <p>Óra típusa:</p>
            <select name="type" id="2" className="newLesson__lessonType">
                <option value="eloadas" className="type__option">Elöadás</option>
                <option value="gyakorlat" className="type__option">Gyakorlat</option>
                <option value="konzultacio" className="type__option">Konzultáció</option>
            </select>
        </div>

        <div className="statistics__searchSelect">
            <p>Keresés típusa:</p>
            <select name="type" id="2" className="newLesson__lessonType">
                <option value="student" className="type__option">Diák</option>
                <option value="lesson" className="type__option">Óra</option>
            </select>
        </div>

        <LessonStatisticsTable data={selected}/>




    </div>
}


export default StatisticsFilter;