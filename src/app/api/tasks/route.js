import { NextResponse } from "next/server";
import { Task } from "@/models/task";
import getResponseMessage from "@/helper/responseMessage";

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

  try {
    const task = new Task({
      title,
      content,
      userId,
    });

    const createdTask = await task.save();

    return NextResponse.json(createdTask, {
      status: 201,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      message: "Failed to create a task",
      success: false,
    });
  }
}
