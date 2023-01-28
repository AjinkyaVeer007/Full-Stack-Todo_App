import React from "react";
import { useState } from "react";

import ShowTodo from "./showTodo";
import ShowMyTodo from "./showMyTodo";

function CreateTodo() {
  const [title, setTitle] = useState({
    title: "",
    id: undefined,
  });
  const [task, setTask] = useState("");
  const [taskarr, setTaskArr] = useState([]);

  const handleTitle = (e) => {
    setTask(e.target.value);
  };

  const handleTasks = () => {
    console.log(taskarr);
    if (task) {
      setTaskArr((currentvalue) => [...currentvalue, task]);
      setTask("");
      console.log(taskarr);
    }
  };

  return (
    <>
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
              value={title.title}
              onChange={(event) => {
                setTitle({ title: event.target.value });
              }}
              className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="mb-4">
            <label for="email" className="leading-7 text-sm text-gray-600">
              Tasks
            </label>
            <div className="flex gap-2 items-center">
              <textarea
                value={task}
                onChange={handleTitle}
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
        <ShowTodo
          title={title.title}
          setTitle={setTitle}
          arr={taskarr}
          setTaskArr={setTaskArr}
          setTask={setTask}
        />
      </div>
      <ShowMyTodo setTitle={setTitle} setTaskArr={setTaskArr} />
    </>
  );
}

export default CreateTodo;
