import React from "react";
import { useGoogleLogin } from "@react-oauth/google";

const GoogleLogin = () => {
  const googleResponse = async (authResult) => {
    try {
      console.log(authResult);
    } catch (error) {
      console.log("Error while requesting google code", error);
    }
  };

  const loginFunc = useGoogleLogin({
    onSuccess: googleResponse,
    onError: googleResponse,
    flow: "auth-code",
  });

  return (
    <div className="App">
      <button onClick={loginFunc}>Login With Google</button>
    </div>
  );
};

export default GoogleLogin;
