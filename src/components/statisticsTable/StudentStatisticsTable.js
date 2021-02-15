import React from "react";
import { DataGrid } from '@material-ui/data-grid';


const StudentStatisticsTable = (props) => {
    console.log(props?.data, "STUDEEEENTS")
    let columns = [
        { field: 'id', headerName: 'id', width: 100 },
        { field: 'name', headerName: 'név', width: 200 },
        { field: 'neptunCode', headerName: 'neptun kód', width: 150 },
        { field: 'warning', headerName: 'figyelmeztetés', width: 200 },
    ]

    let rows = []


    if (props.warningType) {
        switch(props.warningType) {
            case "konzultacio" :
                props.data.forEach(data => {
                    if (!data.includes("Konzultáció")) {
                        props.data.pop(data)
                    }
                })
        }
    }

    console.log(props.data)






    let id = 0;
    props.data.forEach(item => {
        id++;
       rows.push({id:id ,name: item.studentName, neptunCode:item.neptunCode, warning: item.warning})
    })



    return  <div className={"lessonStatistics__container"} >
        <DataGrid rows={rows} columns={columns} />
    </div>

}

export default StudentStatisticsTable;