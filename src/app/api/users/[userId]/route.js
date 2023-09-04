import { NextResponse } from "next/server";
import { User } from "@/models/user";

// Get a User by ID
export async function GET(request, { params }) {
  const { userId } = params;
  try {
    const user = await User.findById({
      _id: userId,
    });
    return NextResponse.json(user, {
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: "User couldn't be found",
      success: false,
    });
  }
}

// Delete a User by ID
export async function DELETE(request, { params }) {
  const { userId } = params;
  try {
    await User.deleteOne({
      _id: userId,
    });
    return NextResponse.json({
      message: "User Deleted",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error in deleting user",
      success: false,
    });
  }
}

// Update a User by ID
export async function PUT(request, { params }) {
  const { userId } = params;
  const { name, password, about, profileURL } = await request.json();
  try {
    const user = await User.findById({
      _id: userId,
    });

    user.name = name;
    user.password = password;
    user.about = about;
    user.profileURL = profileURL;

    const updatedUser = await user.save();
    return NextResponse.json(updatedUser, {
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Failed to update the user",
      success: false,
    });
  }
}
