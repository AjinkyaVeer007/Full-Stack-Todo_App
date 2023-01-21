import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

  const logout = () => {
    localStorage.clear("token");
    navigate("/");
  };

  return (
    <>
      <h1>Welcome to Dashboard</h1>
      <button
        onClick={logout}
        type="button"
        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        Logout
      </button>
    </>
  );
};

export default Dashboard;
