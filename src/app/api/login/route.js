import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(request) {
  const { email, password } = await request.json();
  try {
    // get user by email
    const user = await User.findOne({ email: email });
    if (user === null) {
      throw new Error("User not found");
    }

    // check password
    const matched = bcrypt.compareSync(password, user.password);

    if (!matched) {
      throw new Error("Password not matched");
    }

    // create a token
    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
      },
      process.env.JWT_KEY
    );

    console.log(user);
    console.log(token);

    return NextResponse.json({
      message: "success",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: error.message,
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
