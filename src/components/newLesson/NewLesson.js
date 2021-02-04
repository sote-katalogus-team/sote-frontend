import React, {useEffect, useState} from "react";
import axios from "axios";
import "./NewLesson.css"

const NewLesson = () => {
    const url = process.env.REACT_APP_URL;
    const [turns, setTurns] = useState([])


    useEffect(() => {
        fetchTurns();
    },[])


    async function  fetchTurns() {
        axios.get(url+ "/turnus/all").then((res) => {
            setTurns(res.data)
        })
    }


    const saveNewLesson = () => {
        let turnId = document.getElementById("1").value;
        let lessonType = document.getElementById("2").value;
        let lessonName = document.getElementById("newLessonName").value;
        let lessonDate = document.getElementById("lesson_date").value;
        let isPotlas = document.getElementById("potlas").checked;
        let numberInput = document.getElementById("newlessonPoint").value;
        console.log(turnId)
        console.log(lessonType)
        console.log(lessonName)
        console.log(lessonDate)
        console.log(isPotlas)
        console.log(numberInput)
    }

    return <div className="newLesson__main">
        <div className="newLesson__selectContainer">
            <select name="turn" id="1" className="newLesson__turnSelect">
                {turns.map(turn => (
                    <option value={turn.id} className="turn__option">{turn.name}</option>
                ))}
            </select>
            <select name="type" id="2" className="newLesson__lessonType">
                <option value="eloadas" className="type__option">Elöadás</option>
                <option value="gyakorlat" className="type__option">Gyakorlat</option>
                <option value="konzultacio" className="type__option">Konzultáció</option>
            </select> <br/>

            <input id={"newLessonName"} placeholder={"óra neve"} type="text" className="name__input"/>
            <input id={"lesson_date"} type="date"/>
            <br/>


        </div>
        <br/>
        <div>
            <input id={"newlessonPoint"} placeholder={"értéke"} type="number" maxLength={1} min={1} max={3} className={"number__input"}/>
            <label htmlFor="input">pótlás?</label>
            <input type="checkbox" id="potlas" name="potlas" value="pótlás" className={"potlas"}/>
            <button onClick={saveNewLesson} className="newLesson__submit"> Hozzáadás</button>
        </div>
    </div>
}

export default NewLesson;