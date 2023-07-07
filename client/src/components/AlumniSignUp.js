import React from "react";
import Axios from "axios";


import { useState, useEffect } from 'react';
function SignUpForm() {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [otp, setOTP] = useState("")
    const [otpStautus, setOTPStatus] = useState(false)
    const [verify, setVerify] = useState(false)
    function handleSubmit() {

        if (confirmPassword !== password) {
            alert("Confirm Password Correctly")
            setConfirmPassword("")
        }
        else {
            Axios.post("http://localhost:3001/signup", {
                email: email,
                password: password
                ,
            })
                .then(response => {
                    alert(response.data);
                    setEmail("");
                    setPassword("");
                    setConfirmPassword("")

                })
                .catch(error => {
                    console.error("Error adding user:", error);
                });
        }
    }

    function askOtp() {

        
        Axios.post("http://localhost:3001/AskOtp", {
            email: email
        })
            .then(response => {
                
                
                if (response.data.allow){
                 alert(response.data.alert);
                setOTPStatus(true)
                }

                else{
                    console.log(response.data)
                    alert(response.data.alert);
                    setOTP("");
                    setVerify(false)
                    setOTPStatus(false)
                }

            })
            .catch(error => {
                console.error("OTP sent error:", error);
            });
    }


    function verifyOTP() {
        Axios.post("http://localhost:3001/VerifyOtp", {
            email: email,
            otp: otp
        })
            .then(response => {
                console.log(response)

                if (response.data.code){
                    console.log(response.data)
                    alert(response.data.alert);
                    setOTPStatus(false);
                    setOTP("");
                    setVerify(true)
                }

                else{
                    console.log(response.data)
                    alert(response.data.alert);
                    setOTP("");
                    setVerify(false)
                }
                
                

            })
            .catch(error => {
                console.error("OTP sent error:", error);
            });
    }




    if (!verify) {

        return (
            <div className="signUpForm">
                <h2>Sign Up</h2>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input required name="alumniEmail" value={email} onChange={(event) => { setEmail(event.target.value) }} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                    </input>
                    <small id="emailHelp" className="form-text text-muted">Institute Email Address</small>
                </div>
                {otpStautus ?<div> <div className="form-group">
                    <label for="exampleInputEmail1">Enter OTP</label>
                    <input required name="otp" value={otp} onChange={(event) => { setOTP(event.target.value) }} type='text' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter OTP">
                    </input>
                </div>  <button onClick={verifyOTP} type="submit" className="btn btn-primary" >Verify OTP</button> </div>: <button onClick={askOtp} type="submit" className="btn btn-primary" >Get OTP</button>}

            </div>
        )



    }

    else {



        return (
            <div className="signUpForm">
                <h2>Sign Up</h2>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input required name="alumniEmail" value={email} onChange={(event) => { setEmail(event.target.value) }} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                    </input>
                    <small id="emailHelp" className="form-text text-muted">Institute Email Address</small>
                </div>



                <div>  <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input required name="alumniPassword" value={password} onChange={(event) => { setPassword(event.target.value) }} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password">
                    </input>
                </div>

                    <div className="form-group">
                        <label for="exampleInputPassword1">Confirm Password</label>
                        <input required name="alumniConfirmPassword" value={confirmPassword} onChange={(event) => { setConfirmPassword(event.target.value) }} type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password">
                        </input>
                    </div>


                    <button onClick={handleSubmit} type="submit" className="btn btn-primary" >Sign Up</button>
                </div>
            </div>

        )










    };
}

export default SignUpForm;