import React from "react";
import {useCookies} from "react-cookie";
import Authenticate from "../../security/auth.service";
import AdminSidebar from "../../components/adminSidebar/AdminSidebar";
import AdminImportTurnus from "../../components/adminImportTurn/AdminImportTurnus";


const AdminImportTurn = () => {
    const [cookies] = useCookies([
        "user"
    ]);



    Authenticate(cookies.user, "ADMIN")
    return  <div className="admin__main">
        <div className="admin__head">
            <AdminSidebar active={"new-lesson"} />
            <AdminImportTurnus />
        </div>
    </div>
}

export default AdminImportTurn