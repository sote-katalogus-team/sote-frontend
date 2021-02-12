import React from "react";
import AdminSidebar from "../../components/adminSidebar/AdminSidebar";
import AdminEditClassMenu from "../../components/adminEditClass/AdminEditClassMenu";


const AdminEditClass = () => {
   return  <div className="admin__main">
       <div className="admin__head">
           <AdminSidebar active={"new-lesson"} />
           <AdminEditClassMenu />
       </div>
   </div>
}



export default AdminEditClass;