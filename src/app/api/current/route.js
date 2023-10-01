import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { User } from "@/models/user";

export async function GET(request) {
  // get token from cookie
  const authToken = request.cookies.get("authToken")?.value;

  // verify token
  const data = jwt.verify(authToken, process.env.JWT_KEY);
  console.log(data);
  const user = await User.findById(data._id).select("-password");
  return NextResponse.json(user);
}
