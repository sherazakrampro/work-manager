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
export async function PUT(request, { params }) {}

// Delete a Task by ID
export async function DELETE(request, { params }) {}
