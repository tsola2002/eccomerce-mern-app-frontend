
import React, { useState } from "react";
import { auth, googleProvider } from "../../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";


const Login = () => {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const signIn = async () => {
        try{
            await createUserWithEmailAndPassword(auth, email, password);
        } catch(err){
            console.log(err);
        }
    };

    const signInWithGoogle = async () => {
        try{
            await signInWithPopup(auth, googleProvider);
        } catch(err){
            console.log(err);
        }
    };


    return (
        <div>
            <p>Login</p>

            <div>
                <input type="text" placeholder="Email" onChange={(e) => (setEmail(e.target.value))}/>
                <input type="password" placeholder="Password" onChange={(e) => (setPassword(e.target.value))}/>
                <button onClick={signIn}>Sign In</button>
                <button onClick={signInWithGoogle}>Sign In With Google</button>
            </div>
            
        </div>
    );
};


//make the component available to other components for importing
export default Login;