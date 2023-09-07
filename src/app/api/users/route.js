import { User } from "@/models/user";
import { NextResponse } from "next/server";
import dbConnect from "../../../helper/db";

dbConnect();

// Get All Users
export async function GET(request) {
  let users = [];
  try {
    users = await User.find().select("-password"); // password will not be shown
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Failed to get users",
      success: false,
    });
  }
  return NextResponse.json(users);
}

// Create a New User
export async function POST(request) {
  const { name, email, password, about, profileURL } = await request.json();
  const user = new User({
    name,
    email,
    password,
    about,
    profileURL,
  });
  try {
    const createdUser = await user.save();
    const response = NextResponse.json(user, {
      status: 201,
    });
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create user",
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
