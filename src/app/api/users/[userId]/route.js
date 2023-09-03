import { NextResponse } from "next/server";

export function GET(request) {
  return NextResponse.json({
    message: "Hello World",
  });
}

export function POST() {}

export function DELETE() {}

export function PUT() {}
