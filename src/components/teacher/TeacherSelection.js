import React, { useState, useEffect } from 'react';
import './TeacherSelection.css';

const TeacherSelection = ({ name, onSelectionChange }) => {
  const now = new Date();
  const today = now.toLocaleDateString('hu');
  const [selectedItem, setSelectedItem] = useState(null);

  //Mock data
  //TODO http request to get the list
  const [list, setList] = useState([
    { id: 1, name: "Gyerek1", type: "Előadás", supplement: false },
    { id: 2, name: "Sebészet2", type: "Gyakorlat", supplement: false },
    { id: 3, name: "Covid 19", type: "Konzultáció", supplement: false },
    { id: 4, name: "Gyerek1 Pót", type: "Előadás", supplement: true },
    { id: 5, name: "Sebészet3", type: "Gyakorlat", supplement: false },
    { id: 6, name: "Covid 19 - 2", type: "Konzultáció", supplement: false },
  ]);

  useEffect(() => {
    onSelectionChange(selectedItem);
  }, [selectedItem, onSelectionChange])

  const handleRowClick = (id) => {
    setSelectedItem(list.find((item) => item.id === id) || null);
  };

  const getClassName = item => {
    if (selectedItem && item.id === selectedItem.id) {
      return 'selected';
    } else if (item.supplement) {
      return "supplement";
    }

    return '';
  }

  return (
    <>
      <div className="teacher__welcome">Üdvözöljük, {name}</div>
      <div className="teacher__date">{today}</div>
      <div className="teacher__wrapper">
        <table className="teacher__table">
          <thead className="teacher__table__head">
            <tr>
              <td>Név</td>
              <td>Típus</td>
            </tr>
          </thead>
          <tbody>
            {list.map((item) => (
              <tr className={getClassName(item)} key={item.id} data-id={item.id} onClick={() => handleRowClick(item.id)}>
                <td>{item.name}</td>
                <td>{item.type}</td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </>
  );
};

export default TeacherSelection;
