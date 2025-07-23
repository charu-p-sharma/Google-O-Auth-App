import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import GoogleLogin from "./components/GoogleLogin";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  const GoogleAuthWrapper = () => {
    return (
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin></GoogleLogin>
      </GoogleOAuthProvider>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<GoogleAuthWrapper />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
