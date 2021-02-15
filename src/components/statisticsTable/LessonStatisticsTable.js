import React from "react";
import { DataGrid } from '@material-ui/data-grid';


const LessonStatisticsTable = (props) => {
    console.log(props?.data)
    let content = "";

    if (props.data[0]?.currentClass !== undefined) {
        let columns = [
            {field: 'id', headerName: 'id', width: 100},
            {field: 'name', headerName: 'név', width: 200},
            {field: 'potlas', headerName: 'pótlás', width: 100},
            {field: 'date', headerName: 'dátum', width: 150},
            {field: 'headcount', headerName: 'részvétel', width: 200}
        ]

        let rows = []


        const isPotlas = (potlas) => {
            if (potlas === true) {
                return "igen"
            } else {
                return "nem"
            }
        }

        let id = 0;
        props.data.forEach(item => {
            id++;
            rows.push({
                id: id,
                name: item.currentClass.name,
                potlas: isPotlas(item.currentClass.potlas),
                date: item.currentClass.date,
                headcount: item.headCount
            })
        })


        content = <div className={"lessonStatistics__container"}>
            <DataGrid rows={rows} columns={columns}/>
        </div>
    }
    return content;
}

export default LessonStatisticsTable;