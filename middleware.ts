import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Admin login page is public
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  // Protect every other /admin page
  if (pathname.startsWith("/admin")) {
    const session = request.cookies.get("kv_admin_session");

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