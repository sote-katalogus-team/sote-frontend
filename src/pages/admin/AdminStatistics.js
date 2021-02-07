import React from "react";
import AdminSidebar from "../../components/adminSidebar/AdminSidebar";
import StatisticsFilter from "../../components/statisticsFilter/StatisticsFilter";
import StatisticsTable from "../../components/statisticsTable/StatisticsTable";

const AdminStatistics = () => {
    //wau
    return <div className="admin__main">
        <div className="admin__head">
            <AdminSidebar active={"new-turnus"} />
            <StatisticsFilter />
        </div>
        <StatisticsTable />

    </div>
}

export default AdminStatistics;