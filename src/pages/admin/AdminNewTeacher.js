import React from 'react';
import AdminSidebar from "../../components/adminSidebar/AdminSidebar";
import NewTeacher from "../../components/newTeacher/NewTeacher";
import TeacherLister from "../../components/teacherLister/TeacherLister";
import {useCookies} from "react-cookie";
import Authenticate from "../../security/auth.service";


const AdminNewTeacher = () => {
    const [cookies] = useCookies([
        "user"
    ]);
    Authenticate(cookies.user, "ADMIN")

    return <div className="admin__main">
        <div className="admin__head">
            <AdminSidebar active={"new-turnus"} />
            <NewTeacher />
        </div>
        <TeacherLister />

    </div>
}

export default AdminNewTeacher