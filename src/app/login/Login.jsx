"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { login } from "@/services/userService";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const loginHandler = async (event) => {
    event.preventDefault();
    console.log(loginData);
    if (loginData.email.trim() === "" || loginData.password.trim() === "") {
      toast.info("Invalid Data", {
        position: "top-right",
      });
      return;
    }

    //login
    try {
      const result = await login(loginData);
      console.log(result);
      toast.success("Logged in", {
        position: "top-right",
      });
      //redirect
      router.push("/profile/user");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        position: "top-right",
      });
    }
  };

  return (
    <div className="flex justify-center m-2">
      <div className=" w-1/2 p-5 shadow-sm">
        <h1 className="text-3xl flex justify-center mb-4">Login Here</h1>
        <form action="submit" onSubmit={loginHandler}>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              className="bg-slate-500 rounded-md p-3 mb-4"
              onChange={(event) => {
                setLoginData({
                  ...loginData,
                  email: event.target.value,
                });
              }}
              value={loginData.email}
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
              onChange={(event) => {
                setLoginData({
                  ...loginData,
                  password: event.target.value,
                });
              }}
              value={loginData.password}
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 px-3 py-2 rounded-md"
            >
              Login
            </button>
            <button
              type="button"
              className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded-md ms-3"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
