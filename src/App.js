//LIBRARY IMPORTS
import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




// COMPONENT IMPORTS
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/Home';
import Header from './components/nav/Header';
import RegisterComplete from './pages/auth/RegisterComplete';

import { auth } from "./config/firebase";
import { useDispatch } from 'react-redux';


// we dispatch action and payload so that we can update the redux state

const App = () => {
  const dispatch = useDispatch();

  // access logged in user from firebase
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        console.log("user", user);
        // send the token to the redux store
        dispatch({
          type: 'LOGGED_IN_USER',
          payload: {
            email: user.email,
            token: idTokenResult.token,
          },
        });
      }
    });
    //cleanup
    return () => unsubscribe();
  }, [])


  return (
    <>
      <Header />
      <ToastContainer />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/login" Component={Login} />
        <Route exact path="/register" Component={Register} />
        <Route exact path="/register/complete" Component={RegisterComplete} render={(props) => <RegisterComplete {...props} />} />
      </Routes>
    </>
  );
};

// make the component available to other components for importing
export default App;
