import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("user-Info");
    const userData = JSON.parse(data);
    setUserInfo(userData);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user-Info");
    navigate("/login");
  };

  return (
    <div>
      <h1>Welcome {userInfo?.name}</h1>
      <h3>Email: {userInfo?.email}</h3>
      <img src={userInfo?.image} alt={userInfo?.email} />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
