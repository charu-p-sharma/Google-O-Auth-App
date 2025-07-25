import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "../api";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const navigate = useNavigate();

  const googleResponse = async (authResult) => {
    try {
      console.log(authResult);
      if (authResult["code"]) {
        const result = await googleAuth(authResult["code"]);
        const { name, email, image } = result.data.user;

        const token = result.data.token;
        const obj = { name, email, image, token };
        localStorage.setItem("user-Info", JSON.stringify(obj));

        console.log("result.data.user", result.data.user);
        console.log(token);
        navigate("/dashboard");
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
