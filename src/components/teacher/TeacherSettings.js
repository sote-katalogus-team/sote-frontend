import React, {useState, useEffect} from "react";
import './TeacherSettings.css';

const TeacherSettings = ({selection, onChangeCounterValue}) => {
  const [counter, setCounter] = useState(90000);

  useEffect(() => {
    onChangeCounterValue(counter);
  }, [counter, onChangeCounterValue]);

  const handleCounterValueChange = (e) => {
    setCounter(e.target.value);
  }
  console.log(selection)

  return (
    <>
      <div className="selection__container">
        <div className="selection__title">Választott óra</div>
        <div className="selection__name">{`${selection.item?.name} ${selection.type}`}</div>
      </div>
      <select id="counter" name="counter" className="counter__select" onChange={handleCounterValueChange}>
        <option value="90000">1:30</option>
        <option value="120000">2:00</option>
        <option value="150000">2:30</option>
        <option value="180000">3:00</option>
      </select>
    </>
  );
}

export default TeacherSettings;
