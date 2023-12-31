"use client";
import { signUp } from "@/services/userService";
import React, { useState } from "react";
import { toast } from "react-toastify";

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileURL:
      "https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg",
  });

  const doSignUp = async (event) => {
    event.preventDefault();
    console.log(signUpData);

    if (signUpData.name === "" || signUpData.name === null) {
      toast.warning("Username is required", {
        position: "top-right",
      });
      return;
    }

    // Form submit
    try {
      const result = await signUp(signUpData);
      console.log(result);
      toast.success("User signed up successfully", {
        position: "top-right",
      });
      setSignUpData({
        name: "",
        email: "",
        password: "",
        about: "",
        profileURL:
          "https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg",
      });
    } catch (error) {
      console.log(error);
      toast.error("User signed up failed");
    }
  };

  // reset form
  const resetForm = () => {
    setSignUpData({
      name: "",
      email: "",
      password: "",
      about: "",
      profileURL:
        "https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg",
    });
  };

  return (
    <div className="flex justify-center m-2">
      <div className=" w-1/2 p-5 shadow-sm">
        <h1 className="text-3xl flex justify-center mb-4">Signup Here</h1>
        <form action="submit" onSubmit={doSignUp}>
          <div className="flex flex-col">
            <label htmlFor="user_name" className="mb-1">
              Username
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              className="bg-slate-500 rounded-md p-3 mb-4"
              onChange={(event) => {
                setSignUpData({
                  ...signUpData,
                  name: event.target.value,
                });
              }}
              value={signUpData.name}
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
              onChange={(event) => {
                setSignUpData({
                  ...signUpData,
                  email: event.target.value,
                });
              }}
              value={signUpData.email}
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
                setSignUpData({
                  ...signUpData,
                  password: event.target.value,
                });
              }}
              value={signUpData.password}
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
              onChange={(event) => {
                setSignUpData({
                  ...signUpData,
                  about: event.target.value,
                });
              }}
              value={signUpData.about}
            />
          </div>

          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 px-3 py-2 rounded-md"
            >
              Signup
            </button>
            <button
              type="button"
              className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded-md ms-3"
              onClick={resetForm}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
