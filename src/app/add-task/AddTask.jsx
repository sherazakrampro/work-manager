"use client";
import { addTask } from "@/services/taskService";
import React, { useState } from "react";
import { toast } from "react-toastify";

const AddTask = () => {
  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    userId: "64f747e348d3fb54fb691beb",
  });

  const handleAddTask = async (event) => {
    event.preventDefault();
    console.log(task);

    try {
      const result = await addTask(task);
      console.log(result);
      toast.success("Your task has been added.", {
        position: "top-right",
      });

      setTask({
        title: "",
        content: "",
        status: "none",
      });
    } catch (error) {
      console.log(error);
      toast.error("Task not added", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="flex justify-center m-2">
      <div className=" w-1/2 p-5 shadow-sm">
        <h1 className="text-3xl flex justify-center mb-4">Add Task</h1>
        <form action="submit" onSubmit={handleAddTask}>
          <div className="flex flex-col">
            <label htmlFor="task_title" className="mb-1">
              Title
            </label>
            <input
              type="text"
              name="task_title"
              id="task_title"
              className="bg-slate-500 rounded-md p-3 mb-4"
              onChange={(event) => {
                setTask({
                  ...task,
                  title: event.target.value,
                });
              }}
              value={task.title}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="task_content" className="mb-1">
              Content
            </label>
            <textarea
              name="task_content"
              id="task_content"
              className="bg-slate-500 rounded-md p-3 mb-4"
              rows={5}
              onChange={(event) => {
                setTask({
                  ...task,
                  content: event.target.value,
                });
              }}
              value={task.content}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="task_status" className="mb-1">
              Status
            </label>
            <select
              name="task_status"
              id="task_status"
              className="bg-slate-500 rounded-md p-3 mb-4"
              onChange={(event) => {
                setTask({
                  ...task,
                  status: event.target.value,
                });
              }}
              value={task.status}
            >
              <option value="none" disabled>
                * Select Status *
              </option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-green-600 hover:bg-green-700 px-3 py-2 rounded-md">
              Add Task
            </button>
            <button className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded-md ms-3">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
