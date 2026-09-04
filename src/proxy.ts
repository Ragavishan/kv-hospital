import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  console.log("🔥 PROXY RUNNING:", pathname);

  // Admin login page is public
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  // Protect all admin pages
  if (pathname.startsWith("/admin")) {
    const session = request.cookies.get(
      "iswarya_admin_session"
    );

    console.log(
      "🔐 ADMIN SESSION:",
      session?.value ?? "NO SESSION"
    );

    // No valid session → redirect to login
    if (session?.value !== "authenticated") {
      const loginUrl = request.nextUrl.clone();

      loginUrl.pathname = "/admin/login";
      loginUrl.search = "";

      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
  ],
};