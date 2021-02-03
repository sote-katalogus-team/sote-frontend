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

            <input type="text" className="name__input"/>
            <input type="date"/> <br/>

        </div>
        <br/>
        <div>
            <input type="number" min={1} max={3} className={"number__input"}/>
            <button className="newLesson__submit"> Hozzáadás</button>
        </div>
    </div>
}

export default NewLesson;