"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  ClipboardList,
  XCircle,
  RefreshCw,
  ArrowRight,
  Loader2,
} from "lucide-react";

interface Appointment {
  _id: string;
  name: string;
  phone: string;
  department: string;
  doctor: string;
  date: string;
  time: string;
  message?: string;
  status?: "New" | "Confirmed" | "Completed" | "Cancelled";
  createdAt?: string;
}

export default function AdminDashboardPage() {
  const [appointments, setAppointments] = useState<
    Appointment[]
  >([]);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "/api/appointments",
        {
          cache: "no-store",
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message ||
            "Unable to fetch appointments"
        );
      }

      setAppointments(result.appointments || []);
    } catch (error) {
      console.error(error);

      setError(
        "Unable to load dashboard data."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const totalAppointments = appointments.length;

  const newAppointments = appointments.filter(
    (appointment) =>
      (appointment.status || "New") === "New"
  ).length;

  const confirmedAppointments = appointments.filter(
    (appointment) =>
      appointment.status === "Confirmed"
  ).length;

  const completedAppointments = appointments.filter(
    (appointment) =>
      appointment.status === "Completed"
  ).length;

  const cancelledAppointments = appointments.filter(
    (appointment) =>
      appointment.status === "Cancelled"
  ).length;

  const recentAppointments = appointments.slice(
    0,
    5
  );

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Header */}

        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
              Iswarya Hospital
            </p>

            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Admin Dashboard
            </h1>

            <p className="mt-2 text-slate-500">
              Manage and monitor appointment requests.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">

            <button
              type="button"
              onClick={fetchAppointments}
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <Loader2
                  size={18}
                  className="animate-spin"
                />
              ) : (
                <RefreshCw size={18} />
              )}

              Refresh
            </button>

            <Link
              href="/admin/appointments"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-bold text-white shadow-md transition hover:bg-blue-800"
            >
              <ClipboardList size={18} />

              All Appointments
            </Link>

          </div>
        </div>

        {/* Error */}

        {error && (
          <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-5 text-center font-semibold text-red-700">
            {error}
          </div>
        )}

        {/* Loading */}

        {loading ? (
          <div className="mt-8 rounded-2xl bg-white p-12 text-center shadow-sm">

            <Loader2
              size={30}
              className="mx-auto animate-spin text-blue-700"
            />

            <p className="mt-4 font-semibold text-slate-600">
              Loading dashboard...
            </p>

          </div>
        ) : (
          <>
            {/* Summary Cards */}

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

              {/* Total */}

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">

                <div className="flex items-center justify-between">

                  <div className="rounded-xl bg-blue-50 p-3 text-blue-700">
                    <ClipboardList size={22} />
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Total
                  </span>

                </div>

                <p className="mt-5 text-3xl font-extrabold text-slate-900">
                  {totalAppointments}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  All requests
                </p>

              </div>

              {/* New */}

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">

                <div className="flex items-center justify-between">

                  <div className="rounded-xl bg-amber-50 p-3 text-amber-600">
                    <Clock3 size={22} />
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    New
                  </span>

                </div>

                <p className="mt-5 text-3xl font-extrabold text-slate-900">
                  {newAppointments}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Waiting for review
                </p>

              </div>

              {/* Confirmed */}

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">

                <div className="flex items-center justify-between">

                  <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
                    <CheckCircle2 size={22} />
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Confirmed
                  </span>

                </div>

                <p className="mt-5 text-3xl font-extrabold text-slate-900">
                  {confirmedAppointments}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Appointments confirmed
                </p>

              </div>

              {/* Completed */}

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">

                <div className="flex items-center justify-between">

                  <div className="rounded-xl bg-blue-50 p-3 text-blue-700">
                    <CalendarDays size={22} />
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Completed
                  </span>

                </div>

                <p className="mt-5 text-3xl font-extrabold text-slate-900">
                  {completedAppointments}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Completed visits
                </p>

              </div>

              {/* Cancelled */}

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">

                <div className="flex items-center justify-between">

                  <div className="rounded-xl bg-red-50 p-3 text-red-600">
                    <XCircle size={22} />
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Cancelled
                  </span>

                </div>

                <p className="mt-5 text-3xl font-extrabold text-slate-900">
                  {cancelledAppointments}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Cancelled requests
                </p>

              </div>

            </div>

            {/* Recent Appointments */}

            <div className="mt-8 rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">

              <div className="flex flex-col justify-between gap-4 border-b border-slate-100 p-6 sm:flex-row sm:items-center">

                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                    Recent Requests
                  </p>

                  <h2 className="mt-1 text-xl font-extrabold text-slate-900">
                    Latest Appointments
                  </h2>
                </div>

                <Link
                  href="/admin/appointments"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-800"
                >
                  View All

                  <ArrowRight size={16} />
                </Link>

              </div>

              {recentAppointments.length === 0 ? (
                <div className="p-10 text-center">

                  <ClipboardList
                    size={32}
                    className="mx-auto text-slate-300"
                  />

                  <p className="mt-4 font-bold text-slate-700">
                    No appointments found.
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    New appointment requests will appear here.
                  </p>

                </div>
              ) : (
                <div className="divide-y divide-slate-100">

                  {recentAppointments.map(
                    (appointment) => {
                      const status =
                        appointment.status ||
                        "New";

                      return (
                        <div
                          key={appointment._id}
                          className="flex flex-col gap-5 p-6 transition hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between"
                        >

                          {/* Patient */}

                          <div className="flex items-center gap-4">

                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 font-extrabold text-blue-700">
                              {appointment.name
                                .charAt(0)
                                .toUpperCase()}
                            </div>

                            <div>
                              <h3 className="font-extrabold text-slate-900">
                                {appointment.name}
                              </h3>

                              <p className="mt-1 text-sm text-slate-500">
                                {appointment.department}
                                {" · "}
                                {appointment.doctor}
                              </p>
                            </div>

                          </div>

                          {/* Appointment Date */}

                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <CalendarDays
                              size={16}
                              className="text-blue-600"
                            />

                            <span className="font-semibold">
                              {appointment.date}
                            </span>

                            <span className="text-slate-300">
                              |
                            </span>

                            <span>
                              {appointment.time}
                            </span>
                          </div>

                          {/* Status + View */}

                          <div className="flex items-center gap-4">

                            <span
                              className={`rounded-full px-3 py-1.5 text-xs font-bold ${
                                status === "Confirmed"
                                  ? "bg-emerald-50 text-emerald-700"
                                  : status === "Completed"
                                  ? "bg-blue-50 text-blue-700"
                                  : status === "Cancelled"
                                  ? "bg-red-50 text-red-700"
                                  : "bg-amber-50 text-amber-700"
                              }`}
                            >
                              {status}
                            </span>

                            <Link
                              href={`/admin/appointments/${appointment._id}`}
                              className="inline-flex items-center gap-1 text-sm font-bold text-blue-700 hover:text-blue-800"
                            >
                              View

                              <ArrowRight
                                size={15}
                              />
                            </Link>

                          </div>

                        </div>
                      );
                    }
                  )}

                </div>
              )}

            </div>
          </>
        )}

      </div>
    </main>
  );
}