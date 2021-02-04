import React, {useState, useEffect} from 'react';
import axios from "axios";
import Lesson from "../Lesson/Lesson";


const LessonLister = () => {
    //  const[lessons, setLessons] = useState([])
    const [konz, setKonz] = useState([])
    const [elo, setElo] = useState([])
    const [gyak, setGyak] = useState([])
    const [turnusId, setTurnusId] = useState(1);
    const [turns, setTurns] = useState([]);
    const url = process.env.REACT_APP_URL;


    useEffect(() => {
        fetchTurns();
    }, [])

    useEffect(() => {
        getClassesById()
    }, [turnusId])


    async function fetchTurns() {
        axios.get(url + "/turnus/all").then((res) => {


            setTurns(res.data)
        })
    }


    async function getClassesById() {
        axios.get(url + "/classes/all/" + turnusId).then(res => {
            let all = Object.keys(res.data);
            setElo(res.data[all[0]])
            setGyak(res.data[all[1]])
            setKonz(res.data[all[2]])
        })
    }


    console.log(elo)


    return <div className="lessons__main">
        <select name="turn" id="turner" className="newLesson__turnSelect">
            {turns.map(turn => (
                <option value={turn.id} className="turn__option">{turn.name}</option>
            ))}
        </select>
        <div className="lessons__tableContainer">
            <table>
                <thead>
                <th>Óra típusa</th>
                <th>Óra neve</th>
                <th>Dátuma</th>
                <th>Értéke</th>
                <th>pótlás</th>
                <th>státusz</th>
                <th>törlés</th>
                </thead>
                <tbody>
                {elo.map(e => (
                    <Lesson type={"elöadás"} data={e} />
                ))}
                {gyak.map(e => (
                    <Lesson type={"gyakorlat"} data={e} />
                ))}
                {konz.map(e => (
                    <Lesson type={"konzultáció"} data={e} />
                ))}

                </tbody>

            </table>
        </div>
    </div>


}


export default LessonLister;