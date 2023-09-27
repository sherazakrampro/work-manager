import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  console.log("middleware executed");

  const authToken = request.cookies.get("authToken")?.value;
  console.log(authToken);

  //   return NextResponse.redirect(new URL("/home", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/add-task",
    "/show-tasks",
    "/signup",
    "/login",
    "/profile/:path*",
    "/api/:path*",
  ],
};
