import React, {useEffect, useState} from "react";
import {makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import axios from "axios";
import authHeader from "../../security/auth-header";
import {useCookies} from "react-cookie";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const AdminEditClassStudentList = (props) => {
    const [cookies, setCookies] = useCookies("user")
    const url = process.env.REACT_APP_URL;
    const [lessonData, setLessonData] = useState([])
    const [finished, setFinished] = useState(false)
    const classes = useStyles();



    let content = <div><h1>LOADING</h1></div>




    useEffect(() => {
        console.log("halika")
        fetchLessonStudent().then(res => {
            setLessonData(res)
            setFinished(true)
        })
    }, [])









    async function fetchLessonStudent() {
        try  {
            console.log(url + "/"+ props.type + "/"+ props.data + "/students")
            const resp = await axios.get(url + "/"+ props.type + "/"+ props.data + "/students", {headers: authHeader(cookies.user)});
            console.log(resp.data)
            return (resp.data);
        }
        catch (error)  {
            console.log(error)
        }
    }


    console.log(props.type)

    if (finished === true) {
        if (lessonData !== undefined) {

            if (props?.data && props.type) {
                console.log(lessonData)
                content = <div className="studentList__container">
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Diák neve</TableCell>
                                    <TableCell align="right">neptun kódja:</TableCell>
                                    <TableCell align="right">email címe:</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {lessonData.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.name}</TableCell>
                                        <TableCell align="right">{row.neptunCode}</TableCell>
                                        <TableCell align="right">{row.email}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            }
        }
    }

    return content
}

export default AdminEditClassStudentList