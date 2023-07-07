import React from "react";
import Axios from "axios";


import { Link } from "react-router-dom";
import auth from "./Auth";
import { useState, useEffect } from 'react';
function SignInForm() {

    Axios.defaults.withCredentials = true;

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginStatus, setLoginStatus] = useState("");


    function handleSubmit() {
        Axios.post("http://localhost:3001/signin", {
            email: email,
            password: password
        })
            .then(response => {
                if (response.data.verified) {
                    console.log(response.data.user);
                    setEmail("")
                    setPassword("")
                    setLoginStatus(true)
                    sessionStorage.setItem('useremail', response.data.user);
                    sessionStorage.setItem('token', response.data.token);

                    console.log(response.data.user, "SVAED locally")

                }
                else {
                    console.log(response.data.alert);
                    setPassword("")
                }
            })
            .catch(error => {
                console.error("Error Signing In:", error);
            });
    }

   




    return (
        <div className="signInForm">
           Hi {sessionStorage.getItem('useremail')}
  <br />

            <button onClick={auth}> veify </button>

            <h2>Sign In</h2>

            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input required name="alumniEmail" value={email} onChange={(event) => { setEmail(event.target.value) }} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                </input>
                <small id="emailHelp" className="form-text text-muted">Institute Email Address</small>
            </div>

            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input required name="alumniPassword" value={password} onChange={(event) => { setPassword(event.target.value) }} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password">
                </input>
            </div>


            <button onClick={handleSubmit} type="submit" className="btn btn-primary" >Sign In</button>

            <small id="emailHelp" className="form-text text-muted">Not registered ? Click here to <Link to="/signup"> SIGN UP </Link> </small>


        </div>




    );
}

export default SignInForm;

