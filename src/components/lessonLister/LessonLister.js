import React, {useState, useEffect} from 'react';
import axios from "axios";
import Lesson from "../Lesson/Lesson";


const LessonLister = () => {
    const[lessons, setLessons] = useState([])
    const[turnusId, setTurnusId] = useState(1);
    const[turns, setTurns] = useState([]);
    const url = process.env.REACT_APP_URL;


    useEffect(() => {
        fetchTurns();
    },[])

    useEffect(() => {
        getClassesById()
    },[turnusId])


    async function  fetchTurns() {
        axios.get(url+ "/turnus/all").then((res) => {


            setTurns(res.data)
        })
    }


    async function getClassesById() {
        axios.get(url + "/classes/all/" + turnusId).then(res => {

            let all = [];
            Object.keys(res.data).forEach(elem => {
                res.data[elem].forEach(item => {
                    all.push(item)}
                )})
            setLessons(all)
        })
    }


    console.log(lessons)




    return <div className="lessons__main">
        <select name="turn" id="turner" className="newLesson__turnSelect">
            {turns.map(turn => (
                <option value={turn.id} className="turn__option">{turn.name}</option>
            ))}
        </select>
        <div className="lessons__tableContainer">
            <table>

                <th>Óra típusa</th>
                <th>Óra neve</th>
                <th>Dátuma</th>
                <th>Értéke</th>
                <th>kötelezö jelenlét</th>
                <th>pótlás</th>
                <th>státusz</th>
                <th>törlés</th>
                <Lesson name={"test"} />
                <Lesson name={"test"} />
                <Lesson name={"test"} />
                <Lesson name={"test"} />
            </table>
        </div>
    </div>




}


export default LessonLister;