"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  CalendarDays,
  Clock3,
  Phone,
  Stethoscope,
  UserRound,
  RefreshCw,
  Eye,
  Trash2,
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

const getStatusClasses = (status?: Appointment["status"]) => {
  switch (status) {
    case "Confirmed":
      return "bg-emerald-50 text-emerald-700";

    case "Completed":
      return "bg-blue-50 text-blue-700";

    case "Cancelled":
      return "bg-red-50 text-red-700";

    case "New":
    default:
      return "bg-amber-50 text-amber-700";
  }
};

export default function AdminAppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/appointments", {
        cache: "no-store",
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to fetch appointments"
        );
      }

      setAppointments(result.appointments || []);
    } catch (error) {
      console.error("Fetch appointments error:", error);

      setError(
        "Unable to load appointments. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this appointment?"
    );

    if (!confirmed) {
      return;
    }

    try {
      setDeletingId(id);

      const response = await fetch(
        `/api/appointments/${id}`,
        {
          method: "DELETE",
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to delete appointment"
        );
      }

      setAppointments((currentAppointments) =>
        currentAppointments.filter(
          (appointment) => appointment._id !== id
        )
      );
    } catch (error) {
      console.error("Delete appointment error:", error);

      alert(
        "Unable to delete appointment. Please try again."
      );
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Header */}

        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
              KV Hospital
            </p>

            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
              Appointment Requests
            </h1>

            <p className="mt-2 text-slate-500">
              View and manage all patient appointment requests.
            </p>
          </div>

          <button
            type="button"
            onClick={fetchAppointments}
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-bold text-white shadow-md transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <RefreshCw
              size={18}
              className={loading ? "animate-spin" : ""}
            />

            Refresh
          </button>

        </div>

        {/* Count */}

        <div className="mt-8 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">

          <p className="text-sm font-semibold text-slate-500">
            Total Appointment Requests
          </p>

          <p className="mt-2 text-3xl font-extrabold text-blue-700">
            {appointments.length}
          </p>

        </div>

        {/* Loading */}

        {loading && (
          <div className="mt-8 rounded-2xl bg-white p-10 text-center shadow-sm">
            <RefreshCw
              size={28}
              className="mx-auto animate-spin text-blue-700"
            />

            <p className="mt-4 font-semibold text-slate-600">
              Loading appointments...
            </p>
          </div>
        )}

        {/* Error */}

        {!loading && error && (
          <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-6 text-center text-red-700">
            <p className="font-semibold">
              {error}
            </p>

            <button
              type="button"
              onClick={fetchAppointments}
              className="mt-4 rounded-lg bg-red-600 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Empty */}

        {!loading &&
          !error &&
          appointments.length === 0 && (
            <div className="mt-8 rounded-2xl bg-white p-10 text-center shadow-sm">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                <CalendarDays size={26} />
              </div>

              <p className="mt-5 font-bold text-slate-800">
                No appointments found.
              </p>

              <p className="mt-2 text-sm text-slate-500">
                New appointment requests will appear here.
              </p>

            </div>
          )}

        {/* Appointment Cards */}

        {!loading &&
          !error &&
          appointments.length > 0 && (
            <div className="mt-8 grid gap-6 lg:grid-cols-2">

              {appointments.map((appointment) => (
                <article
                  key={appointment._id}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
                >

                  {/* Patient */}

                  <div className="flex items-start justify-between gap-4">

                    <div className="flex items-center gap-4">

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                        <UserRound size={22} />
                      </div>

                      <div>
                        <h2 className="text-lg font-extrabold text-slate-900">
                          {appointment.name}
                        </h2>

                        <p className="mt-1 flex items-center gap-2 text-sm text-slate-500">
                          <Phone size={15} />

                          {appointment.phone}
                        </p>
                      </div>

                    </div>

                    <span
                      className={`rounded-full px-3 py-1.5 text-xs font-bold ${getStatusClasses(
                        appointment.status
                      )}`}
                    >
                      {appointment.status || "New"}
                    </span>

                  </div>

                  {/* Details */}

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">

                    {/* Department */}

                    <div className="rounded-xl bg-slate-50 p-4">

                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                        <Stethoscope size={15} />

                        Department
                      </div>

                      <p className="mt-2 font-bold text-slate-800">
                        {appointment.department}
                      </p>

                    </div>

                    {/* Doctor */}

                    <div className="rounded-xl bg-slate-50 p-4">

                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                        <UserRound size={15} />

                        Doctor
                      </div>

                      <p className="mt-2 font-bold text-slate-800">
                        {appointment.doctor}
                      </p>

                    </div>

                    {/* Date */}

                    <div className="rounded-xl bg-blue-50 p-4">

                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-500">
                        <CalendarDays size={15} />

                        Date
                      </div>

                      <p className="mt-2 font-bold text-blue-800">
                        {appointment.date}
                      </p>

                    </div>

                    {/* Time */}

                    <div className="rounded-xl bg-blue-50 p-4">

                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-500">
                        <Clock3 size={15} />

                        Time
                      </div>

                      <p className="mt-2 font-bold text-blue-800">
                        {appointment.time}
                      </p>

                    </div>

                  </div>

                  {/* Message */}

                  {appointment.message && (
                    <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50 p-4">

                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Patient Message
                      </p>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {appointment.message}
                      </p>

                    </div>
                  )}

                  {/* Actions */}

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">

                    {/* View Details */}

                    <Link
                      href={`/admin/appointments/${appointment._id}`}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-bold text-white transition hover:bg-blue-800"
                    >
                      <Eye size={18} />

                      View Details
                    </Link>

                    {/* Delete */}

                    <button
                      type="button"
                      onClick={() =>
                        handleDelete(appointment._id)
                      }
                      disabled={
                        deletingId === appointment._id
                      }
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-5 py-3 font-bold text-red-600 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50 sm:flex-1"
                    >
                      <Trash2 size={18} />

                      {deletingId === appointment._id
                        ? "Deleting..."
                        : "Delete"}
                    </button>

                  </div>

                </article>
              ))}

            </div>
          )}

      </div>
    </main>
  );
}