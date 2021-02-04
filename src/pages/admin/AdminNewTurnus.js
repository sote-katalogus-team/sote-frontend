import React from "react";
import AdminSidebar from "../../components/adminSidebar/AdminSidebar";
import NewLesson from "../../components/newLesson/NewLesson";
import LessonLister from "../../components/lessonLister/LessonLister";
import NewTurnus from "../../components/newTurnus/NewTurnus";

const AdminNewTurnus = () => {
    return <div className="admin__main">
        <div className="admin__head">
            <AdminSidebar active={"new-turnus"} />
            <NewTurnus />
        </div>
        <LessonLister />

    </div>
}

export default  AdminNewTurnus;