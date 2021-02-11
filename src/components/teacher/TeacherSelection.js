import React, {useState, useEffect} from 'react';
import './TeacherSelection.css';
import axios from "axios";
import authHeader from "../../security/auth-header";
import {useCookies} from "react-cookie";

const TeacherSelection = ({name, onSelectionChange}) => {
    const now = new Date();
    const today = now.toLocaleDateString('hu');
    const [selectedItem, setSelectedItem] = useState(null);
    const url = process.env.REACT_APP_URL;
    const [konz, setKonz] = useState([])
    const [elo, setElo] = useState([])
    const [gyak, setGyak] = useState([])
    const [cookies, setCookies] = useCookies(["user"])


    //Mock data
    //TODO http request to get the list
    const [list, setList] = useState([]);


    useEffect(() => {
            getTodayClasses()
    }, [])


    async function getTodayClasses() {
        axios.get(url + '/classes/find_by_date', {headers: authHeader(cookies.user)}).then(res => {
                    console.log(res.data)
            let all = Object.keys(res.data);
            setElo(res.data[all[0]])
            setGyak(res.data[all[1]])
            setKonz(res.data[all[2]])
        })


    }


    useEffect(() => {
        onSelectionChange(selectedItem);
    }, [selectedItem, onSelectionChange])

    const handleRowClick = (item, type) => {
        let data= {
            type: type,
            item: item
        }
        setSelectedItem(data || null);
    };

    const getClassName = (item, type) => {
        if (selectedItem && item.id === selectedItem.item.id && selectedItem.type === type) {
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
                    {elo.map((item) => (
                        <tr className={getClassName(item, "eloadas")} key={"elo"+ item.id} data-id={"elo"+ item.id}
                            onClick={() => handleRowClick(item, "eloadas")}>
                            <td>{item.name}</td>
                            <td>Elöadás</td>
                        </tr>
                    ))}
                    {gyak.map((item) => (
                        <tr className={getClassName(item, "gyakorlat")} key={"gyak" + item.id} data-id={"gyak" + item.id}
                            onClick={() => handleRowClick(item, "gyakorlat")}>
                            <td>{item.name}</td>
                            <td>Gyakorlat</td>
                        </tr>
                    ))}
                    {konz.map((item) => (
                        <tr className={getClassName(item, "konzultacio" )} key={"konz"+ item.id} data-id={"konz" + item.id} onClick={() => handleRowClick( item, "konzultacio")}>
                            <td>{item.name}</td>
                            <td>Konzultáció</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default TeacherSelection;
