import React from 'react';
import AdminSidebar from "../../components/adminSidebar/AdminSidebar";
import NewTeacher from "../../components/newTeacher/NewTeacher";
import TeacherLister from "../../components/teacherLister/TeacherLister";
import {useCookies} from "react-cookie";
import adminAuthenticate from "../../security/auth.service";


const AdminNewTeacher = () => {
    const [cookies, setCookie] = useCookies([
        "user"
    ]);
    adminAuthenticate(cookies.user)
    return <div className="admin__main">
        <div className="admin__head">
            <AdminSidebar active={"new-turnus"} />
            <NewTeacher />
        </div>
        <TeacherLister />

    </div>
}

export default AdminNewTeacher