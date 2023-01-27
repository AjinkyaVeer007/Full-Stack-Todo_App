import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CreateTodo from "./createTodo";
import Navbar from "./navbar";
import ShowMyTodo from "./showMyTodo";

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
    <div className="bg-gray-100">
      <Navbar />
      <CreateTodo />
    </div>
  );
};

export default Dashboard;
