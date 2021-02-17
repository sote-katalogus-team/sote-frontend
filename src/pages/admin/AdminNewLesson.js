import React from "react";
import './Admin.css'
import AdminSidebar from "../../components/adminSidebar/AdminSidebar";
import NewLesson from "../../components/newLesson/NewLesson";
import LessonLister from "../../components/lessonLister/LessonLister";
import adminAuthenticate  from '../../security/auth.service'
import {useCookies} from "react-cookie";

const AdminNewLesson = () => {
    const [cookies, setCookie] = useCookies([
        "user"
    ]);
   adminAuthenticate(cookies.user)


    return <div className="admin__main">
        <div className="admin__head">
            <AdminSidebar active={"new-lesson"} />
            <NewLesson />
        </div>
        <LessonLister />

    </div>
}

export default AdminNewLesson;