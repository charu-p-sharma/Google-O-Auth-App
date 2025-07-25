import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import GoogleLogin from "./components/GoogleLogin";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import RefreshHandler from "./RefreshHandler";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  const GoogleAuthWrapper = () => {
    return (
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin></GoogleLogin>
      </GoogleOAuthProvider>
    );
  };

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<GoogleAuthWrapper />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute element={<Dashboard />} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
