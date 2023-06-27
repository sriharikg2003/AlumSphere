import React from "react";
import Axios from "axios";
import { useState, useEffect } from 'react';
function SignInForm() {


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  function handleSubmit() {

    Axios.post("http://localhost:3001/signin", {
      alumniEmail: email,
      alumniPassword: password
      ,
    })
      .then(response => {
        alert("Successfully signed in");
        setEmail("");
        setPassword("");
      })
      .catch(error => {
        console.error("Error adding user:", error);
      });
  }






  return (
    <div className="signInForm">
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



    </div>




  );
}

export default SignInForm;