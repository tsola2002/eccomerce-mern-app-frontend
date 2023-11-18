// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { AuthCredential, GoogleAuthProvider, getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQFEOGdhIdASTkqwN7qXjO2IvWKTsVvvQ",
    authDomain: "ecommerce-13e42.firebaseapp.com",
    projectId: "ecommerce-13e42",
    storageBucket: "ecommerce-13e42.appspot.com",
    messagingSenderId: "745672207515",
    appId: "1:745672207515:web:7a2d47e7dd28eacf6b6a3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export allows you to use the auth variable everywhere inside of your project
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

