import React from "react";
import {DataGrid} from '@material-ui/data-grid';


const StudentStatisticsTable = (props) => {
    let content = ""
    if (props.data[0]?.studentName !== undefined) {


        let columns = [
            {field: 'id', headerName: 'id', width: 50},
            {field: 'name', headerName: 'név', width: 170},
            {field: 'neptunCode', headerName: 'neptun kód', width: 140},
            {field: 'konzultacio', headerName: 'konzultáció', width: 110},
            {field: 'eloadas', headerName: 'elöadás', width: 100},
            {field: 'gyakorlat', headerName: 'gyakorlat', width: 110},
            {field: 'warning', headerName: 'figyelmeztetés', width: 200},
        ]

        let rows = []

        let results = []

        if (props.warning) {

            switch (props.warning) {
                case "konzultacio" :
                    props.data.forEach(data => {
                        if (data.warning !== null) {
                            if (data?.warning.includes("Konzultáció")) {
                                results.push(data)
                            }
                        }

                    })
                    break;
                case  "eloadas" :
                    props.data.forEach(data => {
                        if (data.warning !== null) {
                            if (data?.warning.includes("Előadás")) {
                                results.push(data)
                            }
                        }

                    })
                    break;
                case  "gyakorlat" :
                    props.data.forEach(data => {
                        if (data.warning !== null) {
                            if (data?.warning.includes("Gyakorlat")) {
                                results.push(data)
                            }
                        }
                    })
                    break;
                default :
                    props.data.forEach(item => {
                        results.push(item)
                    })
            }
        }



        let id = 0;
        results.forEach(item => {
            id++;
            rows.push({id: id, name: item.studentName, neptunCode: item.neptunCode,konzultacio: item.percentages.consultation + "%", eloadas: item.percentages.lecture + "%", gyakorlat: item.percentages.practice + "%" ,warning: item.warning})
        })


        content =  <div className={"lessonStatistics__container"}>
            <DataGrid rows={rows} columns={columns}/>
        </div>
    }
    return content
}

export default StudentStatisticsTable;