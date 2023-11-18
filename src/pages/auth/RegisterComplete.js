import React, { useState, useEffect } from "react";
import { auth } from "../../config/firebase";
import { sendSignInLinkToEmail } from "firebase/auth";

import {toast } from 'react-toastify';

// we destructure to get the props.history from App component
const RegisterComplete = (history) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    // useEffect hook runs when the component mounts for the first time
    // array at the end is called dependency array 

    useState(() => {
        //console.log(window.localStorage.getItem('emailForRegistration'));

        //populate email field as soon as it mounts
        setEmail(window.localStorage.getItem('emailForRegistration'));
    }, [])

    const handleSubmit = async (e) => {
        // prevents browser from reload
        e.preventDefault();

        //we use firbease method to sign user in



    }

    const completeRegistrationForm = () => (
        <form onSubmit={handleSubmit}>
            <input 
                type="email"
                className="form-control"
                value={email}
                
                disabled
            />

            <input 
                type="password"
                className="form-control"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoFocus
                placeholder="Password "
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
                    <h4>Complete Registration </h4>
                    
                    { completeRegistrationForm() }
                </div>
            </div>
        </div>
    );
};

//make the component available to other components for importing
export default RegisterComplete;
