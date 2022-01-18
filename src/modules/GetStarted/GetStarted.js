import React, { useState } from "react";
import "./GetStarted.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Logo from "../../common/Logo/Logo";
import { useEffect, useLayoutEffect } from "react";

function GetStarted(props) {
  const [signUP, setSignUp] = useState(false);
  const toggleSignInPage = () => {
    setSignUp((prevState) => !prevState);
  };
  // useEffect(() => {
  //   props.isLoginPage()

  // }, [])
  useEffect(() => {
    props.isLoginPage();
    return () => {
      props.isLoginPage();
    };
  }, []);
  return (
    <div>
      <div className="get-started-page">
        <div className="get-started-container" id="signin">
          <div className="flex-column">
            <div className="flex-row1 btns-container">
              <button
                id="onSignIn"
                className="change-content"
                disabled={!signUP}
                onClick={toggleSignInPage}
              >
                SignIn
              </button>
              <button
                id="onSignUp"
                className="change-content"
                disabled={signUP}
                onClick={toggleSignInPage}
              >
                SignUp
              </button>
            </div>
            <Logo />
          </div>
          {signUP === true ? (
            <SignUp setLoginTrue={props.setLoginTrue} />
          ) : (
            <SignIn setLoginTrue={props.setLoginTrue} />
          )}
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
