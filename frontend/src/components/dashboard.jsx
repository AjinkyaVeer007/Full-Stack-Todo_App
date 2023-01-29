import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CreateTodo from "./createTodo";
import Navbar from "./navbar";

const Dashboard = () => {
  const navigate = useNavigate();
  const config = {
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
      userId: localStorage.getItem("userId"),
    },
  };

  const access = async () => {
    await axios.get("http://localhost:4000/dashboard", config).catch((err) => {
      console.log(err);
      navigate("/");
    });
  };

  useEffect(() => {
    access();
  });

  return (
    <div className="bg-[#303030]">
      <Navbar />
      <CreateTodo />
    </div>
  );
};

export default Dashboard;
