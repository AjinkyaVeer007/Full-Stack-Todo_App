import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";

function ShowTodo(props) {
  const [showbtn, setShowBtn] = useState("hidden");

  const btnShow = () => {
    if (props.title && props.arr.length > 0) {
      setShowBtn("");
    } else {
      setShowBtn("hidden");
    }
  };

  useEffect(() => {
    btnShow();
  });

  function deleteTask(index) {
    const selectedTask = props.arr.splice(index, 1);
    props.setTaskArr(props.arr.filter((task) => task !== selectedTask));
  }

  function editTask(index) {
    const selectedTask = props.arr.splice(index, 1);
    props.setTask(selectedTask);
    props.setTaskArr(props.arr.filter((task) => task !== selectedTask));
  }

  // Saving created todo in db
  const newTodo = async () => {
    const data = {
      Title: props.title,
      Tasks: props.arr,
      userId: localStorage.getItem("userId"),
    };
    console.log(data);
    const config = {
      headers: { Authorization: `${localStorage.getItem("token")}` },
    };
    console.log(config);

    const res = await axios.post(
      "http://localhost:4000/createTodo",
      data,
      config
    );
    // console.log(res);
    props.setTitle("");
    props.setTaskArr([]);
  };

  //get all todos created by that authorized user only

  return (
    <div className="flex flex-col justify-between rounded bg-red-500 h-50 w-[400px] px-4">
      <div>
        <h1 className="text-white text-center mt-2 text-2xl font-semibold font-sans border-b-2 border-red-400 p-2">
          {props.title}
        </h1>
        {props.arr.map((element, index) => {
          return (
            <div
              id={index}
              className="flex justify-between items-center text-white border-b-2 border-red-400 p-2"
            >
              <li>{element}</li>
              <div className="flex gap-4">
                <BiEdit
                  id={index}
                  onClick={() => {
                    editTask(index);
                  }}
                />
                <AiFillDelete
                  id={index}
                  onClick={() => {
                    deleteTask(index);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <button
        onClick={newTodo}
        className={`${showbtn} h-[30px] bg-blue-500 m-4 rounded hover:bg-blue-600 text-white font-bold`}
      >
        SAVE TODO
      </button>
    </div>
  );
}

export default ShowTodo;
