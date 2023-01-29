import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import EditDelete from "./editDelete";

function ShowMyTodo(props) {
  const [alltodos, setAllTodos] = useState(null);
  const config = {
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
    },
  };

  const data = {
    userId: localStorage.getItem("userId"),
    userName: localStorage.getItem("userName"),
  };

  //Load all Todo created by user
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

  //Add different colours to every todo card
  const colorTray = [
    "#fed8bf",
    "#c7c7ff",
    "#a9ebbf",
    "#f3bae0",
    "#AAE3E2",
    "#FFCEFE",
    "#7286D3",
    "#FD8A8A",
    "#F675A8",
    "#B983FF",
    "#FADA9D",
    "#579BB1",
    "#FFFBAC",
    "#C0DEFF",
    "#FAEAB1",
    "#E97777",
    "#B3FFAE",
  ];

  return (
    <div>
      <div className="flex flex-wrap justify-center py-8 gap-4">
        {alltodos &&
          alltodos.map((todo, index) => {
            return (
              <div
                className={`hover:-translate-y-1 hover:shadow-red-500 hover: transition ease-in-out delay-250 block rounded-lg shadow-lg bg-[${colorTray[index]}] max-w-sm text-center`}
              >
                <div className="py-3 px-6 border-b border-white text-[#1e293b] font-[Lobster]">
                  Created by : {todo.userName || "Me"}
                </div>
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2 font-[Righteous]">
                    {todo.Title}
                  </h5>
                  <div className="flex flex-col items-start mt-4">
                    {todo.Tasks &&
                      todo.Tasks.map((task) => {
                        return <li className="font-serif">{task}</li>;
                      })}
                  </div>
                  <EditDelete
                    index={index}
                    todo={todo}
                    mainTitle={props.mainTitle}
                    title={props.title}
                    id={props.id}
                    setTitle={props.setTitle}
                    setTaskArr={props.setTaskArr}
                  />
                </div>
                <div className=" py-3 px-6 border-t border-white text-[#303030] font-[Oswald] font-semibold">
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
