import React from "react";


const AdminEditClassStudentList = (props) => {

    let content = ""

    console.log(props.type)

    if (props?.data && props.type) {
        let rows = []


      content =  <div className="studentList__container">
        </div>
    }

    return content
}

export default AdminEditClassStudentList