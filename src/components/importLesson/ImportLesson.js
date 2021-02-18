import React from "react";
import axios from "axios";
import authHeader from "../../security/auth-header";
import {useCookies} from "react-cookie";


const ImportLesson = (props) => {
    const url = process.env.REACT_APP_URL;
    const [cookies, setCookies] = useCookies("user")


    function changeDate(e) {
        console.log(e.target.value)
        saveNewDate(e.target.value, props.type).then(res => {
            console.log(res)
        })
    }

    /*
     @Id
    @GeneratedValue
    private Long id;

    private Long turnusId;

    private String name;

    @Temporal(TemporalType.DATE)
    private Date date;

    private Integer point;

    @Builder.Default
    private String code = null;

    private Boolean potlas;

    @Builder.Default
    private Boolean active = true;

    @Builder.Default
    private Boolean isAttendanceOpen = false;
     */

    async function saveNewDate(date, type) {
        let data = {
            turnusId: props.data.turnusId,
            name: props.data.name,
            date: date,
            point: props.data.point,
            potlas: props.data.potlas
        }
        try {
            const resp = await axios.put(url + "/" + type + "/" + props.data.id + "/update" , data, {headers: authHeader(cookies.user)} )
            return resp.data
        }
        catch (error) {

        }
    }





    return <tr>
        <td>{props?.type}</td>
        <td>{props?.data.name}</td>
        <td><input  onChange={changeDate} type="date"
        defaultValue={props?.data.date}/></td>
    </tr>
}

export default ImportLesson;