import { NextResponse } from "next/server";
import { Task } from "@/models/task";
import getResponseMessage from "@/helper/responseMessage";
import jwt from "jsonwebtoken";

// Get all the Tasks
export async function GET(request) {
  try {
    const tasks = await Task.find();

    return NextResponse.json(tasks, {
      success: true,
    });
  } catch (error) {
    console.log(error);
    return getResponseMessage("Error in getting data", false, 404);
  }
}

// Create a Task
export async function POST(request) {
  const { title, content, userId } = await request.json();

  // fetching logged in user id
  const authToken = request.cookies.get("authToken")?.value;
  // console.log(authToken);
  const data = jwt.verify(authToken, process.env.JWT_KEY);
  // console.log(data);
  console.log(data._id);

  try {
    const task = new Task({
      title,
      content,
      userId: data._id,
    });

    const createdTask = await task.save();

    return NextResponse.json(createdTask, {
      status: 201,
    });
  } catch (error) {
    console.log(error);

    return getResponseMessage("Failed to create task", false, 500);
  }
}
