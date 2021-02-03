import React from "react";
import "./AdminSidebar.css"

const AdminSidebar = () => {
    return <div className="admin__sidebar">
        <div className="admin__sidebarImage">
            <img className="admin__image" src={"https://www.semmelweiskiado.hu/images/termekek/2/1691/semmelweis_kiado_logo_1608213956.jpg"}  alt={"sote logo"}/>
            <p className={"admin__title"}>ADMIN SOTE</p>
        </div>
        <div className="admin__sidebarMenu">
            <p className="admin__newLesson">Órák hozzáadása</p>
            <p className="admin__statisztika">Statisztika</p>
            <p className="admin__newTeacher">Oktatók hozzáadása</p>
        </div>
    </div>
}


export default AdminSidebar;
