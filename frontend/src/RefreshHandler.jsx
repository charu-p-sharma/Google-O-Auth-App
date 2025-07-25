import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RefreshHandler = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const data = localStorage.getItem("user-Info");
    const token = JSON.parse(data)?.token;

    if (token) {
      setIsAuthenticated(true);
      if (location.pathname === "/" || location.pathname === "/login") {
        navigate("/dashboard", { replace: true });
      }
    }
  }, [location, navigate, setIsAuthenticated]);

  return null;
};

export default RefreshHandler;
