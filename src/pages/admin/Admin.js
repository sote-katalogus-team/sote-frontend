import React from "react";
import './Admin.css'
import AdminSidebar from "../../components/adminSidebar/AdminSidebar";
import NewLesson from "../../components/newLesson/NewLesson";
import LessonLister from "../../components/lessonLister/LessonLister";


const Admin = () => {
    return <div className="admin__main">
        <div className="admin__head">
            <AdminSidebar />
            <NewLesson />
        </div>
        <LessonLister />

    </div>
}

export default Admin;