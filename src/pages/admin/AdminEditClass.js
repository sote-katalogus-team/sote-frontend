import React from "react";
import AdminSidebar from "../../components/adminSidebar/AdminSidebar";
import AdminEditClassMenu from "../../components/adminEditClass/AdminEditClassMenu";
import {useCookies} from "react-cookie";
import Authenticate from "../../security/auth.service";


const AdminEditClass = () => {
    const [cookies, setCookie] = useCookies([
        "user"
    ]);
    Authenticate(cookies.user, "ADMIN")
   return  <div className="admin__main">
       <div className="admin__head">
           <AdminSidebar active={"new-lesson"} />
           <AdminEditClassMenu />
       </div>
   </div>
}



export default AdminEditClass;