"use client";
import React, { useEffect, useState } from "react";
import UserContext from "./userContext";
import { toast } from "react-toastify";
import { currentUser } from "@/services/userService";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    async function load() {
      try {
        const loggedInUser = await currentUser();
        setUser[{ ...loggedInUser }];
      } catch (error) {
        console.log(error);
        toast.error("Error in loading current user", {
          position: "top-right",
        });
        setUser(undefined);
      }
    }
    load();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
