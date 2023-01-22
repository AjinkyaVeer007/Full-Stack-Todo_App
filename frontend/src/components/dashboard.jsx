import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Logout from "./logout";

const Dashboard = () => {
  const navigate = useNavigate();
  const config = {
    headers: { Authorization: `${localStorage.getItem("token")}` },
  };

  const access = async () => {
    await axios
      .get("http://localhost:4000/dashboard", config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        navigate("/");
      });
  };
  access();

  return (
    <>
      <h1>Welcome to Dashboard</h1>
      <Logout />
    </>
  );
};

export default Dashboard;
