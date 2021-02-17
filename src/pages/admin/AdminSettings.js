import React from "react";
import AdminSidebar from "../../components/adminSidebar/AdminSidebar";
import AdminSettingsBar from "../../components/adminSettingsBar/adminSettingsBar";
import {useCookies} from "react-cookie";
import adminAuthenticate from "../../security/auth.service";


const AdminSettings = () => {
    const [cookies, setCookie] = useCookies([
        "user"
    ]);
    adminAuthenticate(cookies.user)
    return <div className="admin__main">
        <div className="admin__head">
            <AdminSidebar active={"settings"} />
            <AdminSettingsBar/>
        </div>
    </div>
}

export default AdminSettings