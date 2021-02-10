import React, { useState } from "react";
import axios from 'axios';
import "./TeacherAttendance.css";
import authHeader from "../../security/auth-header";
import {useCookies} from "react-cookie";

const TeacherAttendance = ({ numOfStudents, selection }) => {
  const [neptunCode, setNeptunCode] = useState("");
  const [message, setMessage] = useState(null);
  const url = process.env.REACT_APP_URL;
  const [cookies, setCookies] = useCookies(['user'])

  const handleNeptunCodeChange = (e) => {
    setMessage(null);
    setNeptunCode(e.target.value.trim().toUpperCase());
  };

  const handleAddStudentClick = () => {
    axios.post(url + "/student/addByNeptunCode", {
      body: {
        "neptunCode": neptunCode,
        "type": selection.type.toUpperCase(),
        "id": selection.item.id
      }
    }, {headers: authHeader(cookies.user)}).then(res => console.log(res.data));
    setMessage("A hozzáadás sikerült!");
    //setMessage("A hozzáadás sikertelen!");
  };

  const handleNeptunClodeClick = () => {
    setNeptunCode("");
    setMessage(null);
  }

  return (
    <>
      <div className="attendance__title">Jelenleg résztvevő diákok száma:</div>
      <div className="attendance__numOfStudents">{numOfStudents}</div>
      <div className="attendance__neptunText">Hozzáadás neptun kóddal</div>
      <input
        type="text"
        id="neptunCode"
        className="attendance__neptun"
        placeholder="Neptun kód"
        maxLength="6"
        autoComplete="off"
        value={neptunCode}
        onChange={handleNeptunCodeChange}
        onClick={handleNeptunClodeClick}
      />
      <button
        type="button"
        className="attendance__addStudent"
        disabled={neptunCode.length < 6}
        onClick={handleAddStudentClick}
      >
        <i className="fas fa-user-plus"></i>
        <span> Diák hozzáadása</span>
      </button>
      {message && <div className="attendance__message">{message}</div>}
    </>
  );
};

export default TeacherAttendance;
