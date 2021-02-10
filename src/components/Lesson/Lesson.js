import React from 'react';
import fontawesome from '@fortawesome/fontawesome'
import {faTrash} from '@fortawesome/fontawesome-free-solid'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import {useCookies} from "react-cookie";
import authHeader from "../../security/auth-header";

const Lesson = (props) => {
    const url = process.env.REACT_APP_URL;
    const [cookies, setCookies] = useCookies(["user"])



    fontawesome.library.add(faTrash);

    const deleteLesson = () => {
        let ok = window.confirm("Biztosan törölni akarod a " + props.data?.name + " nevu órát??")
        if (ok === false) {
            return
        }
        switch (props.type) {
            case "elöadás":
                deleteEloadas()
                break;
            case "konzultáció":
                deleteKonzultacio();
                break;
            case "gyakorlat":
                deleteGyakorlat();
                break;
            default:
                alert("Valami hiba tortent!!")
        }


    }


    async function deleteKonzultacio() {
        axios.delete(url + "/konzultacio/" + props.data?.id +  "/delete", {headers: authHeader(cookies.user)} ).then(res => {
            alert(res.data)



            window.location.reload();
        })
        console.log("konzultáció")
    }
    async function deleteEloadas() {
        axios.delete(url + "/eloadas/"+ props.data?.id +  "/delete", {headers: authHeader(cookies.user)}).then(res => {
            alert(res.data)
            window.location.reload();
        })
        console.log("eloadas")
    }
    async function deleteGyakorlat() {
        axios.delete(url + "/gyakorlat/"+ props.data?.id +  "/delete", {headers: authHeader(cookies.user)}).then(res => {
            alert(res.data)
            window.location.reload();
        })
    }






    let potlasText = "nem"
    if (props.data.potlas === true) {
        potlasText = "igen"
    }

    let statuszText = "aktív";

    if (!props.data.active) {
        statuszText = "passzív"
    }

    return <tr>
        <td>{props?.type}</td>
        <td>{props.data?.name}</td>
        <td>{props.data?.date}</td>
        <td>{props.data?.point}</td>
        <td>{potlasText}</td>
        <td>{statuszText}</td>
        <td onClick={deleteLesson}> <FontAwesomeIcon  icon="trash"  className={"lesson_trash)"}/></td>
    </tr>
}

export default Lesson;