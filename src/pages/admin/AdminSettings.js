import React from "react";
import AdminSidebar from "../../components/adminSidebar/AdminSidebar";
import AdminSettingsBar from "../../components/adminSettingsBar/adminSettingsBar";


const AdminSettings = () => {
    return <div className="admin__main">
        <div className="admin__head">
            <AdminSidebar active={"settings"} />
            <AdminSettingsBar/>
        </div>
    </div>
}

export default AdminSettings