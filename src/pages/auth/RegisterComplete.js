import React, { useState, useEffect } from "react";
import { auth } from "../../config/firebase";
import { signInWithEmailLink } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const RegisterComplete = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  

  // useEffect hook runs when the component mounts for the first time
  // array at the end is called dependency array
  useEffect(() => {
    // console.log("LOCAL STORAGE EMAIL: ", window.localStorage.getItem("emailForRegistration"));
    // console.log("WINDOW LOCATION URL: ", window.location.href);

    //populate email field as soon as it mounts
    setEmail(window.localStorage.getItem("emailForRegistration"));
  }, []);

  const handleSubmit = async (e) => {
    // prevents browser from reload
    e.preventDefault();
    
      //validation of email & password fields
      if (!email) {
          toast.error("email and password is required");
          return;
      }

      // if (password.length < 6) {
      //     toast.error("Password must be at least 6 characters long");
      //     return;
      // }



    //we use firebease method(signinwithuser) to sign user in
    try {
        const result = await signInWithEmailLink(auth, email, window.location.href);
        // console.log("FIREBASE LOGIN RESULT", result);

        // we'll check if email has been verified
        if (result.user.emailVerified) {

            // remove user email from local storage
            window.localStorage.removeItem("emailForRegistration");

            //get user id token(new token)
            const user = auth.currentUser;
          
            const idTokenResult = await user.getIdTokenResult();

            console.log("CURRENT USER", user, "IDTOKENRESULT",idTokenResult);



          // create redux store(dispatch to redux store)
            


          // redirect
          navigate("/");

        }

    } catch (error) {
        console.log("ERROR", error);
        toast.error(error.message);
    }
  };

  const completeRegistrationForm = () => (
    <form onSubmit={handleSubmit}>
      <input type="email" className="form-control" value={email} disabled />

      <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} autoFocus placeholder="Password"
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

          {completeRegistrationForm()}
        </div>
      </div>
    </div>
  );
};

//make the component available to other components for importing
export default RegisterComplete;
