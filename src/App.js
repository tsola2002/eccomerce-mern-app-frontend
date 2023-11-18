//LIBRARY IMPORTS
import React from 'react';
import { Routes, Route } from "react-router-dom/";

import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// CSS IMPORTS
import Styles from './index.css';

// COMPONENT IMPORTS
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/Home';
import Header from './components/nav/Header';
import RegisterComplete from './pages/auth/RegisterComplete';



const App = () => {
  return (
    <>
    <Header />
    <ToastContainer />
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route exact path="/login" Component={Login} />
      <Route exact path="/register" Component={Register} />
      <Route exact path="/register/complete" Component={RegisterComplete} />
    </Routes>
    </>
  );
};

//make the component available to other components for importing
export default App;
