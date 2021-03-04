
export default function Authenticate (user, role)  {
    if (!user.roles.includes(role)) {
        window.location = "/";
    }
}




