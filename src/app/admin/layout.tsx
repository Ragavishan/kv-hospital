"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ClipboardList,
  LogOut,
  Hospital,
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isDashboard =
    pathname === "/admin/dashboard";

  const isAppointments =
    pathname.startsWith("/admin/appointments");

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Sidebar */}

      <aside className="fixed inset-y-0 left-0 z-50 hidden w-64 border-r border-slate-200 bg-white lg:block">

        {/* Logo */}

        <div className="flex h-20 items-center gap-3 border-b border-slate-100 px-6">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-700 text-white">
            <Hospital size={22} />
          </div>

          <div>
            <p className="font-extrabold text-slate-900">
              Iswarya Hospital
            </p>

            <p className="text-xs font-semibold text-slate-400">
              Admin Panel
            </p>
          </div>

        </div>

        {/* Navigation */}

        <nav className="space-y-2 p-4">

          <Link
            href="/admin/dashboard"
            className={`flex items-center gap-3 rounded-xl px-4 py-3 font-semibold transition ${
              isDashboard
                ? "bg-blue-50 text-blue-700"
                : "text-slate-600 hover:bg-slate-50 hover:text-blue-700"
            }`}
          >
            <LayoutDashboard size={20} />

            Dashboard
          </Link>

          <Link
            href="/admin/appointments"
            className={`flex items-center gap-3 rounded-xl px-4 py-3 font-semibold transition ${
              isAppointments
                ? "bg-blue-50 text-blue-700"
                : "text-slate-600 hover:bg-slate-50 hover:text-blue-700"
            }`}
          >
            <ClipboardList size={20} />

            Appointments
          </Link>

        </nav>

        {/* Bottom */}

        <div className="absolute bottom-0 left-0 right-0 border-t border-slate-100 p-4">

          <button
            type="button"
            onClick={() => {
              window.location.href = "/";
            }}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 font-semibold text-slate-600 transition hover:bg-red-50 hover:text-red-600"
          >
            <LogOut size={20} />

            Exit Admin
          </button>

        </div>

      </aside>

      {/* Mobile Top Bar */}

      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white lg:hidden">

        <div className="flex items-center justify-between px-5 py-4">

          <div className="flex items-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-700 text-white">
              <Hospital size={19} />
            </div>

            <div>
              <p className="font-extrabold text-slate-900">
                Iswarya Hospital
              </p>

              <p className="text-xs text-slate-400">
                Admin Panel
              </p>
            </div>

          </div>

          <Link
            href="/admin/appointments"
            className="text-sm font-bold text-blue-700"
          >
            Appointments
          </Link>

        </div>

      </header>

      {/* Main Content */}

      <div className="lg:pl-64">
        {children}
      </div>

    </div>
  );
}