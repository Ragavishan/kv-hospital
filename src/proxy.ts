import { NextRequest, NextResponse } from "next/server";

const ADMIN_COOKIE_NAME = "iswarya_admin_session";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  if (pathname.startsWith("/admin")) {
    const session = request.cookies.get(ADMIN_COOKIE_NAME)?.value;

    if (session !== "authenticated") {
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = "/admin/login";
      loginUrl.search = "";

      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
