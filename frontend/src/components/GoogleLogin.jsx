import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "../api";

const GoogleLogin = () => {
  const googleResponse = async (authResult) => {
    try {
      console.log(authResult);
      if (authResult["code"]) {
        const result = await googleAuth(authResult["code"]);
        const { name, email, image } = result.data.user;
        console.log("result.data.user", result.data.user);
      }
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
