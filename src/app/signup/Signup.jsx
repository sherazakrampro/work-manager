"use client";
import React from "react";

const SignUp = () => {
  return (
    <div className="flex justify-center m-2">
      <div className=" w-1/2 p-5 shadow-sm">
        <h1 className="text-3xl flex justify-center mb-4">Signup Here</h1>
        <form action="submit">
          <div className="flex flex-col">
            <label htmlFor="user_name" className="mb-1">
              Username
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              className="bg-slate-500 rounded-md p-3 mb-4"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              className="bg-slate-500 rounded-md p-3 mb-4"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1">
              Password
            </label>
            <input
              type="password"
              name="user_password"
              id="user_password"
              className="bg-slate-500 rounded-md p-3 mb-4"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="user_about" className="mb-1">
              About
            </label>
            <textarea
              name="user_about"
              id="user_about"
              className="bg-slate-500 rounded-md p-3 mb-4"
              rows={5}
            />
          </div>

          <div className="flex justify-center items-center">
            <button className="bg-green-600 hover:bg-green-700 px-3 py-2 rounded-md">
              Signup
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

export default SignUp;
