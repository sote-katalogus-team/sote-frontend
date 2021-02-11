import React from "react";
import AdminSidebar from "../../components/adminSidebar/AdminSidebar";


const AdminSettings = () => {
    return <div className="admin__main">
        <div className="admin__head">
            <AdminSidebar active={"new-lesson"} />
            <AdminSettings />
        </div>
    </div>
}

export default AdminSettings