"use client";

import {
  useCallback,
  useEffect,
  useState,
} from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  Phone,
  Stethoscope,
  UserRound,
  MessageSquare,
  Trash2,
  CheckCircle2,
  XCircle,
  CircleCheck,
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

type AppointmentStatus =
  | "New"
  | "Confirmed"
  | "Completed"
  | "Cancelled";

export default function AppointmentDetailsPage() {
  const params = useParams();
  const router = useRouter();

  const id = params.id as string;

  const [appointment, setAppointment] =
    useState<Appointment | null>(null);

  const [loading, setLoading] = useState(true);
  const [updatingStatus, setUpdatingStatus] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState("");

  const fetchAppointment = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `/api/appointments/${id}`
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message ||
            "Unable to load appointment"
        );
      }

      setAppointment(result.appointment);
    } catch (error) {
      console.error(error);

      setError(
        "Unable to load appointment details."
      );
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    if (!id) {
      return;
    }

    const timer = window.setTimeout(() => {
      void fetchAppointment();
    }, 0);

    return () => window.clearTimeout(timer);
  }, [fetchAppointment, id]);

  const handleStatusChange = async (
    status: AppointmentStatus
  ) => {
    if (!appointment) return;

    if (appointment.status === status) {
      return;
    }

    try {
      setUpdatingStatus(true);
      setError("");

      const response = await fetch(
        `/api/appointments/${appointment._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message ||
            "Unable to update status"
        );
      }

      setAppointment(result.appointment);
    } catch (error) {
      console.error(error);

      setError(
        "Unable to update appointment status."
      );
    } finally {
      setUpdatingStatus(false);
    }
  };

  const handleDelete = async () => {
    if (!appointment) return;

    const confirmed = window.confirm(
      "Are you sure you want to delete this appointment?"
    );

    if (!confirmed) return;

    try {
      setDeleting(true);
      setError("");

      const response = await fetch(
        `/api/appointments/${appointment._id}`,
        {
          method: "DELETE",
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message ||
            "Unable to delete appointment"
        );
      }

      router.push("/admin/appointments");
      router.refresh();
    } catch (error) {
      console.error(error);

      setError(
        "Unable to delete appointment."
      );
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 px-5 py-10">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
            <Loader2
              className="mx-auto animate-spin text-blue-700"
              size={28}
            />

            <p className="mt-4 font-semibold text-slate-600">
              Loading appointment...
            </p>
          </div>
        </div>
      </main>
    );
  }

  if (error && !appointment) {
    return (
      <main className="min-h-screen bg-slate-50 px-5 py-10">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
            <p className="font-semibold text-red-700">
              {error}
            </p>

            <button
              type="button"
              onClick={() =>
                router.push("/admin/appointments")
              }
              className="mt-6 rounded-xl bg-blue-700 px-5 py-3 font-bold text-white hover:bg-blue-800"
            >
              Back to Appointments
            </button>
          </div>
        </div>
      </main>
    );
  }

  if (!appointment) {
    return null;
  }

  const currentStatus =
    appointment.status || "New";

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">

        {/* Back Button */}

        <button
          type="button"
          onClick={() =>
            router.push("/admin/appointments")
          }
          className="mb-6 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 font-semibold text-slate-700 shadow-sm transition hover:bg-slate-100"
        >
          <ArrowLeft size={18} />

          Back to Appointments
        </button>

        {/* Header */}

        <div className="rounded-3xl bg-gradient-to-br from-blue-700 to-blue-900 p-8 text-white shadow-xl sm:p-10">

          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">

            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-blue-200">
                Iswarya Hospital
              </p>

              <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">
                Appointment Details
              </h1>

              <p className="mt-3 text-blue-100">
                Complete patient appointment information
              </p>
            </div>

            <button
              type="button"
              onClick={handleDelete}
              disabled={deleting}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-500 px-5 py-3 font-bold text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {deleting ? (
                <Loader2
                  size={18}
                  className="animate-spin"
                />
              ) : (
                <Trash2 size={18} />
              )}

              {deleting
                ? "Deleting..."
                : "Delete"}
            </button>

          </div>
        </div>

        {/* Error */}

        {error && (
          <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">
            {error}
          </div>
        )}

        {/* Status Section */}

        <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm sm:p-8">

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-slate-400">
                Appointment Status
              </p>

              <h2 className="mt-1 text-xl font-extrabold text-slate-900">
                {currentStatus}
              </h2>
            </div>

            {updatingStatus && (
              <div className="flex items-center gap-2 text-sm font-semibold text-blue-700">
                <Loader2
                  size={17}
                  className="animate-spin"
                />

                Updating...
              </div>
            )}

          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-4">

            {/* New */}

            <button
              type="button"
              disabled={updatingStatus}
              onClick={() =>
                handleStatusChange("New")
              }
              className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 font-bold transition ${
                currentStatus === "New"
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50"
              }`}
            >
              <CircleCheck size={18} />

              New
            </button>

            {/* Confirmed */}

            <button
              type="button"
              disabled={updatingStatus}
              onClick={() =>
                handleStatusChange("Confirmed")
              }
              className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 font-bold transition ${
                currentStatus === "Confirmed"
                  ? "border-emerald-600 bg-emerald-600 text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-emerald-300 hover:bg-emerald-50"
              }`}
            >
              <CheckCircle2 size={18} />

              Confirmed
            </button>

            {/* Completed */}

            <button
              type="button"
              disabled={updatingStatus}
              onClick={() =>
                handleStatusChange("Completed")
              }
              className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 font-bold transition ${
                currentStatus === "Completed"
                  ? "border-blue-700 bg-blue-700 text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50"
              }`}
            >
              <CircleCheck size={18} />

              Completed
            </button>

            {/* Cancelled */}

            <button
              type="button"
              disabled={updatingStatus}
              onClick={() =>
                handleStatusChange("Cancelled")
              }
              className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 font-bold transition ${
                currentStatus === "Cancelled"
                  ? "border-red-600 bg-red-600 text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-red-300 hover:bg-red-50"
              }`}
            >
              <XCircle size={18} />

              Cancelled
            </button>

          </div>
        </div>

        {/* Patient Information */}

        <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm sm:p-8">

          <h2 className="text-xl font-extrabold text-slate-900">
            Patient Information
          </h2>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">

            <div className="rounded-xl bg-slate-50 p-5">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-400">
                <UserRound size={17} />

                Patient Name
              </div>

              <p className="mt-2 text-lg font-bold text-slate-900">
                {appointment.name}
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-5">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-400">
                <Phone size={17} />

                Phone Number
              </div>

              <p className="mt-2 text-lg font-bold text-slate-900">
                {appointment.phone}
              </p>
            </div>

          </div>
        </div>

        {/* Appointment Information */}

        <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm sm:p-8">

          <h2 className="text-xl font-extrabold text-slate-900">
            Appointment Information
          </h2>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">

            <div className="rounded-xl bg-slate-50 p-5">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-400">
                <Stethoscope size={17} />

                Department
              </div>

              <p className="mt-2 font-bold text-slate-900">
                {appointment.department}
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-5">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-400">
                <UserRound size={17} />

                Doctor
              </div>

              <p className="mt-2 font-bold text-slate-900">
                {appointment.doctor}
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 p-5">
              <div className="flex items-center gap-2 text-sm font-bold text-blue-500">
                <CalendarDays size={17} />

                Preferred Date
              </div>

              <p className="mt-2 font-bold text-blue-800">
                {appointment.date}
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 p-5">
              <div className="flex items-center gap-2 text-sm font-bold text-blue-500">
                <Clock3 size={17} />

                Preferred Time
              </div>

              <p className="mt-2 font-bold text-blue-800">
                {appointment.time}
              </p>
            </div>

          </div>
        </div>

        {/* Patient Message */}

        {appointment.message && (
          <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm sm:p-8">

            <div className="flex items-center gap-2">
              <MessageSquare
                size={20}
                className="text-blue-700"
              />

              <h2 className="text-xl font-extrabold text-slate-900">
                Patient Message
              </h2>
            </div>

            <p className="mt-5 rounded-xl bg-slate-50 p-5 leading-7 text-slate-600">
              {appointment.message}
            </p>

          </div>
        )}

      </div>
    </main>
  );
}