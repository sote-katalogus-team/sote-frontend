import React, {useEffect, useState} from "react";
import axios from "axios";
import authHeader from "../../security/auth-header";
import {useCookies} from "react-cookie";
import fontawesome from '@fortawesome/fontawesome'
import {faArrowAltCircleDown} from '@fortawesome/fontawesome-free-solid'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ImportLesson from "../importLesson/ImportLesson";

const AdminImportTurnus = () => {
    const [turns, setTurns] = useState([])
    const url = process.env.REACT_APP_URL;
    const [cookies, setCookies] = useCookies(["user"])
    const [lessons, setLessons] = useState([])
    const [konz, setKonz] = useState([])
    const [elo, setElo] = useState([])
    const [gyak, setGyak] = useState([])

    fontawesome.library.add(faArrowAltCircleDown);


    useEffect(() => {
        fetchTurns().then(res => {
            setTurns(res)
        })
    }, [])


    async function fetchTurns() {
        try {
            const resp = await axios.get(url + "/turnus/all", {headers: authHeader(cookies.user)})
            return resp.data
        } catch (error) {

        }
    }

    async function importLessons(turn1, turn2) {
        try {

        } catch (error) {

        }
    }

    let tableBody = <tbody> </tbody>

    if (lessons !== null && lessons !== undefined) {
        console.log(lessons, "LESSSSONS")
        tableBody =
            <tbody>
            { konz.map(lesson => (
            <ImportLesson data={lesson} type={"konzultáció"}/>
            ))}
            {gyak.map(lesson => (
            <ImportLesson data={lesson} type={"gyakorlat"}/>
            ))}
            {elo.map(lesson => (
            <ImportLesson data={lesson} type={"eloadas"}/>
            ))}
            </tbody>

    }


    async function fetchLessons(turnId) {
        try {
            const resp = await axios.get(url + "/classes/all/" + turnId, {headers: authHeader(cookies.user)});
            return resp.data
        } catch (error) {
            console.log(error)
        }
    }

    function selectTurn1() {

    }

    function selectTurn2() {

    }

    function selectListTurn(e) {
        fetchLessons(e.target.value).then(res => {
            setLessons(res)
            let all = Object.keys(res);
            setElo(res[all[0]])
            setGyak(res[all[1]])
            setKonz(res[all[2]])
        })
    }

    return <div className="importTurnus__main">
        <div className="selectContainers">
            <p>Válassza ki a Turnust amelynek az óráit szeretné másolni:</p>
            <select onChange={selectTurn1} name="turn" id="turner" className="newLesson__turnSelect">
                {turns.map(turn => (
                    <option value={turn.id} className="turn__option">{turn.name}</option>
                ))}
            </select>
            <p className={"import-arrow"}><FontAwesomeIcon className={"arrow"} icon={"arrow-alt-circle-down"}/></p>
            <p>Válassza ki a Turnust ahová szeretné másolni az órákat.:</p>
            <select onChange={selectTurn2} name="turn" id="turner" className="newLesson__turnSelect">
                {turns.map(turn => (
                    <option value={turn.id} className="turn__option">{turn.name}</option>
                ))}
            </select> <br/>
            <button className={"importTurnus__copyButton"}>Másolás</button>
        </div>


        <div className="importTurnus__tableContainer">
            <p>Turnusban szereplő órák listája:</p>
            <select onChange={selectListTurn} name="turn" id="turner" className="newLesson__turnSelect">
                {turns.map(turn => (
                    <option value={turn.id} className="turn__option">{turn.name}</option>
                ))}
            </select>


            <table>
                <thead>
                <tr>
                    <th>Óra típusa</th>
                    <th>Óra neve</th>
                    <th>Dátuma</th>
                </tr>
                </thead>
                {tableBody}
            </table>
        </div>


    </div>
}

export default AdminImportTurnus
