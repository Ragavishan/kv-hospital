"use client";

import { FormEvent, useState } from "react";
import {
  ArrowLeft,
  KeyRound,
  LockKeyhole,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError("");
    setMessage("");

    try {
      await signIn("google", {
        callbackUrl: "/api/admin/google-session"
      });
    } catch (error) {
      console.error("Google login error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Unable to sign in with Google."
      );

      setLoading(false);
    }
  };

  const handleRequestOTP = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch(
        "/api/admin/request-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to send OTP."
        );
      }

      setOtpSent(true);
      setMessage(
        "OTP has been sent to your registered email."
      );
    } catch (error) {
      console.error(
        "Request OTP error:",
        error
      );

      setError(
        error instanceof Error
          ? error.message
          : "Unable to send OTP."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch(
        "/api/admin/verify-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            otp,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Invalid OTP."
        );
      }

      router.push("/admin/appointments");
      router.refresh();
    } catch (error) {
      console.error(
        "Verify OTP error:",
        error
      );

      setError(
        error instanceof Error
          ? error.message
          : "Unable to verify OTP."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    setOtp("");
    setOtpSent(false);
    setError("");
    setMessage("");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-5 py-10">
      <div className="w-full max-w-md">

        {/* Logo / Heading */}

        <div className="mb-8 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg">
            {otpSent ? (
              <ShieldCheck size={30} />
            ) : (
              <LockKeyhole size={30} />
            )}
          </div>

          <p className="mt-5 text-sm font-bold uppercase tracking-wider text-blue-700">
            Iswarya Hospital
          </p>

          <h1 className="mt-2 text-3xl font-extrabold text-slate-900">
            Admin Login
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Secure administrator access
          </p>

        </div>

        {/* Login Card */}

        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl sm:p-9">

          {!otpSent ? (
            <>
              {/* Google Login */}

              <button
                type="button"
                onClick={handleGoogleLogin}
                disabled={loading}
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-bold text-slate-700 shadow-sm transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="#4285F4"
                    d="M21.35 12.23c0-.79-.07-1.55-.2-2.27H12v4.3h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.91-4.18 2.91-7.42Z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 21.99c2.63 0 4.84-.87 6.45-2.34l-3.14-2.45c-.87.58-1.98.93-3.31.93-2.54 0-4.69-1.72-5.46-4.03H3.3v2.53A9.75 9.75 0 0 0 12 21.99Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M6.54 14.1A5.86 5.86 0 0 1 6.23 12c0-.73.13-1.44.31-2.1V7.37H3.3A9.75 9.75 0 0 0 2.25 12c0 1.57.38 3.05 1.05 4.63l3.24-2.53Z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.87c1.43 0 2.71.49 3.72 1.46l2.79-2.79C16.84 2.96 14.63 2.01 12 2.01a9.75 9.75 0 0 0-8.7 5.36l3.24 2.53C7.31 7.59 9.46 5.87 12 5.87Z"
                  />
                </svg>

                {loading
                  ? "Signing in..."
                  : "Continue with Google"}
              </button>

              {/* Divider */}

              <div className="my-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-slate-200" />

                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  or
                </span>

                <div className="h-px flex-1 bg-slate-200" />
              </div>

              {/* Email / OTP Form */}

              <form
                onSubmit={handleRequestOTP}
                className="space-y-5"
              >

                {/* Email */}

                <div>

                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Registered Email
                  </label>

                  <div className="relative">

                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(event) =>
                        setEmail(
                          event.target.value
                        )
                      }
                      placeholder="Enter your registered email"
                      autoComplete="email"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />

                  </div>

                </div>

                {/* Error */}

                {error && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                    {error}
                  </div>
                )}

                {/* Success */}

                {message && (
                  <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
                    {message}
                  </div>
                )}

                {/* Send OTP */}

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-3.5 font-bold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Sending OTP...
                    </>
                  ) : (
                    <>
                      <Mail size={18} />
                      Send OTP
                    </>
                  )}
                </button>

              </form>
            </>
          ) : (
            /* OTP Form */

            <form
              onSubmit={handleVerifyOTP}
              className="space-y-5"
            >

              {/* Email Display */}

              <div className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-3">

                <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                  OTP sent to
                </p>

                <p className="mt-1 break-all text-sm font-bold text-slate-800">
                  {email}
                </p>

              </div>

              {/* OTP */}

              <div>

                <label
                  htmlFor="otp"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Enter 6-Digit OTP
                </label>

                <div className="relative">

                  <KeyRound
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="otp"
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    value={otp}
                    onChange={(event) =>
                      setOtp(
                        event.target.value.replace(
                          /\D/g,
                          ""
                        )
                      )
                    }
                    placeholder="Enter 6-digit OTP"
                    autoComplete="one-time-code"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-center text-lg font-bold tracking-[0.4em] outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />

                </div>

                <p className="mt-2 text-xs text-slate-500">
                  OTP is valid for 5 minutes.
                </p>

              </div>

              {/* Error */}

              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                  {error}
                </div>
              )}

              {/* Verify */}

              <button
                type="submit"
                disabled={
                  loading ||
                  otp.length !== 6
                }
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-3.5 font-bold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Verifying...
                  </>
                ) : (
                  <>
                    <ShieldCheck size={18} />
                    Verify OTP
                  </>
                )}
              </button>

              {/* Back */}

              <button
                type="button"
                onClick={handleBack}
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-6 py-3 text-sm font-bold text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <ArrowLeft size={17} />
                Change Email
              </button>

            </form>
          )}

        </div>

      </div>
    </main>
  );
}
