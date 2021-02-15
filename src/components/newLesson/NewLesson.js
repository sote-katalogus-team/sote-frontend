import React, {useEffect, useState} from "react";
import axios from "axios";
import "./NewLesson.css"
import authHeader from "../../security/auth-header";
import {useCookies} from "react-cookie";

const NewLesson = () => {
    const url = process.env.REACT_APP_URL;
    const [turns, setTurns] = useState([])
    const [cookies, setCookies] = useCookies(["user"])



    useEffect(() => {
        fetchTurns();
    },[])


    async function  fetchTurns() {
        axios.get(url+ "/turnus/all", {headers: authHeader(cookies.user)}).then((res) => {
            setTurns(res.data)
        })
    }


    const validateNewLesson = (e) => {
        e.preventDefault()
        let turnId = document.getElementById("1").value;
        console.log(turnId)
        let lessonType = document.getElementById("2").value;
        let lessonName = document.getElementById("newLessonName").value;
        if (lessonName.length < 1) {
            alert("Legyél szíves nevet adni az órának!")
            return;
            }
        let lessonDate = document.getElementById("lesson_date").value;
        let isValidDate = Date.parse(lessonDate);
        if (isNaN(isValidDate)) {
            alert("Valid dátumot legyél szíves megadni!")
            return;
        }
        let isPotlas = document.getElementById("potlas").checked;
        console.log(isPotlas)
        let numberInput = document.getElementById("newlessonPoint").value;
        if (numberInput !== '1' && numberInput !== '2' && numberInput !== '3') {
            alert("Értéknek egyelöre csak 1-et, 2-ot vagy 3-at adhatsz meg!")
            return;
        }
         let data = {
            "turnusId": turnId,
             "name":lessonName,
             "point": numberInput,
             "potlas": isPotlas,
             "date": lessonDate
        }

        console.log(data)

        switch (lessonType) {
            case "eloadas":
                saveNewEloadas(data)
                break;
            case "konzultacio":
                saveNewKonzultacio(data);
                break;
            case "gyakorlat":
                saveNewGyakorlat(data);
                break;
            default:
                alert("Valami hiba tortent!!")
        }

    }



    async function saveNewKonzultacio(data) {
       axios.post(url + "/konzultacio/add", data, {headers: authHeader(cookies.user)}).then(res => {
           alert(res.data)
           window.location.reload();
       })
        console.log("konzultáció")
    }
    async function saveNewEloadas(data) {
       axios.post(url + "/eloadas/add", data, {headers: authHeader(cookies.user)}).then(res => {
           alert(res.data)
           window.location.reload();
       })
        console.log("eloadas")
    }
    async function saveNewGyakorlat(data) {
        axios.post(url + "/gyakorlat/add", data, {headers: authHeader(cookies.user)}).then(res => {
            alert(res.data)
            window.location.reload();
        })
    }







    return <div className="newLesson__main">
        <form onSubmit={validateNewLesson}>
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

            <input required={"required"} id={"newLessonName"} placeholder={"óra neve"} type="text" className="name__input"/>
            <input required={"required"} id={"lesson_date"} type="date"/>
            <br/>


        </div>
        <br/>
        <div className={"newLesson__inputContainer"}>
            <input required={"required"} id={"newlessonPoint"} placeholder={"értéke"} type="number" maxLength={1} min={1} max={3} className={"number__input"}/>
            <label htmlFor="input">pótlás?</label>
            <input type="checkbox" id="potlas" name="potlas" value="pótlás" className={"potlas"}/>
            <button className="newLesson__submit"> Hozzáadás</button>
        </div>
        </form>
    </div>
}

export default NewLesson;