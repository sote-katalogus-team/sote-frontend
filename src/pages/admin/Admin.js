import React from "react";
import './Admin.css'
import AdminSidebar from "../../components/adminSidebar/AdminSidebar";
import NewLesson from "../../components/newLesson/NewLesson";


const Admin = () => {
    return <div className="admin__main">
        <div className="admin__head">
            <AdminSidebar />
            <NewLesson />
        </div>

    </div>
}

export default Admin;