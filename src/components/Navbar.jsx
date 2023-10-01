"use client";

import UserContext from "@/context/userContext";
import { logout } from "@/services/userService";
import Link from "next/link";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const context = useContext(UserContext);
  const router = useRouter();

  async function doLogout() {
    try {
      const result = await logout();
      context.setUser(undefined);
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Logout Error", {
        position: "top-right",
      });
    }
  }

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
            <Link href={"/"} className="hover:text-blue-100">
              Home
            </Link>
            <Link href={"/add-task"} className="hover:text-blue-100">
              Add Task
            </Link>
            <Link href={"/show-tasks"} className="hover:text-blue-100">
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
            <Link
              href="/signup"
              className="hover:text-blue-100"
              onClick={doLogout}
            >
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
