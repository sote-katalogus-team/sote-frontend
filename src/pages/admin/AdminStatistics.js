import React from "react";
import AdminSidebar from "../../components/adminSidebar/AdminSidebar";
import StatisticsFilter from "../../components/statisticsFilter/StatisticsFilter";
import StatisticsTable from "../../components/statisticsTable/StatisticsTable";
import {useCookies} from "react-cookie";
import adminAuthenticate from "../../security/auth.service";

const AdminStatistics = () => {
    const [cookies, setCookie] = useCookies([
        "user"
    ]);
    adminAuthenticate(cookies.user)
    return <div className="admin__main">
        <div className="admin__head">
            <AdminSidebar active={"new-turnus"} />
            <StatisticsFilter />
        </div>
    </div>
}

export default AdminStatistics;