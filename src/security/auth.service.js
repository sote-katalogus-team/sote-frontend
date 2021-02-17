

const url = process.env.REACT_APP_URL;






export default function Authenticate (user, role)  {
    if (!user.roles.includes(role)) {
        window.location = "/";
    }
}




