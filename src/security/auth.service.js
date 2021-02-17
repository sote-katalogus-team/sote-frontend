import axios from "axios";
import authHeader from "./auth-header";

const url = process.env.REACT_APP_URL;




const register = (username, email, password) => {
    return axios.post(url + "signup", {
        username,
        email,
        password,
    });
};

const login = (username, password) => {
    return axios
        .post(url + "signin", {
            username,
            password,
        }, {headers: authHeader()})
        .then((response) => {
            if (response.data.accessToken) {
            }

            return response.data;
        });
};



export default function adminAuthenticate (user)  {
    if (!user.roles.includes("ADMIN")) {
        window.location = "/";
    }
}




