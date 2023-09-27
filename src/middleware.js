import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  console.log("middleware executed");

  // getting token from cookie
  const authToken = request.cookies.get("authToken")?.value;

  // if user is accessing the login api
  if (request.nextUrl.pathname === "/api/login") {
    return; // do nothing
  }

  const loggedInUserNotAccessPaths =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/signup";

  if (loggedInUserNotAccessPaths) {
    // accessing not secured routes
    if (authToken) {
      return NextResponse.redirect(new URL("/profile/user", request.url));
    }
  } else {
    // accessing secured routes
    if (!authToken) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
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
