import { NextResponse } from "next/server";

export async function POST(
  request: Request
) {
  try {
    const data = await request.json();

    const username = data.username?.trim();
    const password = data.password;

    if (!username || !password) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Username and password are required.",
        },
        { status: 400 }
      );
    }

    const adminUsername =
      process.env.ADMIN_USERNAME;

    const adminPassword =
      process.env.ADMIN_PASSWORD;

    if (!adminUsername || !adminPassword) {
      console.error(
        "Admin credentials are not configured."
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Admin login is not configured.",
        },
        { status: 500 }
      );
    }

    if (
      username !== adminUsername ||
      password !== adminPassword
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Invalid username or password.",
        },
        { status: 401 }
      );
    }

    const response = NextResponse.json(
      {
        success: true,
        message: "Login successful.",
      },
      { status: 200 }
    );

    response.cookies.set(
      "kv_admin_session",
      "authenticated",
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 8,
      }
    );

    return response;
  } catch (error) {
    console.error(
      "Admin login API error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Unable to login.",
      },
      { status: 500 }
    );
  }
}