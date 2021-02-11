import React from "react";


const AdminSettingsBar = () => {
    return <div className="adminSettingsMain">
            <div className="updateAdminData">
                <div className="admin__updateEmail">
                    <p>change email</p>
                    <form >
                        <input required={"required"} type="email"/>
                        <button>update email</button>
                    </form>
                </div>
               <div className="admin__newPassword">
                   <p>change password</p>
                   <form >
                       <input id={"newPass1"} type="password" required={"required"} placeholder={"password"}/>
                       <input id={"newPass2"} type="password" required={"required"} placeholder={"confirm password"}/>
                       <button>update password</button>
                   </form>
               </div>
            </div>
    </div>
}

export default AdminSettingsBar;