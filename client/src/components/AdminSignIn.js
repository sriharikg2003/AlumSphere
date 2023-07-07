import React from "react";
import Axios from "axios";

import { useState, useEffect } from 'react';
function SignInForm() {


  const [email, setEmail] = useState("")
  const [otp, setOTP] = useState("")
  const [otpStautus, setOTPStatus] = useState(false)

  function handleSubmit() {

    Axios.post("http://localhost:3001/AdminAskOtp", {
      adminEmail: email
    })
      .then(response => {
        alert("Successfully sent OTP");
        setOTPStatus(true)
      
      })
      .catch(error => {
        console.error("OTP sent error:", error);
      });
  }
  

  function verifyOTP(){
    Axios.post("http://localhost:3001/AdminVerifyOtp", {
        adminEmail: email,
        adminOTP : otp
      })
        .then(response => {
          alert("Verfied OTP");
          setOTPStatus(false);
      
          setEmail("");
          setOTP("");
          
        
        })
        .catch(error => {
          console.error("OTP sent error:", error);
        });
  }



 

  return (
    <div className="signInForm">


      <h2>ADMIN Sign In</h2>
      

      <div className="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input required name="alumniEmail" value={email} onChange={(event) => { setEmail(event.target.value) }} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        </input>
        <small id="emailHelp" className="form-text text-muted">Institute Email Address</small>
      </div>

     {otpStautus ? 
      <div>
      <label for="exampleInputOTP">OTP</label>
        <input required name="alumniOTP" value={otp} onChange={(event) => { setOTP(event.target.value) }}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter OTP">
        </input>
        <small id="OTP" className="form-text text-muted">Enter OTP recieved in your mail</small>
        <br></br>
        <button onClick={verifyOTP} type="submit" className="btn btn-primary" >Verify OTP</button> 

        </div>
      :  <button onClick={handleSubmit} type="submit" className="btn btn-primary" >Get OTP</button> }


      



    </div>




  );
}

export default SignInForm;