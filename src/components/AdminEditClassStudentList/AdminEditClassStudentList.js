import React, {useEffect, useState} from "react";
import {
    Button,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from "@material-ui/core";
import axios from "axios";
import authHeader from "../../security/auth-header";
import {useCookies} from "react-cookie";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


const useTheme = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const AdminEditClassStudentList = (props) => {
    const [cookies, setCookies] = useCookies("user")
    const url = process.env.REACT_APP_URL;
    const [lessonData, setLessonData] = useState([])
    const [finished, setFinished] = useState(false)
    const classes = useStyles();

    const theme = useTheme();


    let content = ""




    useEffect(() => {
        console.log("halika")
        fetchLessonStudent().then(res => {
            setLessonData(res)
            setFinished(true)
        })
    }, [])









    async function fetchLessonStudent() {
        try  {
            const resp = await axios.get(url + "/"+ props.type + "/"+ props.data + "/students", {headers: authHeader(cookies.user)});
            console.log(resp.data)
            return (resp.data);
        }
        catch (error)  {
            console.log(error)
        }
    }


    console.log(props.type)


    const submitNewStudent = (e) => {
        e.preventDefault()
        saveStudent(document.getElementById("neptunCode").value).then(res => {
            fetchLessonStudent().then(res => {
                setLessonData(res)
                }
            )
        })




    }

    async function saveStudent (neptunCode) {
        try {
            const resp = await axios.post(url + "/student/addByNeptunCode", {
                "neptunCode": neptunCode,
                "classInfo": {
                    "id": props.data,
                    "type": props.type.toUpperCase(),
                }
            }, {headers: authHeader(cookies.user)})
            return resp.data
        }
        catch (error) {
            console.log(error)
        }
    }


    if (finished === true) {
        if (lessonData !== undefined) {

            if (props?.data && props.type) {
                console.log(lessonData)
                content = <div className="studentList__container">
                    <div className={theme.root}>
                        <form onSubmit={submitNewStudent} >
                            <TextField required={true} id="neptunCode" label="neptun kód" variant="outlined" />
                            <Button className={"addStudentButton"} type={"submit"} variant="outlined" color="primary">
                                Hozzáadás
                            </Button>
                        </form>
                    </div>

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