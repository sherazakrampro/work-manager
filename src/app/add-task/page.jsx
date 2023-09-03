import React from "react";

export const metadata = {
  title: "Add Task : Work Manager",
};

const AddTask = () => {
  return (
    <div className="flex justify-center m-5">
      <div className=" w-1/2 p-5 shadow-sm">
        <h1 className="text-3xl flex justify-center mb-4">Add Task</h1>
        <form action="submit">
          <div className="flex flex-col">
            <label htmlFor="task_title" className="mb-1">
              Title
            </label>
            <input
              type="text"
              name="task_title"
              id="task_title"
              className="bg-slate-500 rounded-md p-3 mb-4"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="task_content" className="mb-1">
              Content
            </label>
            <textarea
              type="text"
              name="task_content"
              id="task_content"
              className="bg-slate-500 rounded-md p-3 mb-4"
              rows={5}
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
            >
              <option value="---Select Status---">* Select Status *</option>
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
