"use client";

import UserContext from "@/context/userContext";
import Link from "next/link";
import React, { useContext } from "react";

const Navbar = () => {
  const context = useContext(UserContext);
  console.log(context);

  return (
    <nav className="bg-blue-600 h-12 flex items-center justify-between px-6">
      <div className="brand">
        <h1 className="text-xl font-bold">
          <a href="#">Work Manager</a>
        </h1>
      </div>
      {context.user && (
        <>
          <div className="flex gap-10">
            <Link href="/" className="hover:text-blue-100">
              Home
            </Link>
            <Link href="/add-task" className="hover:text-blue-100">
              Add Task
            </Link>
            <Link href="/show-tasks" className="hover:text-blue-100">
              Show Tasks
            </Link>
          </div>
        </>
      )}
      {context.user && (
        <>
          <div className="flex gap-4">
            <Link href="/login" className="hover:text-blue-100">
              {context.user.name}
            </Link>
            <Link href="/signup" className="hover:text-blue-100">
              Logout
            </Link>
          </div>
        </>
      )}
      {!context.user && (
        <>
          <div className="flex gap-4">
            <Link href="/login" className="hover:text-blue-100">
              Login
            </Link>
            <Link href="/signup" className="hover:text-blue-100">
              Sign Up
            </Link>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
