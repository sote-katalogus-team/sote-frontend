import React from "react";
import AdminSidebar from "../../components/adminSidebar/AdminSidebar";

import NewTurnus from "../../components/newTurnus/NewTurnus";
import TurnusLister from "../../components/turnusLister/TurnusLister";
import {useCookies} from "react-cookie";
import Authenticate from "../../security/auth.service";

const AdminNewTurnus = () => {
    const [cookies, setCookie] = useCookies([
        "user"
    ]);
    Authenticate(cookies.user, "ADMIN")

    return <div className="admin__main">
        <div className="admin__head">
            <AdminSidebar active={"new-turnus"} />
            <NewTurnus />
        </div>
        <TurnusLister />

    </div>
}

export default  AdminNewTurnus;