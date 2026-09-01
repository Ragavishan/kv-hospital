import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  console.log(
    "🔥🔥🔥 PROXY RUNNING:",
    pathname
  );

  // Allow admin login page
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  // Protect all other admin pages
  if (pathname.startsWith("/admin")) {
    const session = request.cookies.get(
      "iswarya hospital_admin_session"
    );

    if (session?.value !== "authenticated") {
      const loginUrl = new URL(
        "/admin/login",
        request.url
      );

      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};