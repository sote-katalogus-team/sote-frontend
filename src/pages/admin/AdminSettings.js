import React from "react";
import AdminSidebar from "../../components/adminSidebar/AdminSidebar";
import AdminSettingsBar from "../../components/adminSettingsBar/adminSettingsBar";
import {useCookies} from "react-cookie";
import Authenticate from "../../security/auth.service";


const AdminSettings = () => {
    const [cookies] = useCookies([
        "user"
    ]);
    Authenticate(cookies.user, "ADMIN")

    return <div className="admin__main">
        <div className="admin__head">
            <AdminSidebar  />
            <AdminSettingsBar/>
        </div>
    </div>
}

export default AdminSettings