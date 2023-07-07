import Axios from "axios";
function auth() {
    const token = sessionStorage.getItem("token");
    console.log(token);
    Axios.defaults.withCredentials = true;
    Axios.get("http://localhost:3001/auth", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    .then(response => {
        if (response.data.verified){
        console.log("AUTHENTICATED "+response.data.email);
        return true;}
        
        else{
            sessionStorage.removeItem("token");
            console.log("Authentication failed")
            return false;
        }
    })
    .catch(error => {
        console.error("OTP verification error:", error);
        return false;
    });
}


export default auth;