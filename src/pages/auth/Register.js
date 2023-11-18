import React, { useState } from "react";
import { auth } from "../../config/firebase";
import { sendSignInLinkToEmail } from "firebase/auth";

import {toast } from 'react-toastify';


const Register = () => {

    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        // prevents browser from reload
        e.preventDefault();

        const config = {
            url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
            handleCodeInApp: true,
        }


        await sendSignInLinkToEmail(auth, email, config);
        
        toast.success(`Email is sent to ${email}. Click link to complete registration`);
        
        // save user email in local storage
        window.localStorage.setItem('emailForRegistration', email);

        // clear input input box
        setEmail("");
    }

    const registerForm = () => (
        <form onSubmit={handleSubmit}>
            <input 
                type="email"
                className="form-control"
                value={email}
                onChange={ (e) => 
                    setEmail(e.target.value)}
                    //console.log(e.target.value)}
                autoFocus    
            />

            <button type="submit" className="btn btn-info">
                Register
            </button>
        </form>
    );


    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4>Register</h4>
                    
                    { registerForm() }
                </div>
            </div>
        </div>
    );
};

//make the component available to other components for importing
export default Register;
