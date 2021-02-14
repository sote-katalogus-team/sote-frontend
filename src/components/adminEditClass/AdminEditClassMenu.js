import React, {useEffect, useState} from 'react'
import AdminEditClassStudentList from "../AdminEditClassStudentList/AdminEditClassStudentList";
import axios from "axios";
import authHeader from "../../security/auth-header";
import {useCookies} from "react-cookie";


const AdminEditClassMenu = () => {
    const url = process.env.REACT_APP_URL;
    const [turns, setTurns] = useState(null)
    const [selectedTurnusId, setSelectedTurnusId] = useState(null);
    const [lessons, setLessons] = useState(null)
    const [cookies, setCookies] = useCookies(["user"])
    const [activeClass, setActiveClass] = useState(null)
    const [activeType, setActiveType] = useState(null)
    const [activeLesson, setActiveLesson] = useState(null)


    useEffect(() => {
        fetchTurns().then(res => {
            console.log(res)
            setTurns(res)
            if (res.length > 0) {
                setSelectedTurnusId(res[0].id)
            }

    })}, [])


    useEffect(() => {
        getClasses()
    }, [selectedTurnusId])

  const getClasses = () => {
        if (selectedTurnusId !== null) {
      getClassesById(selectedTurnusId).then(res => {
          console.log(res, "fetch classes")
          let all = Object.keys(res);
          setActiveType(res[all[0]])
          setActiveClass("eloadas")
          setLessons(res)
          //setActiveType(res[0])
          // if (res[0][0].id !== undefined) {
          ///      setActiveLesson(res[0][0].id)
      })};
  }


    async function fetchTurns() {
        try {
            const resp = await axios.get(url + "/turnus/all");
            return (resp.data);
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }

    }


    function getLesson(active) {
        let result = [];
        console.log(lessons)
        if (lessons !== null) {
            let all = Object.keys(lessons);
            switch (active) {
                case "eloadas":
                    return lessons[all[0]]
                case "konzultacio":
                    console.log("konzultacio")
                    return lessons[all[2]]
                case "gyakorlat":
                    console.log("gyakorlat")
                    return lessons[all[1]]
                default:
                    alert("sthing went wrong")
                    return result;
            }
        }
        else return result;
    }


    async function getClassesById(turnusId) {
        try {
            const resp = await axios.get(url + "/classes/all/" + turnusId, {headers: authHeader(cookies.user)});
            return (resp.data);
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
        /*
        if (turnusId !== null) {
          await  axios.get().then(res => {
                console.log(res.data)
                setLessons(res.data)
                let all = Object.keys(res.data);
                setActiveType(res.data[all[0]])
                if (res?.data[all[0]][0].id !== undefined) {
                    setActiveLesson(res?.data[all[0]][0].id)
                }

            })
        }

         */
    }

    let LessonSelect = <h1>Nincsen ilyen típusú óra ehhez a turnushoz</h1>;

    const selectLesson = (e) => {
        console.log(e.target.value)
        setActiveLesson(e.target.value)
    }


    if (activeType !== null) {
        console.log(activeType, "ACTIVE")
        LessonSelect =
            <>
                <p>Óra:</p>
                <select className="newLesson__turnSelect" onChange={selectLesson}>
                    {
                        activeType.map(lesson => (
                            <option value={lesson?.id}>{lesson.name}</option>
                        ))
                    }
                </select>
            </>
    }


    const changeLessonType = (e) => {
        setActiveClass(e.target.value)
        setActiveType(getLesson(e.target.value))
    }


    const changeTurnus = () => {
        setSelectedTurnusId(document.getElementById("1").value)
    }
    let content = <h1>LOADING</h1>

    if (turns !== null) {
       content = <div className="adminEdit__main">
            <div className="classSelect__container">
                <p>Turnus:</p>
                <select onChange={changeTurnus} name="turn" id="1" className="newLesson__turnSelect">
                    {turns.map(turn => (
                        <option value={turn.id} className="turn__option">{turn.name}</option>
                    ))}
                </select>

                <p>Óra típusa:</p>
                <select value={activeClass} onChange={changeLessonType} name="type" id="2"
                        className="newLesson__lessonType">
                    <option value="eloadas" className="type__option">Elöadás</option>
                    <option value="gyakorlat" className="type__option">Gyakorlat</option>
                    <option value="konzultacio" className="type__option">Konzultáció</option>
                </select>
                {LessonSelect}
            </div>

            <div className="tableContainer">
                <AdminEditClassStudentList type={activeClass} data={activeLesson}/>
            </div>
        </div>
    }



    return content
}

export default AdminEditClassMenu

