import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const middleware = async (request) => {
  // Get token
  const token = cookies().get("__Secure-next-auth.session-token");
  // console.log(token, "token");

  // Get pathname
  const pathName = request.nextUrl.pathname;
  // console.log(pathName, "pathname");

  // Allow API routes to bypass auth
  if (pathName.includes("api")) {
    return NextResponse.next();
  }

  // Redirect if no token
  if (!token) {
    return NextResponse.redirect(
      new URL(`/login?redirect=${encodeURIComponent(pathName)}`, request.url)
    );
  }

  return NextResponse.next();
};

// Correct config object
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/tours/:path*",
    "/reviews/:path*",
    "/blogs/:path*",
    "/start_hosting/:path*",
  ],
};
