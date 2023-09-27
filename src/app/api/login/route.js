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

    // generate a token
    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
      },
      process.env.JWT_KEY
    );

    // create response - cookie
    const response = NextResponse.json({
      message: "Login success",
      success: true,
    });

    response.cookies.set("authToken", token, {
      expiresIn: "1d",
      httpOnly: true,
    });

    console.log(user);
    console.log(token);

    return response;
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
