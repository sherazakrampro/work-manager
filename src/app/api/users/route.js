import { User } from "@/models/user";
import { NextResponse } from "next/server";

export function GET(request) {
  return NextResponse.json({
    message: "Hello World",
  });
}

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
    return NextResponse.json({
      message: "Failed to create user",
      status: false,
    });
  }
}

export function DELETE() {}

export function PUT() {}
