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
    setTitle({
      ...title,
      title: e.target.value,
    });
  };

  const handleTask = (e) => {
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
      <div className="mt-8 grid lg:grid-cols-2 md:grid-rows-1 grid-rows-1 gap-4 justify-center">
        <div className="hover:shadow-lg hover:shadow-red-500 transition ease-in-out delay-250 lg:w-2/3 w-max border border-gray-300 bg-gradient-to-r from-teal-200 to-lime-200 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-2xl font-medium title-font mb-5">
            Create Your Todo
          </h2>
          <div className="relative mb-4">
            <label
              for="full-name"
              className="leading-7 text-base text-gray-800 font-semibold"
            >
              Todo Title
            </label>
            <input
              value={title.title}
              onChange={handleTitle}
              className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="mb-4">
            <label
              for="email"
              className="leading-7 text-base text-gray-800 font-semibold"
            >
              Tasks
            </label>
            <div className="flex gap-2 items-center">
              <textarea
                value={task}
                onChange={handleTask}
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
          <p className="text-m text-gray-800 mt-3">
            Noting down is way better than remembering.
          </p>
        </div>
        <ShowTodo
          mainTitle={title}
          title={title.title}
          id={title.id}
          setTitle={setTitle}
          arr={taskarr}
          setTaskArr={setTaskArr}
          setTask={setTask}
        />
      </div>
      <ShowMyTodo
        mainTitle={title}
        title={title.title}
        id={title.id}
        setTitle={setTitle}
        setTaskArr={setTaskArr}
      />
    </>
  );
}

export default CreateTodo;
