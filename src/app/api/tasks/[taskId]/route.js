import getResponseMessage from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

// Get a Task by ID
export async function GET(request, { params }) {
  const { taskId } = params;
  try {
    const task = await Task.findById(taskId);

    return NextResponse.json(task);
  } catch (error) {
    console.log(error);
    return getResponseMessage("Error in getting task", false, 404);
  }
}

// Update a Task by ID
export async function PUT(request, { params }) {
  try {
    const { taskId } = params;

    const { title, content, status } = await request.json();

    let task = await Task.findById(taskId);

    task.title = title;
    task.content = content;
    task.status = status;

    const updatedTask = await task.save();

    return NextResponse.json(updatedTask);
  } catch (error) {
    console.log(error);

    return getResponseMessage("Error in updating task", false, 500);
  }
}

// Delete a Task by ID
export async function DELETE(request, { params }) {
  try {
    const { taskId } = params;

    await Task.deleteOne({
      _id: taskId,
    });

    return NextResponse.json(
      {
        message: "Task deleted successfully",
        success: true,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);

    return getResponseMessage("Error in task deletion", false, 500);
  }
}
