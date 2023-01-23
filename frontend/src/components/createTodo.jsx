import React, { useEffect } from "react";
import { useState } from "react";
import { BsFillBrushFill } from "react-icons/bs";

function CreateTodo() {
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  const [taskarr, setTaskArr] = useState([]);

  const handleTasks = () => {
    console.log(taskarr);
    if (task) {
      setTaskArr((currentvalue) => [...currentvalue, task]);
      setTask("");
      console.log(taskarr);
    }
  };

  const deleteTask = (key) => {
    console.log(key);
    // const newarr = taskarr.filter((item) =>  !== index)
    // const newarr = taskarr.filter((item) => item !== taskarr[index]);
    // console.log(newarr);
    // setTaskArr(newarr);
    // console.log(taskarr);
  };

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mx-2">
      <div className="lg:w-[500px] md:w-1/2 border border-gray-300 bg-[#F8F988] rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
          Create Your Todo
        </h2>
        <div className="relative mb-4">
          <label for="full-name" className="leading-7 text-sm text-gray-600">
            Todo Title
          </label>
          <input
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

        <div className="mb-4">
          <label for="email" className="leading-7 text-sm text-gray-600">
            Tasks
          </label>
          <div className="flex gap-2 items-center">
            <input
              value={task}
              onChange={(e) => {
                setTask(e.target.value);
              }}
              className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />

            <button
              onClick={handleTasks}
              className="w-40 lg:w-32 md:w-32 text-white bg-yellow-500 border-0 py-2 px-2 focus:outline-none hover:bg-yellow-600 rounded text-lg"
            >
              Add Tasks
            </button>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          Noting down is way better than remembering.
        </p>
      </div>
      <div className="rounded bg-red-500 h-50 w-[400px] px-4">
        <h1 className="text-white text-center mt-2 text-2xl font-semibold font-sans border-b-2 border-red-400 p-2">
          {title}
        </h1>
        {taskarr.map((element) => {
          return (
            <div className="flex justify-around items-center text-white border-b-2 border-red-400 p-2">
              <li>{element}</li>
              <BsFillBrushFill onClick={deleteTask} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CreateTodo;
