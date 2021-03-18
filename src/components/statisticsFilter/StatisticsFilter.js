import React, {useEffect, useState} from "react";
import axios from "axios";
import LessonStatisticsTable from "../statisticsTable/LessonStatisticsTable";
import authHeader from "../../security/auth-header";
import {useCookies} from "react-cookie";
import StudentStatisticsTable from "../statisticsTable/StudentStatisticsTable";

const StatisticsFilter = () => {
    const[turns, setTurns] = useState([]);
    const[turnId, setTurnId] = useState(null)
    const[selected, setSelected] = useState([])
    const[selectedType, setSelectedType] = useState("student")
    const url = process.env.REACT_APP_URL;
    const [cookies] = useCookies(["user"])
    const [warning, setWarning] = useState("all")



    useEffect(() => {
        fetchTurns().then(res => {
            setTurns(res)
            setTurnId(res[0]?.id)
        });

    }, [])


       const changeSelected = () => {
        fetchClassStats(turnId).then(res => {
            setSelected(res.data)
        })
    }


    let table = ""


    if (selectedType) {
        if (selectedType === "lesson") {
            table =  <LessonStatisticsTable key={selected} data={selected}/>
        }
        if (selectedType === "student") {
            table =  <StudentStatisticsTable warning={warning} key={selected} data={selected} />
        }
    }


    async function fetchTurns() {
        try {
            const resp = await  axios.get(url + "/turnus/all", {headers: authHeader(cookies.user)})
            return resp.data
        }
        catch (error) {

        }
    }
    async function fetchClassStats(turnId) {
        try {
            const resp = await axios.get(url + "/classes/statistic/" + turnId, {headers: authHeader(cookies.user)});
            return resp.data
        } catch (error) {
            console.log(error)
        }
    }



    async function fetchSelectedStudent(turnId) {
        try {
            const resp = await axios.get(url + "/classes/student_statistic/" + turnId, {headers: authHeader(cookies.user)})
            return resp.data
        }
        catch (error) {
            console.log(error)

        }
    }


    function selectTurn(e) {
        e.preventDefault()
        setTurnId(e.target.value)
        if (selectedType === "lesson") {
            fetchClassStats(e.target.value).then(res => {
                    setSelected(res)
                }
            )
        }
        if (selectedType === "student") {
            fetchSelectedStudent(e.target.value).then(res => {
                setSelected(res)
            })
        }
    }


    const selectType = (e) => {
        e.preventDefault()
        setSelectedType(e.target.value)
        if (e.target.value === "lesson") {
            fetchClassStats(turnId).then(res => {
                    setSelected(res)
                }
            )
        }
        if (e.target.value === "student") {
            fetchSelectedStudent(turnId).then(res => {
                setSelected(res)
            })
        }


    }

    function warningSelect(e) {
        e.preventDefault()
        setWarning(e.target.value)
    }

    return <div className="statisticsFilter__main">

        <div className="statistics__turnSelect">
            <p>turnus:</p>
            <select onChange={selectTurn} name="turn" id="turner" className="newLesson__turnSelect">
                {turns.map(turn => (
                    <option value={turn.id} className="turn__option">{turn.combinedName}</option>
                ))}
            </select>
        </div>
        <div className="statistics__selects">
        <div className="statistics__classSelect">
            <p>Figyelmeztetés szerint: (csak diák)</p>
            <select onChange={warningSelect} name="type" id="2" className="newLesson__lessonType">
                <option value="all" className="type__option">Összes diák</option>
                <option value="eloadas" className="type__option">Előadás</option>
                <option value="gyakorlat" className="type__option">Gyakorlat</option>
                <option value="konzultacio" className="type__option">Konzultáció</option>
            </select>
        </div>

        <div className="statistics__searchSelect">
            <p>Jelenlét szerint:</p>
            <select onChange={selectType} name="type" id="2" className="newLesson__lessonType">
                <option selected hidden>Choose here</option>
                <option value="student" className="type__option">Diák</option>
                <option value="lesson" className="type__option">Óra</option>
            </select>
        </div>
        </div>
        <div className="statistics__tableContainer">
            {table}
        </div>
    </div>
}


export default StatisticsFilter;