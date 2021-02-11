import React from "react";
import AdminSidebar from "../../components/adminSidebar/AdminSidebar";
import NewLesson from "../../components/newLesson/NewLesson";
import LessonLister from "../../components/lessonLister/LessonLister";


const AdminSettings = () => {
    return <div className="admin__main">
        <div className="admin__head">
            <AdminSidebar active={"new-lesson"} />
            <NewLesson />
        </div>
        <LessonLister />

    </div>
}

export default AdminSettings