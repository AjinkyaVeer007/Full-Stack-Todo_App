import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import EditDelete from "./editDelete";

function ShowMyTodo() {
  const config = {
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
    },
  };

  const data = {
    userId: localStorage.getItem("userId"),
    userName: localStorage.getItem("userName"),
  };

  const [alltodos, setAllTodos] = useState(null);

  const getAllTodos = async () => {
    await axios
      .post("http://localhost:4000/getTodos", data, config)
      .then((res) => {
        setAllTodos(res.data?.user);
        console.log("Todos loaded successfully");
      })
      .catch((err) => {
        console.log(err);
        console.log("Fail to load Todos");
      });
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  console.log(alltodos);

  return (
    <div>
      <div className="flex justify-center py-8 gap-2">
        {alltodos &&
          alltodos.map((todo) => {
            return (
              <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
                <div className="py-3 px-6 border-b border-gray-300">
                  Created by : {todo.userName || "Me"}
                </div>
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    {todo.Title}
                  </h5>
                  {todo.Tasks &&
                    todo.Tasks.map((task) => {
                      return <li>{task}</li>;
                    })}
                  <EditDelete />
                </div>
                <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
                  {moment(todo.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ShowMyTodo;
