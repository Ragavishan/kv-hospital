"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Clock3,
  HeartPulse,
  Loader2,
  RefreshCw,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  X,
  XCircle,
  Zap,
  UserRound,
  Stethoscope,
  FileText,
  Save,
  History,
  CalendarCheck2,
} from "lucide-react";

interface MedicalRecord {
  reasonForVisit?: string;
  diagnosis?: string;
  treatment?: string;
  medicines?: string;
  tests?: string;
  finalResult?: string;
  doctorNotes?: string;
  followUpDate?: string;
  followUpInstructions?: string;
  updatedAt?: string;
}

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
  medicalRecord?: MedicalRecord;
}

interface TrendDay {
  date: Date;
  label: string;
  shortLabel: string;
  count: number;
}

interface MedicalRecordForm {
  reasonForVisit: string;
  diagnosis: string;
  treatment: string;
  medicines: string;
  tests: string;
  finalResult: string;
  doctorNotes: string;
  followUpDate: string;
  followUpInstructions: string;
}

const emptyMedicalRecord: MedicalRecordForm = {
  reasonForVisit: "",
  diagnosis: "",
  treatment: "",
  medicines: "",
  tests: "",
  finalResult: "",
  doctorNotes: "",
  followUpDate: "",
  followUpInstructions: "",
};

export default function AdminDashboardPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* ============================================================
     FILTER STATE
  ============================================================ */

  const [patientSearch, setPatientSearch] = useState("");
  const [doctorFilter, setDoctorFilter] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  /* ============================================================
     PATIENT HISTORY STATE
  ============================================================ */

  const [selectedPatientPhone, setSelectedPatientPhone] =
    useState<string | null>(null);

  const [selectedMedicalAppointment, setSelectedMedicalAppointment] =
    useState<Appointment | null>(null);

  const [medicalForm, setMedicalForm] =
    useState<MedicalRecordForm>(emptyMedicalRecord);

  const [savingMedicalRecord, setSavingMedicalRecord] =
    useState(false);

  const [medicalRecordMessage, setMedicalRecordMessage] =
    useState("");

  /* ============================================================
     FETCH
  ============================================================ */

  const fetchAppointments = useCallback(async () => {
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
      console.error(error);
      setError("Unable to load dashboard data.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void fetchAppointments();
    }, 0);

    return () => window.clearTimeout(timer);
  }, [fetchAppointments]);

  /* ============================================================
     DATE HELPERS
  ============================================================ */

  const parseAppointmentDate = (value: string) => {
    if (!value) return null;

    const trimmed = value.trim();

    const isoMatch = trimmed.match(
      /^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$/
    );

    if (isoMatch) {
      const [, year, month, day] = isoMatch;

      return new Date(
        Number(year),
        Number(month) - 1,
        Number(day)
      );
    }

    const indianMatch = trimmed.match(
      /^(\d{1,2})[-/](\d{1,2})[-/](\d{4})$/
    );

    if (indianMatch) {
      const [, day, month, year] = indianMatch;

      return new Date(
        Number(year),
        Number(month) - 1,
        Number(day)
      );
    }

    const parsed = new Date(trimmed);

    return Number.isNaN(parsed.getTime()) ? null : parsed;
  };

  const startOfDay = (date: Date) =>
    new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );

  const isSameDay = (a: Date, b: Date) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

  /* ============================================================
     BASIC ANALYTICS
  ============================================================ */

  const totalAppointments = appointments.length;

  const newAppointments = appointments.filter(
    (appointment) => (appointment.status || "New") === "New"
  ).length;

  const confirmedAppointments = appointments.filter(
    (appointment) => appointment.status === "Confirmed"
  ).length;

  const completedAppointments = appointments.filter(
    (appointment) => appointment.status === "Completed"
  ).length;

  const cancelledAppointments = appointments.filter(
    (appointment) => appointment.status === "Cancelled"
  ).length;

  const today = startOfDay(new Date());

  const todayAppointments = appointments.filter((appointment) => {
    const date = parseAppointmentDate(appointment.date);

    return date ? isSameDay(date, today) : false;
  }).length;

  const upcomingAppointments = appointments.filter((appointment) => {
    const date = parseAppointmentDate(appointment.date);

    if (!date) return false;

    const status = appointment.status || "New";

    return (
      startOfDay(date) >= today &&
      status !== "Completed" &&
      status !== "Cancelled"
    );
  }).length;

  const activeAppointments =
    newAppointments + confirmedAppointments;

  const completionRate =
    totalAppointments > 0
      ? Math.round(
          (completedAppointments / totalAppointments) * 100
        )
      : 0;

  const confirmationRate =
    totalAppointments > 0
      ? Math.round(
          (confirmedAppointments / totalAppointments) * 100
        )
      : 0;

  const cancellationRate =
    totalAppointments > 0
      ? Math.round(
          (cancelledAppointments / totalAppointments) * 100
        )
      : 0;

  /* ============================================================
     FILTER OPTIONS
  ============================================================ */

  const doctorOptions = useMemo(() => {
    return Array.from(
      new Set(
        appointments
          .map((appointment) => appointment.doctor?.trim())
          .filter(Boolean)
      )
    ).sort();
  }, [appointments]);

  const departmentOptions = useMemo(() => {
    return Array.from(
      new Set(
        appointments
          .map((appointment) => appointment.department?.trim())
          .filter(Boolean)
      )
    ).sort();
  }, [appointments]);

  /* ============================================================
     FILTERED APPOINTMENTS
  ============================================================ */

  const filteredAppointments = useMemo(() => {
    const search = patientSearch.trim().toLowerCase();

    return appointments.filter((appointment) => {
      const status = appointment.status || "New";

      const matchesPatient =
        !search ||
        appointment.name.toLowerCase().includes(search) ||
        appointment.phone.toLowerCase().includes(search);

      const matchesDoctor =
        !doctorFilter ||
        appointment.doctor === doctorFilter;

      const matchesDepartment =
        !departmentFilter ||
        appointment.department === departmentFilter;

      const matchesStatus =
        !statusFilter ||
        status === statusFilter;

      const appointmentDate =
        parseAppointmentDate(appointment.date);

      const matchesFromDate =
        !fromDate ||
        (appointmentDate &&
          appointmentDate >=
            new Date(`${fromDate}T00:00:00`));

      const matchesToDate =
        !toDate ||
        (appointmentDate &&
          appointmentDate <=
            new Date(`${toDate}T23:59:59`));

      return (
        matchesPatient &&
        matchesDoctor &&
        matchesDepartment &&
        matchesStatus &&
        matchesFromDate &&
        matchesToDate
      );
    });
  }, [
    appointments,
    patientSearch,
    doctorFilter,
    departmentFilter,
    statusFilter,
    fromDate,
    toDate,
  ]);

  const filtersActive =
    patientSearch ||
    doctorFilter ||
    departmentFilter ||
    statusFilter ||
    fromDate ||
    toDate;

  const clearFilters = () => {
    setPatientSearch("");
    setDoctorFilter("");
    setDepartmentFilter("");
    setStatusFilter("");
    setFromDate("");
    setToDate("");
  };

  /* ============================================================
     PATIENT GROUPS
  ============================================================ */

  const patientGroups = useMemo(() => {
    const groups = new Map<
      string,
      {
        name: string;
        phone: string;
        visits: Appointment[];
      }
    >();

    filteredAppointments.forEach((appointment) => {
      const phone = appointment.phone.trim();

      if (!groups.has(phone)) {
        groups.set(phone, {
          name: appointment.name,
          phone,
          visits: [],
        });
      }

      groups.get(phone)!.visits.push(appointment);
    });

    return Array.from(groups.values()).sort(
      (a, b) => b.visits.length - a.visits.length
    );
  }, [filteredAppointments]);

  const selectedPatient = useMemo(() => {
    if (!selectedPatientPhone) return null;

    const visits = appointments
      .filter(
        (appointment) =>
          appointment.phone.trim() ===
          selectedPatientPhone.trim()
      )
      .sort((a, b) => {
        const dateA =
          parseAppointmentDate(a.date)?.getTime() || 0;

        const dateB =
          parseAppointmentDate(b.date)?.getTime() || 0;

        return dateB - dateA;
      });

    if (visits.length === 0) return null;

    return {
      name: visits[0].name,
      phone: visits[0].phone,
      visits,
    };
  }, [appointments, selectedPatientPhone]);

  /* ============================================================
     MEDICAL RECORD EDITOR
  ============================================================ */

  const openMedicalRecord = (appointment: Appointment) => {
    setSelectedMedicalAppointment(appointment);

    setMedicalForm({
      reasonForVisit:
        appointment.medicalRecord?.reasonForVisit || "",
      diagnosis:
        appointment.medicalRecord?.diagnosis || "",
      treatment:
        appointment.medicalRecord?.treatment || "",
      medicines:
        appointment.medicalRecord?.medicines || "",
      tests:
        appointment.medicalRecord?.tests || "",
      finalResult:
        appointment.medicalRecord?.finalResult || "",
      doctorNotes:
        appointment.medicalRecord?.doctorNotes || "",
      followUpDate:
        appointment.medicalRecord?.followUpDate || "",
      followUpInstructions:
        appointment.medicalRecord?.followUpInstructions || "",
    });

    setMedicalRecordMessage("");
  };

  const closeMedicalRecord = () => {
    setSelectedMedicalAppointment(null);
    setMedicalRecordMessage("");
    setMedicalForm(emptyMedicalRecord);
  };

  const updateMedicalField = (
    field: keyof MedicalRecordForm,
    value: string
  ) => {
    setMedicalForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const saveMedicalRecord = async () => {
    if (!selectedMedicalAppointment) return;

    try {
      setSavingMedicalRecord(true);
      setMedicalRecordMessage("");

      const response = await fetch(
        `/api/appointments/${selectedMedicalAppointment._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            medicalRecord: medicalForm,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message ||
            "Unable to save medical record."
        );
      }

      setAppointments((previous) =>
        previous.map((appointment) =>
          appointment._id === selectedMedicalAppointment._id
            ? result.appointment
            : appointment
        )
      );

      setSelectedMedicalAppointment(result.appointment);

      setMedicalRecordMessage(
        "Medical record saved successfully."
      );
    } catch (error) {
      console.error(error);

      setMedicalRecordMessage(
        "Unable to save medical record. Please try again."
      );
    } finally {
      setSavingMedicalRecord(false);
    }
  };

  /* ============================================================
     7-DAY TREND
  ============================================================ */

  const trendData = useMemo<TrendDay[]>(() => {
    const result: TrendDay[] = [];

    for (let i = 6; i >= 0; i--) {
      const date = new Date();

      date.setHours(0, 0, 0, 0);
      date.setDate(date.getDate() - i);

      const count = appointments.filter((appointment) => {
        const appointmentDate =
          parseAppointmentDate(appointment.date);

        return appointmentDate
          ? isSameDay(appointmentDate, date)
          : false;
      }).length;

      result.push({
        date,
        label: date.toLocaleDateString("en-IN", {
          weekday: "long",
          day: "numeric",
          month: "short",
        }),
        shortLabel: date.toLocaleDateString("en-IN", {
          weekday: "short",
        }),
        count,
      });
    }

    return result;
  }, [appointments]);

  const maxTrendCount = Math.max(
    ...trendData.map((item) => item.count),
    1
  );

  const last7DaysCount = trendData.reduce(
    (sum, item) => sum + item.count,
    0
  );

  /* ============================================================
     DEPARTMENT ANALYTICS
  ============================================================ */

  const departmentStats = useMemo(() => {
    const counts: Record<string, number> = {};

    appointments.forEach((appointment) => {
      const department =
        appointment.department?.trim() || "General";

      counts[department] =
        (counts[department] || 0) + 1;
    });

    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
  }, [appointments]);

  const maxDepartmentCount = Math.max(
    ...departmentStats.map((item) => item[1]),
    1
  );

  /* ============================================================
     STATUS ANALYTICS
  ============================================================ */

  const statusData = [
    {
      label: "New",
      count: newAppointments,
      percentage:
        totalAppointments > 0
          ? Math.round(
              (newAppointments / totalAppointments) * 100
            )
          : 0,
      className: "bg-amber-400",
      textClass: "text-amber-600",
    },
    {
      label: "Confirmed",
      count: confirmedAppointments,
      percentage:
        totalAppointments > 0
          ? Math.round(
              (confirmedAppointments /
                totalAppointments) *
                100
            )
          : 0,
      className: "bg-emerald-500",
      textClass: "text-emerald-600",
    },
    {
      label: "Completed",
      count: completedAppointments,
      percentage:
        totalAppointments > 0
          ? Math.round(
              (completedAppointments /
                totalAppointments) *
                100
            )
          : 0,
      className: "bg-blue-600",
      textClass: "text-blue-600",
    },
    {
      label: "Cancelled",
      count: cancelledAppointments,
      percentage:
        totalAppointments > 0
          ? Math.round(
              (cancelledAppointments /
                totalAppointments) *
                100
            )
          : 0,
      className: "bg-red-500",
      textClass: "text-red-600",
    },
  ];

  /* ============================================================
     RECENT + TODAY
  ============================================================ */

  const recentAppointments = appointments.slice(0, 5);

  const todaySchedule = appointments
    .filter((appointment) => {
      const date = parseAppointmentDate(appointment.date);

      return date ? isSameDay(date, today) : false;
    })
    .slice(0, 4);

  /* ============================================================
     STATUS STYLE
  ============================================================ */

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Confirmed":
        return "bg-emerald-50 text-emerald-700 border-emerald-100";

      case "Completed":
        return "bg-blue-50 text-blue-700 border-blue-100";

      case "Cancelled":
        return "bg-red-50 text-red-700 border-red-100";

      default:
        return "bg-amber-50 text-amber-700 border-amber-100";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Confirmed":
        return <CheckCircle2 size={14} />;

      case "Completed":
        return <ShieldCheck size={14} />;

      case "Cancelled":
        return <XCircle size={14} />;

      default:
        return <Clock3 size={14} />;
    }
  };

  /* ============================================================
     RENDER
  ============================================================ */

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f8fc]">
      {/* ========================================================
          BACKGROUND
      ======================================================== */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute -bottom-40 left-[35%] h-[400px] w-[400px] rounded-full bg-cyan-100/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        {/* ======================================================
            PREMIUM HEADER
        ====================================================== */}

        <section className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-[#061a34] via-[#0b3157] to-[#08718a] p-6 shadow-[0_30px_80px_-30px_rgba(8,47,73,0.5)] sm:p-8 lg:p-10">
          <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full border border-white/10" />

          <div className="absolute -right-4 -top-8 h-48 w-48 rounded-full border border-white/10" />

          <div className="absolute bottom-[-120px] left-[42%] h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" />

          <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1.5 text-[10px] font-black tracking-wider text-emerald-300 backdrop-blur">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  ALL SYSTEMS OPERATIONAL
                </span>

                <span className="hidden text-xs text-white/30 sm:block">
                  •
                </span>

                <span className="hidden text-xs font-medium text-white/60 sm:block">
                  Hospital Administration
                </span>
              </div>

              <p className="flex items-center gap-2 text-sm font-bold text-cyan-300">
                <Sparkles size={18} />
                ISWARYA HOSPITAL
              </p>

              <h1 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                Admin Command Center
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/60 sm:text-base">
                Monitor appointments, patient activity, medical
                history and hospital operations through one
                intelligent dashboard.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={fetchAppointments}
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-5 py-3.5 text-sm font-bold text-white backdrop-blur-xl transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <Loader2
                    size={17}
                    className="animate-spin"
                  />
                ) : (
                  <RefreshCw size={17} />
                )}

                Refresh
              </button>

              <Link
                href="/admin/appointments"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-extrabold text-[#0b3156] shadow-xl transition hover:-translate-y-0.5 hover:bg-cyan-50"
              >
                <ClipboardList size={17} />
                Manage Appointments
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="relative z-10 mt-8 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-white/10 p-2.5 text-cyan-300">
                <Activity size={18} />
              </div>

              <div>
                <p className="text-[10px] font-bold text-white/40">
                  SYSTEM STATUS
                </p>

                <p className="text-sm font-bold text-white">
                  Live & Monitoring
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-white/10 p-2.5 text-emerald-300">
                <HeartPulse size={18} />
              </div>

              <div>
                <p className="text-[10px] font-bold text-white/40">
                  PATIENT CARE
                </p>

                <p className="text-sm font-bold text-white">
                  24 / 7 Available
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-white/10 p-2.5 text-violet-300">
                <ShieldCheck size={18} />
              </div>

              <div>
                <p className="text-[10px] font-bold text-white/40">
                  SECURITY
                </p>

                <p className="text-sm font-bold text-white">
                  Protected Admin Access
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================
            ERROR
        ====================================================== */}

        {error && (
          <div className="mt-6 flex flex-col justify-between gap-3 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-semibold text-red-700 sm:flex-row sm:items-center">
            <span>{error}</span>

            <button
              type="button"
              onClick={fetchAppointments}
              className="rounded-lg bg-red-100 px-3 py-2 text-xs font-bold hover:bg-red-200"
            >
              Try Again
            </button>
          </div>
        )}

        {/* ======================================================
            LOADING
        ====================================================== */}

        {loading ? (
          <section className="mt-6 rounded-[28px] border border-slate-200 bg-white p-16 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
              <Loader2
                size={30}
                className="animate-spin text-blue-700"
              />
            </div>

            <h2 className="mt-5 text-lg font-extrabold text-slate-900">
              Preparing your dashboard
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Fetching the latest hospital appointment data...
            </p>
          </section>
        ) : (
          <>
            {/* ==================================================
                KPI CARDS
            ================================================== */}

            <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
              {/* TOTAL */}
              <div className="group rounded-[24px] border border-slate-200/80 bg-white p-5 shadow-[0_10px_40px_-25px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-start justify-between">
                  <div className="rounded-2xl bg-blue-50 p-3.5 text-blue-700 transition group-hover:scale-105">
                    <ClipboardList size={21} />
                  </div>

                  <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-blue-700">
                    Total
                  </span>
                </div>

                <p className="mt-6 text-3xl font-black text-slate-900">
                  {totalAppointments}
                </p>

                <p className="mt-1 text-sm font-medium text-slate-500">
                  All requests
                </p>

                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-full rounded-full bg-blue-600" />
                </div>
              </div>

              {/* TODAY */}
              <div className="group rounded-[24px] border border-slate-200/80 bg-white p-5 shadow-[0_10px_40px_-25px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-start justify-between">
                  <div className="rounded-2xl bg-cyan-50 p-3.5 text-cyan-600 transition group-hover:scale-105">
                    <CalendarDays size={21} />
                  </div>

                  <span className="rounded-full bg-cyan-50 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-cyan-700">
                    Today
                  </span>
                </div>

                <p className="mt-6 text-3xl font-black text-slate-900">
                  {todayAppointments}
                </p>

                <p className="mt-1 text-sm font-medium text-slate-500">
                  Today&apos;s schedule
                </p>

                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-cyan-500 transition-all duration-700"
                    style={{
                      width: `${
                        totalAppointments
                          ? Math.min(
                              (todayAppointments /
                                totalAppointments) *
                                100,
                              100
                            )
                          : 0
                      }%`,
                    }}
                  />
                </div>
              </div>

              {/* NEW */}
              <div className="group rounded-[24px] border border-slate-200/80 bg-white p-5 shadow-[0_10px_40px_-25px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-start justify-between">
                  <div className="rounded-2xl bg-amber-50 p-3.5 text-amber-600 transition group-hover:scale-105">
                    <Clock3 size={21} />
                  </div>

                  <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-amber-700">
                    New
                  </span>
                </div>

                <p className="mt-6 text-3xl font-black text-slate-900">
                  {newAppointments}
                </p>

                <p className="mt-1 text-sm font-medium text-slate-500">
                  Awaiting review
                </p>

                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-amber-500 transition-all duration-700"
                    style={{
                      width: `${
                        totalAppointments
                          ? (newAppointments /
                              totalAppointments) *
                            100
                          : 0
                      }%`,
                    }}
                  />
                </div>
              </div>

              {/* CONFIRMED */}
              <div className="group rounded-[24px] border border-slate-200/80 bg-white p-5 shadow-[0_10px_40px_-25px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-start justify-between">
                  <div className="rounded-2xl bg-emerald-50 p-3.5 text-emerald-600 transition group-hover:scale-105">
                    <CheckCircle2 size={21} />
                  </div>

                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-emerald-700">
                    Confirmed
                  </span>
                </div>

                <p className="mt-6 text-3xl font-black text-slate-900">
                  {confirmedAppointments}
                </p>

                <p className="mt-1 text-sm font-medium text-slate-500">
                  Ready to proceed
                </p>

                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-emerald-500 transition-all duration-700"
                    style={{
                      width: `${confirmationRate}%`,
                    }}
                  />
                </div>
              </div>

              {/* UPCOMING */}
              <div className="group rounded-[24px] border border-slate-200/80 bg-white p-5 shadow-[0_10px_40px_-25px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-start justify-between">
                  <div className="rounded-2xl bg-violet-50 p-3.5 text-violet-600 transition group-hover:scale-105">
                    <TrendingUp size={21} />
                  </div>

                  <span className="rounded-full bg-violet-50 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-violet-700">
                    Upcoming
                  </span>
                </div>

                <p className="mt-6 text-3xl font-black text-slate-900">
                  {upcomingAppointments}
                </p>

                <p className="mt-1 text-sm font-medium text-slate-500">
                  Active upcoming
                </p>

                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-violet-500 transition-all duration-700"
                    style={{
                      width: `${
                        totalAppointments
                          ? Math.min(
                              (upcomingAppointments /
                                totalAppointments) *
                                100,
                              100
                            )
                          : 0
                      }%`,
                    }}
                  />
                </div>
              </div>

              {/* COMPLETION */}
              <div className="group rounded-[24px] border border-slate-200/80 bg-white p-5 shadow-[0_10px_40px_-25px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-start justify-between">
                  <div className="rounded-2xl bg-indigo-50 p-3.5 text-indigo-600 transition group-hover:scale-105">
                    <ShieldCheck size={21} />
                  </div>

                  <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-indigo-700">
                    Completion
                  </span>
                </div>

                <p className="mt-6 text-3xl font-black text-slate-900">
                  {completionRate}%
                </p>

                <p className="mt-1 text-sm font-medium text-slate-500">
                  Visit completion rate
                </p>

                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-indigo-500 transition-all duration-700"
                    style={{
                      width: `${completionRate}%`,
                    }}
                  />
                </div>
              </div>
            </section>

            {/* ==================================================
                PATIENT SEARCH + FILTER
            ================================================== */}

            <section className="mt-6 overflow-hidden rounded-[28px] border border-blue-100 bg-white shadow-[0_15px_60px_-35px_rgba(37,99,235,0.35)]">
              <div className="border-b border-slate-100 bg-gradient-to-r from-blue-50/80 via-white to-cyan-50/60 p-6 sm:p-7">
                <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-blue-600 p-2.5 text-white shadow-lg shadow-blue-200">
                        <History size={18} />
                      </div>

                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-600">
                          Patient Intelligence
                        </p>

                        <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-900">
                          Patient History & Filters
                        </h2>
                      </div>
                    </div>

                    <p className="mt-2 max-w-2xl text-sm text-slate-500">
                      Search patients and filter their visits by
                      doctor, department, status and appointment
                      date.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-100">
                    <Users
                      size={18}
                      className="text-blue-600"
                    />

                    <div>
                      <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                        Patients Found
                      </p>

                      <p className="text-lg font-black text-slate-900">
                        {patientGroups.length}
                      </p>
                    </div>
                  </div>
                </div>

                {/* FILTERS */}

                <div className="mt-7 grid gap-3 md:grid-cols-2 xl:grid-cols-6">
                  {/* SEARCH */}

                  <div className="relative xl:col-span-2">
                    <Search
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="text"
                      value={patientSearch}
                      onChange={(event) =>
                        setPatientSearch(event.target.value)
                      }
                      placeholder="Patient name or phone..."
                      className="h-12 w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 text-sm font-semibold text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                    />
                  </div>

                  {/* DOCTOR */}

                  <select
                    value={doctorFilter}
                    onChange={(event) =>
                      setDoctorFilter(event.target.value)
                    }
                    className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                  >
                    <option value="">All Doctors</option>

                    {doctorOptions.map((doctor) => (
                      <option key={doctor} value={doctor}>
                        {doctor}
                      </option>
                    ))}
                  </select>

                  {/* DEPARTMENT */}

                  <select
                    value={departmentFilter}
                    onChange={(event) =>
                      setDepartmentFilter(event.target.value)
                    }
                    className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                  >
                    <option value="">All Departments</option>

                    {departmentOptions.map((department) => (
                      <option
                        key={department}
                        value={department}
                      >
                        {department}
                      </option>
                    ))}
                  </select>

                  {/* STATUS */}

                  <select
                    value={statusFilter}
                    onChange={(event) =>
                      setStatusFilter(event.target.value)
                    }
                    className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                  >
                    <option value="">All Status</option>
                    <option value="New">New</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Completed">
                      Completed
                    </option>
                    <option value="Cancelled">
                      Cancelled
                    </option>
                  </select>

                  {/* CLEAR */}

                  <button
                    type="button"
                    onClick={clearFilters}
                    disabled={!filtersActive}
                    className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-black text-slate-600 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Clear Filters
                  </button>
                </div>

                {/* DATE FILTERS */}

                <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  <div>
                    <label className="mb-1.5 block text-[10px] font-black uppercase tracking-wider text-slate-400">
                      Appointment From
                    </label>

                    <input
                      type="date"
                      value={fromDate}
                      onChange={(event) =>
                        setFromDate(event.target.value)
                      }
                      className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-[10px] font-black uppercase tracking-wider text-slate-400">
                      Appointment To
                    </label>

                    <input
                      type="date"
                      value={toDate}
                      onChange={(event) =>
                        setToDate(event.target.value)
                      }
                      className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                    />
                  </div>

                  <div className="flex items-end">
                    <div className="flex h-11 w-full items-center gap-2 rounded-xl bg-slate-50 px-4">
                      <Search
                        size={15}
                        className="text-blue-600"
                      />

                      <span className="text-xs font-bold text-slate-500">
                        {filteredAppointments.length} visit
                        {filteredAppointments.length !== 1
                          ? "s"
                          : ""}{" "}
                        matched
                      </span>
                    </div>
                  </div>

                  <div className="flex items-end">
                    <div className="flex h-11 w-full items-center gap-2 rounded-xl bg-emerald-50 px-4">
                      <History
                        size={15}
                        className="text-emerald-600"
                      />

                      <span className="text-xs font-bold text-emerald-700">
                        History preserved
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* PATIENT RESULTS */}

              {patientGroups.length === 0 ? (
                <div className="p-12 text-center sm:p-16">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50">
                    <Search
                      size={28}
                      className="text-slate-300"
                    />
                  </div>

                  <p className="mt-5 font-extrabold text-slate-700">
                    No patient records found
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    Try changing the search or filter options.
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-slate-100">
                  {patientGroups.slice(0, 10).map((patient) => {
                    const latestVisit = patient.visits[0];

                    const completedVisits =
                      patient.visits.filter(
                        (visit) =>
                          visit.status === "Completed"
                      ).length;

                    return (
                      <div
                        key={patient.phone}
                        className="group flex flex-col gap-5 p-5 transition hover:bg-slate-50/70 sm:p-6 lg:flex-row lg:items-center lg:justify-between"
                      >
                        <div className="flex min-w-0 items-center gap-4">
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 text-lg font-black text-blue-700 ring-1 ring-blue-100">
                            {patient.name
                              .charAt(0)
                              .toUpperCase()}
                          </div>

                          <div className="min-w-0">
                            <h3 className="truncate text-base font-black text-slate-900">
                              {patient.name}
                            </h3>

                            <p className="mt-1 text-xs font-semibold text-slate-500">
                              {patient.phone}
                            </p>

                            <p className="mt-1 truncate text-xs font-medium text-slate-400">
                              {latestVisit.department}
                              {" • "}
                              {latestVisit.doctor}
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                          <div className="rounded-xl bg-slate-50 px-4 py-3">
                            <p className="text-[9px] font-black uppercase tracking-wider text-slate-400">
                              Visits
                            </p>

                            <p className="mt-1 text-lg font-black text-slate-900">
                              {patient.visits.length}
                            </p>
                          </div>

                          <div className="rounded-xl bg-blue-50 px-4 py-3">
                            <p className="text-[9px] font-black uppercase tracking-wider text-blue-500">
                              Completed
                            </p>

                            <p className="mt-1 text-lg font-black text-blue-800">
                              {completedVisits}
                            </p>
                          </div>

                          <div className="col-span-2 rounded-xl bg-slate-50 px-4 py-3 sm:col-span-1">
                            <p className="text-[9px] font-black uppercase tracking-wider text-slate-400">
                              Last Visit
                            </p>

                            <p className="mt-1 text-sm font-black text-slate-700">
                              {latestVisit.date}
                            </p>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            setSelectedPatientPhone(
                              patient.phone
                            )
                          }
                          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0b3157] px-5 py-3 text-sm font-black text-white shadow-lg shadow-blue-100 transition hover:-translate-y-0.5 hover:bg-blue-700"
                        >
                          <History size={16} />
                          View History
                          <ArrowRight size={15} />
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}

              {patientGroups.length > 10 && (
                <div className="border-t border-slate-100 bg-slate-50/50 px-6 py-4 text-center">
                  <p className="text-xs font-bold text-slate-500">
                    Showing first 10 patients. Use filters to
                    narrow the results.
                  </p>
                </div>
              )}
            </section>

            {/* ==================================================
                ANALYTICS
            ================================================== */}

            <section className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_0.9fr]">
              {/* TREND */}

              <div className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_10px_50px_-30px_rgba(15,23,42,0.3)] sm:p-7">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="rounded-xl bg-blue-50 p-2.5 text-blue-700">
                        <Activity size={18} />
                      </div>

                      <span className="text-xs font-black uppercase tracking-[0.15em] text-blue-700">
                        Analytics
                      </span>
                    </div>

                    <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-900">
                      Appointment Trend
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Appointment activity over the last 7 days.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-blue-50 px-4 py-3">
                    <p className="text-[10px] font-black uppercase tracking-wider text-blue-500">
                      7 Day Total
                    </p>

                    <p className="mt-1 text-xl font-black text-blue-800">
                      {last7DaysCount}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex h-[250px] items-end gap-2 sm:gap-4">
                  {trendData.map((item, index) => {
                    const height =
                      item.count > 0
                        ? Math.max(
                            (item.count /
                              maxTrendCount) *
                              100,
                            8
                          )
                        : 3;

                    const isToday = index === 6;

                    return (
                      <div
                        key={item.label}
                        className="group flex h-full flex-1 flex-col justify-end"
                      >
                        <div className="relative flex flex-1 items-end justify-center">
                          <div className="pointer-events-none absolute bottom-[calc(100%-20px)] left-1/2 z-20 -translate-x-1/2 translate-y-2 scale-95 rounded-xl bg-slate-900 px-3 py-2 text-center opacity-0 shadow-xl transition duration-200 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
                            <p className="whitespace-nowrap text-[10px] font-semibold text-white/60">
                              {item.label}
                            </p>

                            <p className="mt-0.5 text-sm font-black text-white">
                              {item.count} appointment
                              {item.count !== 1 ? "s" : ""}
                            </p>
                          </div>

                          <div
                            className={`w-full max-w-[54px] rounded-t-2xl transition-all duration-700 group-hover:-translate-y-1 ${
                              isToday
                                ? "bg-gradient-to-t from-blue-700 to-cyan-400 shadow-lg shadow-blue-200"
                                : "bg-gradient-to-t from-slate-200 to-blue-200"
                            }`}
                            style={{
                              height: `${height}%`,
                            }}
                          />
                        </div>

                        <div className="mt-3 text-center">
                          <p
                            className={`text-[11px] font-black ${
                              isToday
                                ? "text-blue-700"
                                : "text-slate-400"
                            }`}
                          >
                            {item.shortLabel}
                          </p>

                          <p className="mt-1 text-xs font-bold text-slate-700">
                            {item.count}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* STATUS */}

              <div className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_10px_50px_-30px_rgba(15,23,42,0.3)] sm:p-7">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-emerald-50 p-2.5 text-emerald-600">
                    <Activity size={18} />
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-600">
                      Live Analytics
                    </p>

                    <h2 className="mt-1 text-xl font-black text-slate-900">
                      Status Overview
                    </h2>
                  </div>
                </div>

                <div className="mt-7 flex items-center justify-center">
                  <div className="relative h-48 w-48">
                    <svg
                      viewBox="0 0 100 100"
                      className="h-full w-full -rotate-90"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="38"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="12"
                        className="text-slate-100"
                      />

                      {totalAppointments > 0 && (
                        <>
                          <circle
                            cx="50"
                            cy="50"
                            r="38"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="12"
                            strokeDasharray={`${
                              (newAppointments /
                                totalAppointments) *
                              238.76
                            } 238.76`}
                            className="text-amber-400"
                          />

                          <circle
                            cx="50"
                            cy="50"
                            r="38"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="12"
                            strokeDasharray={`${
                              (confirmedAppointments /
                                totalAppointments) *
                              238.76
                            } 238.76`}
                            strokeDashoffset={`-${
                              (newAppointments /
                                totalAppointments) *
                              238.76
                            }`}
                            className="text-emerald-500"
                          />

                          <circle
                            cx="50"
                            cy="50"
                            r="38"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="12"
                            strokeDasharray={`${
                              (completedAppointments /
                                totalAppointments) *
                              238.76
                            } 238.76`}
                            strokeDashoffset={`-${
                              ((newAppointments +
                                confirmedAppointments) /
                                totalAppointments) *
                              238.76
                            }`}
                            className="text-blue-600"
                          />

                          <circle
                            cx="50"
                            cy="50"
                            r="38"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="12"
                            strokeDasharray={`${
                              (cancelledAppointments /
                                totalAppointments) *
                              238.76
                            } 238.76`}
                            strokeDashoffset={`-${
                              ((newAppointments +
                                confirmedAppointments +
                                completedAppointments) /
                                totalAppointments) *
                              238.76
                            }`}
                            className="text-red-500"
                          />
                        </>
                      )}
                    </svg>

                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <p className="text-4xl font-black text-slate-900">
                        {totalAppointments}
                      </p>

                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Total
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {statusData.map((status) => (
                    <div
                      key={status.label}
                      className="rounded-2xl bg-slate-50 p-3"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`h-2.5 w-2.5 rounded-full ${status.className}`}
                        />

                        <span className="text-xs font-bold text-slate-500">
                          {status.label}
                        </span>
                      </div>

                      <div className="mt-1 flex items-end justify-between">
                        <p className="text-lg font-black text-slate-900">
                          {status.count}
                        </p>

                        <p
                          className={`text-[10px] font-black ${status.textClass}`}
                        >
                          {status.percentage}%
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ==================================================
                PERFORMANCE + EMERGENCY
            ================================================== */}

            <section className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_10px_50px_-30px_rgba(15,23,42,0.3)] sm:p-7">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-violet-50 p-2.5 text-violet-600">
                    <TrendingUp size={18} />
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-violet-600">
                      Performance
                    </p>

                    <h2 className="mt-1 text-xl font-black text-slate-900">
                      Operational Overview
                    </h2>
                  </div>
                </div>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl bg-slate-50 p-5">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Confirmation
                      </p>

                      <CheckCircle2
                        size={17}
                        className="text-emerald-500"
                      />
                    </div>

                    <p className="mt-3 text-3xl font-black text-slate-900">
                      {confirmationRate}%
                    </p>

                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
                      <div
                        className="h-full rounded-full bg-emerald-500"
                        style={{
                          width: `${confirmationRate}%`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-5">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Completion
                      </p>

                      <ShieldCheck
                        size={17}
                        className="text-blue-500"
                      />
                    </div>

                    <p className="mt-3 text-3xl font-black text-slate-900">
                      {completionRate}%
                    </p>

                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
                      <div
                        className="h-full rounded-full bg-blue-500"
                        style={{
                          width: `${completionRate}%`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-5">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Cancellation
                      </p>

                      <XCircle
                        size={17}
                        className="text-red-500"
                      />
                    </div>

                    <p className="mt-3 text-3xl font-black text-slate-900">
                      {cancellationRate}%
                    </p>

                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
                      <div
                        className="h-full rounded-full bg-red-500"
                        style={{
                          width: `${cancellationRate}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex flex-col justify-between gap-4 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 p-5 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-white p-2.5 text-blue-700 shadow-sm">
                      <Users size={18} />
                    </div>

                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-blue-500">
                        Active Workload
                      </p>

                      <p className="mt-1 text-sm font-bold text-slate-800">
                        {activeAppointments} appointment
                        {activeAppointments !== 1
                          ? "s"
                          : ""}{" "}
                        currently requiring attention
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/admin/appointments"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-black text-blue-700 shadow-sm transition hover:bg-blue-700 hover:text-white"
                  >
                    Review
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* EMERGENCY */}

              <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#77101f] via-[#b91c32] to-[#e33d4e] p-7 text-white shadow-[0_25px_60px_-25px_rgba(185,28,50,0.55)]">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10" />

                <div className="absolute -bottom-20 -left-12 h-52 w-52 rounded-full bg-black/10 blur-2xl" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                      <HeartPulse
                        size={27}
                        className="animate-pulse"
                      />
                    </div>

                    <span className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                      Priority
                    </span>
                  </div>

                  <p className="mt-7 text-xs font-black uppercase tracking-[0.18em] text-red-100">
                    Emergency Care
                  </p>

                  <h2 className="mt-2 text-3xl font-black">
                    24 / 7 Emergency
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-white/75">
                    Immediate medical assistance is available
                    around the clock at Iswarya Hospital.
                  </p>

                  <div className="mt-7 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-black/10 p-4 backdrop-blur">
                      <p className="text-xs font-semibold text-white/50">
                        RESPONSE
                      </p>

                      <p className="mt-1 text-xl font-black">
                        24 / 7
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/10 p-4 backdrop-blur">
                      <p className="text-xs font-semibold text-white/50">
                        STATUS
                      </p>

                      <p className="mt-1 flex items-center gap-2 text-xl font-black">
                        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-300" />
                        Active
                      </p>
                    </div>
                  </div>

                  <a
                    href="tel:+917502710333"
                    className="mt-5 flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-black text-red-700 transition hover:-translate-y-0.5 hover:bg-red-50"
                  >
                    <Zap size={17} />
                    Emergency Contact
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </section>

            {/* ==================================================
                RECENT + DEPARTMENT
            ================================================== */}

            <section className="mt-6 grid gap-6 xl:grid-cols-[1.45fr_0.75fr]">
              <div className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_10px_50px_-30px_rgba(15,23,42,0.3)]">
                <div className="flex flex-col justify-between gap-4 border-b border-slate-100 p-6 sm:flex-row sm:items-center sm:p-7">
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="rounded-xl bg-blue-50 p-2 text-blue-700">
                        <CalendarDays size={17} />
                      </div>

                      <span className="text-xs font-black uppercase tracking-[0.15em] text-blue-700">
                        Latest Activity
                      </span>
                    </div>

                    <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900">
                      Recent Appointments
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Latest appointment requests received by
                      the hospital.
                    </p>
                  </div>

                  <Link
                    href="/admin/appointments"
                    className="inline-flex items-center gap-2 self-start rounded-xl bg-slate-50 px-4 py-2.5 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
                  >
                    View All
                    <ChevronRight size={16} />
                  </Link>
                </div>

                {recentAppointments.length === 0 ? (
                  <div className="p-12 text-center sm:p-16">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50">
                      <ClipboardList
                        size={28}
                        className="text-slate-300"
                      />
                    </div>

                    <p className="mt-5 font-extrabold text-slate-700">
                      No appointments yet
                    </p>
                  </div>
                ) : (
                  <div className="divide-y divide-slate-100">
                    {recentAppointments.map(
                      (appointment, index) => {
                        const status =
                          appointment.status || "New";

                        return (
                          <div
                            key={appointment._id}
                            className="group flex flex-col gap-4 p-5 transition hover:bg-slate-50/80 sm:flex-row sm:items-center sm:justify-between sm:p-6"
                          >
                            <div className="flex min-w-0 items-center gap-4">
                              <div className="relative">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 font-black text-blue-700 ring-1 ring-blue-100">
                                  {appointment.name
                                    .charAt(0)
                                    .toUpperCase()}
                                </div>

                                {index === 0 && (
                                  <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
                                )}
                              </div>

                              <div className="min-w-0">
                                <h3 className="truncate font-extrabold text-slate-900">
                                  {appointment.name}
                                </h3>

                                <p className="mt-1 truncate text-xs font-medium text-slate-500">
                                  {appointment.department}
                                  {" • "}
                                  {appointment.doctor}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-3 text-sm">
                              <div className="rounded-xl bg-slate-50 p-2.5 text-blue-600">
                                <CalendarDays size={17} />
                              </div>

                              <div>
                                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                  Appointment
                                </p>

                                <p className="mt-0.5 font-bold text-slate-700">
                                  {appointment.date}

                                  <span className="mx-1.5 text-slate-300">
                                    •
                                  </span>

                                  {appointment.time}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center justify-between gap-4 sm:justify-end">
                              <span
                                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-black ${getStatusStyle(
                                  status
                                )}`}
                              >
                                {getStatusIcon(status)}
                                {status}
                              </span>

                              <Link
                                href={`/admin/appointments/${appointment._id}`}
                                className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 text-slate-500 transition group-hover:bg-blue-50 group-hover:text-blue-700"
                              >
                                <ArrowRight size={16} />
                              </Link>
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                )}
              </div>

              {/* DEPARTMENT */}

              <div className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_10px_50px_-30px_rgba(15,23,42,0.3)] sm:p-7">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-violet-50 p-2.5 text-violet-600">
                    <Users size={18} />
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-violet-600">
                      Analytics
                    </p>

                    <h2 className="mt-1 text-xl font-black text-slate-900">
                      Department Activity
                    </h2>
                  </div>
                </div>

                {departmentStats.length === 0 ? (
                  <div className="mt-8 rounded-2xl bg-slate-50 p-8 text-center">
                    <p className="text-sm font-semibold text-slate-500">
                      Department activity will appear here.
                    </p>
                  </div>
                ) : (
                  <div className="mt-7 space-y-5">
                    {departmentStats.map(
                      ([department, count], index) => {
                        const percentage =
                          totalAppointments > 0
                            ? Math.round(
                                (count /
                                  totalAppointments) *
                                  100
                              )
                            : 0;

                        const barWidth =
                          (count / maxDepartmentCount) *
                          100;

                        return (
                          <div key={department}>
                            <div className="flex items-center justify-between gap-3">
                              <div className="flex min-w-0 items-center gap-3">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-xs font-black text-slate-500">
                                  {String(
                                    index + 1
                                  ).padStart(2, "0")}
                                </span>

                                <p className="truncate text-sm font-bold text-slate-700">
                                  {department}
                                </p>
                              </div>

                              <span className="text-sm font-black text-slate-900">
                                {count}
                              </span>
                            </div>

                            <div className="ml-11 mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"
                                style={{
                                  width: `${Math.max(
                                    barWidth,
                                    5
                                  )}%`,
                                }}
                              />
                            </div>

                            <p className="ml-11 mt-1 text-[10px] font-bold text-slate-400">
                              {percentage}% of all appointments
                            </p>
                          </div>
                        );
                      }
                    )}
                  </div>
                )}

                <div className="mt-8 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/70 p-5">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-white p-2.5 text-blue-700 shadow-sm">
                      <Zap size={17} />
                    </div>

                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-slate-400">
                        Quick Insight
                      </p>

                      <p className="mt-1 text-sm font-bold text-slate-800">
                        {newAppointments > 0
                          ? `${newAppointments} appointment${
                              newAppointments > 1
                                ? "s"
                                : ""
                            } waiting for review`
                          : "All appointment requests are reviewed"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ==================================================
                TODAY
            ================================================== */}

            <section className="mt-6 rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_10px_50px_-30px_rgba(15,23,42,0.3)] sm:p-7">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="rounded-xl bg-cyan-50 p-2.5 text-cyan-600">
                      <CalendarDays size={18} />
                    </div>

                    <span className="text-xs font-black uppercase tracking-[0.15em] text-cyan-600">
                      Daily Operations
                    </span>
                  </div>

                  <h2 className="mt-2 text-xl font-black text-slate-900">
                    Today&apos;s Schedule
                  </h2>
                </div>

                <div className="rounded-full bg-slate-50 px-4 py-2 text-xs font-bold text-slate-500">
                  {todayAppointments} appointment
                  {todayAppointments !== 1 ? "s" : ""} today
                </div>
              </div>

              {todaySchedule.length === 0 ? (
                <div className="mt-6 rounded-2xl border border-dashed border-slate-200 bg-slate-50/60 p-8 text-center">
                  <CalendarDays
                    size={28}
                    className="mx-auto text-slate-300"
                  />

                  <p className="mt-3 text-sm font-bold text-slate-600">
                    No appointments scheduled for today.
                  </p>
                </div>
              ) : (
                <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {todaySchedule.map((appointment) => {
                    const status =
                      appointment.status || "New";

                    return (
                      <Link
                        key={appointment._id}
                        href={`/admin/appointments/${appointment._id}`}
                        className="group rounded-2xl border border-slate-100 bg-slate-50/70 p-4 transition hover:-translate-y-1 hover:border-blue-100 hover:bg-blue-50/40"
                      >
                        <div className="flex items-center justify-between">
                          <span className="rounded-xl bg-white px-3 py-2 text-sm font-black text-blue-700 shadow-sm">
                            {appointment.time}
                          </span>

                          <ArrowRight
                            size={16}
                            className="text-slate-300 transition group-hover:text-blue-600"
                          />
                        </div>

                        <p className="mt-4 truncate text-sm font-black text-slate-900">
                          {appointment.name}
                        </p>

                        <p className="mt-1 truncate text-xs font-medium text-slate-500">
                          {appointment.department}
                        </p>

                        <span
                          className={`mt-3 inline-flex rounded-full border px-2.5 py-1 text-[10px] font-black ${getStatusStyle(
                            status
                          )}`}
                        >
                          {status}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </section>

            {/* ==================================================
                FOOTER STATUS
            ================================================== */}

            <div className="mt-6 flex flex-col items-center justify-between gap-3 rounded-2xl border border-slate-200/70 bg-white/70 px-5 py-4 text-center backdrop-blur sm:flex-row sm:text-left">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />

                <span className="text-xs font-bold text-slate-500">
                  Dashboard connected to live appointment data
                </span>
              </div>

              <p className="text-xs font-semibold text-slate-400">
                Iswarya Hospital • Admin Console
              </p>
            </div>
          </>
        )}
      </div>

      {/* ========================================================
          PATIENT HISTORY MODAL
      ======================================================== */}

      {selectedPatient && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-3 backdrop-blur-sm sm:p-6">
          <div className="flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-[30px] bg-[#f7faff] shadow-2xl">
            {/* MODAL HEADER */}

            <div className="relative overflow-hidden bg-gradient-to-br from-[#061a34] via-[#0b3157] to-[#08718a] px-6 py-6 text-white sm:px-8">
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full border border-white/10" />

              <div className="relative z-10 flex items-start justify-between gap-5">
                <div className="flex min-w-0 items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-xl font-black backdrop-blur">
                    {selectedPatient.name
                      .charAt(0)
                      .toUpperCase()}
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-cyan-300">
                      Patient History
                    </p>

                    <h2 className="mt-1 truncate text-2xl font-black">
                      {selectedPatient.name}
                    </h2>

                    <p className="mt-1 text-sm font-semibold text-white/60">
                      {selectedPatient.phone}
                      {" • "}
                      {selectedPatient.visits.length} visit
                      {selectedPatient.visits.length !== 1
                        ? "s"
                        : ""}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setSelectedPatientPhone(null)
                  }
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white transition hover:bg-white/20"
                >
                  <X size={19} />
                </button>
              </div>
            </div>

            {/* HISTORY BODY */}

            <div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-7">
              <div className="mb-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-blue-100 bg-white p-4">
                  <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                    Total Visits
                  </p>

                  <p className="mt-1 text-2xl font-black text-blue-700">
                    {selectedPatient.visits.length}
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-100 bg-white p-4">
                  <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                    Completed Visits
                  </p>

                  <p className="mt-1 text-2xl font-black text-emerald-600">
                    {
                      selectedPatient.visits.filter(
                        (visit) =>
                          visit.status === "Completed"
                      ).length
                    }
                  </p>
                </div>

                <div className="rounded-2xl border border-violet-100 bg-white p-4">
                  <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                    Latest Appointment
                  </p>

                  <p className="mt-1 text-lg font-black text-violet-700">
                    {selectedPatient.visits[0]?.date}
                  </p>
                </div>
              </div>

              {/* TIMELINE */}

              <div className="space-y-5">
                {selectedPatient.visits.map(
                  (appointment, index) => {
                    const status =
                      appointment.status || "New";

                    const medical =
                      appointment.medicalRecord;

                    return (
                      <div
                        key={appointment._id}
                        className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm"
                      >
                        {/* VISIT HEADER */}

                        <div className="border-b border-slate-100 bg-slate-50/70 p-5 sm:p-6">
                          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
                            <div className="flex items-start gap-4">
                              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-sm font-black text-white shadow-lg shadow-blue-100">
                                {selectedPatient.visits.length -
                                  index}
                              </div>

                              <div>
                                <div className="flex flex-wrap items-center gap-2">
                                  <h3 className="text-lg font-black text-slate-900">
                                    Visit #
                                    {selectedPatient.visits.length -
                                      index}
                                  </h3>

                                  <span
                                    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-black ${getStatusStyle(
                                      status
                                    )}`}
                                  >
                                    {getStatusIcon(status)}
                                    {status}
                                  </span>
                                </div>

                                <p className="mt-1 text-xs font-semibold text-slate-500">
                                  {appointment.department}
                                  {" • "}
                                  {appointment.doctor}
                                </p>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                              <div className="rounded-xl bg-white px-3 py-2 ring-1 ring-slate-100">
                                <p className="text-[9px] font-black uppercase tracking-wider text-slate-400">
                                  Appointment
                                </p>

                                <p className="mt-1 text-xs font-black text-slate-700">
                                  {appointment.date}
                                </p>
                              </div>

                              <div className="rounded-xl bg-white px-3 py-2 ring-1 ring-slate-100">
                                <p className="text-[9px] font-black uppercase tracking-wider text-slate-400">
                                  Time
                                </p>

                                <p className="mt-1 text-xs font-black text-slate-700">
                                  {appointment.time}
                                </p>
                              </div>

                              <div className="col-span-2 rounded-xl bg-white px-3 py-2 ring-1 ring-slate-100 sm:col-span-1">
                                <p className="text-[9px] font-black uppercase tracking-wider text-slate-400">
                                  Booked On
                                </p>

                                <p className="mt-1 text-xs font-black text-slate-700">
                                  {appointment.createdAt
                                    ? new Date(
                                        appointment.createdAt
                                      ).toLocaleDateString(
                                        "en-IN"
                                      )
                                    : "—"}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* VISIT CONTENT */}

                        <div className="p-5 sm:p-6">
                          {!medical ||
                          !(
                            medical.reasonForVisit ||
                            medical.diagnosis ||
                            medical.treatment ||
                            medical.medicines ||
                            medical.tests ||
                            medical.finalResult ||
                            medical.doctorNotes ||
                            medical.followUpDate ||
                            medical.followUpInstructions
                          ) ? (
                            <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/60 p-6 text-center">
                              <FileText
                                size={28}
                                className="mx-auto text-slate-300"
                              />

                              <p className="mt-3 text-sm font-black text-slate-600">
                                Medical record not added yet
                              </p>

                              <p className="mt-1 text-xs text-slate-400">
                                Add the treatment details after
                                completing the visit.
                              </p>
                            </div>
                          ) : (
                            <div className="grid gap-3 sm:grid-cols-2">
                              {medical.reasonForVisit && (
                                <div className="rounded-2xl bg-slate-50 p-4">
                                  <p className="text-[10px] font-black uppercase tracking-wider text-blue-500">
                                    Reason for Visit
                                  </p>

                                  <p className="mt-2 whitespace-pre-wrap text-sm font-semibold leading-6 text-slate-700">
                                    {medical.reasonForVisit}
                                  </p>
                                </div>
                              )}

                              {medical.diagnosis && (
                                <div className="rounded-2xl bg-slate-50 p-4">
                                  <p className="text-[10px] font-black uppercase tracking-wider text-violet-500">
                                    Diagnosis
                                  </p>

                                  <p className="mt-2 whitespace-pre-wrap text-sm font-semibold leading-6 text-slate-700">
                                    {medical.diagnosis}
                                  </p>
                                </div>
                              )}

                              {medical.treatment && (
                                <div className="rounded-2xl bg-blue-50/70 p-4">
                                  <p className="text-[10px] font-black uppercase tracking-wider text-blue-600">
                                    Treatment Given
                                  </p>

                                  <p className="mt-2 whitespace-pre-wrap text-sm font-semibold leading-6 text-slate-700">
                                    {medical.treatment}
                                  </p>
                                </div>
                              )}

                              {medical.medicines && (
                                <div className="rounded-2xl bg-emerald-50/70 p-4">
                                  <p className="text-[10px] font-black uppercase tracking-wider text-emerald-600">
                                    Medicines
                                  </p>

                                  <p className="mt-2 whitespace-pre-wrap text-sm font-semibold leading-6 text-slate-700">
                                    {medical.medicines}
                                  </p>
                                </div>
                              )}

                              {medical.tests && (
                                <div className="rounded-2xl bg-amber-50/70 p-4">
                                  <p className="text-[10px] font-black uppercase tracking-wider text-amber-600">
                                    Tests / Investigation
                                  </p>

                                  <p className="mt-2 whitespace-pre-wrap text-sm font-semibold leading-6 text-slate-700">
                                    {medical.tests}
                                  </p>
                                </div>
                              )}

                              {medical.finalResult && (
                                <div className="rounded-2xl bg-cyan-50/70 p-4">
                                  <p className="text-[10px] font-black uppercase tracking-wider text-cyan-600">
                                    Final Result
                                  </p>

                                  <p className="mt-2 whitespace-pre-wrap text-sm font-semibold leading-6 text-slate-700">
                                    {medical.finalResult}
                                  </p>
                                </div>
                              )}

                              {medical.doctorNotes && (
                                <div className="rounded-2xl bg-slate-50 p-4 sm:col-span-2">
                                  <p className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                                    Doctor Notes
                                  </p>

                                  <p className="mt-2 whitespace-pre-wrap text-sm font-semibold leading-6 text-slate-700">
                                    {medical.doctorNotes}
                                  </p>
                                </div>
                              )}

                              {medical.followUpDate && (
                                <div className="rounded-2xl bg-violet-50/70 p-4">
                                  <p className="text-[10px] font-black uppercase tracking-wider text-violet-600">
                                    Follow-up Date
                                  </p>

                                  <p className="mt-2 flex items-center gap-2 text-sm font-black text-slate-700">
                                    <CalendarCheck2
                                      size={16}
                                      className="text-violet-600"
                                    />
                                    {medical.followUpDate}
                                  </p>
                                </div>
                              )}

                              {medical.followUpInstructions && (
                                <div className="rounded-2xl bg-violet-50/70 p-4">
                                  <p className="text-[10px] font-black uppercase tracking-wider text-violet-600">
                                    Follow-up Instructions
                                  </p>

                                  <p className="mt-2 whitespace-pre-wrap text-sm font-semibold leading-6 text-slate-700">
                                    {
                                      medical.followUpInstructions
                                    }
                                  </p>
                                </div>
                              )}
                            </div>
                          )}

                          {/* VISIT ACTION */}

                          <div className="mt-5 flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                              <Stethoscope size={15} />
                              {appointment.doctor}
                            </div>

                            <div className="flex flex-wrap gap-2">
                              {status === "Completed" && (
                                <button
                                  type="button"
                                  onClick={() =>
                                    openMedicalRecord(
                                      appointment
                                    )
                                  }
                                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-black text-white shadow-lg shadow-blue-100 transition hover:bg-blue-700"
                                >
                                  <FileText size={14} />
                                  {medical
                                    ? "Edit Medical Record"
                                    : "Add Medical Record"}
                                </button>
                              )}

                              <Link
                                href={`/admin/appointments/${appointment._id}`}
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 px-4 py-2.5 text-xs font-black text-slate-600 transition hover:bg-slate-200"
                              >
                                View Appointment
                                <ArrowRight size={14} />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          MEDICAL RECORD MODAL
      ======================================================== */}

      {selectedMedicalAppointment && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/70 p-3 backdrop-blur-sm sm:p-6">
          <div className="flex max-h-[94vh] w-full max-w-4xl flex-col overflow-hidden rounded-[30px] bg-white shadow-2xl">
            {/* HEADER */}

            <div className="flex items-center justify-between gap-4 border-b border-slate-100 bg-gradient-to-r from-blue-50 to-cyan-50 px-5 py-5 sm:px-7">
              <div className="flex min-w-0 items-center gap-3">
                <div className="rounded-xl bg-blue-600 p-2.5 text-white">
                  <FileText size={18} />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-black uppercase tracking-[0.15em] text-blue-600">
                    Medical Record
                  </p>

                  <h2 className="truncate text-xl font-black text-slate-900">
                    {selectedMedicalAppointment.name}
                  </h2>

                  <p className="truncate text-xs font-semibold text-slate-500">
                    {selectedMedicalAppointment.doctor}
                    {" • "}
                    {selectedMedicalAppointment.date}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={closeMedicalRecord}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-slate-500 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50"
              >
                <X size={19} />
              </button>
            </div>

            {/* FORM */}

            <div className="min-h-0 flex-1 overflow-y-auto p-5 sm:p-7">
              <div className="mb-6 rounded-2xl border border-blue-100 bg-blue-50/60 p-4">
                <div className="flex items-start gap-3">
                  <UserRound
                    size={18}
                    className="mt-0.5 text-blue-600"
                  />

                  <div>
                    <p className="text-xs font-black text-blue-800">
                      Visit Information
                    </p>

                    <p className="mt-1 text-xs leading-5 text-blue-700/70">
                      Appointment booked on{" "}
                      {selectedMedicalAppointment.createdAt
                        ? new Date(
                            selectedMedicalAppointment.createdAt
                          ).toLocaleString("en-IN")
                        : "—"}
                      {" • "}
                      Visit scheduled for{" "}
                      {selectedMedicalAppointment.date} at{" "}
                      {selectedMedicalAppointment.time}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {/* REASON */}

                <div>
                  <label className="mb-2 block text-xs font-black uppercase tracking-wider text-slate-500">
                    Reason for Visit
                  </label>

                  <textarea
                    value={medicalForm.reasonForVisit}
                    onChange={(event) =>
                      updateMedicalField(
                        "reasonForVisit",
                        event.target.value
                      )
                    }
                    rows={4}
                    placeholder="Why did the patient come?"
                    className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50/60 p-4 text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
                  />
                </div>

                {/* DIAGNOSIS */}

                <div>
                  <label className="mb-2 block text-xs font-black uppercase tracking-wider text-slate-500">
                    Diagnosis
                  </label>

                  <textarea
                    value={medicalForm.diagnosis}
                    onChange={(event) =>
                      updateMedicalField(
                        "diagnosis",
                        event.target.value
                      )
                    }
                    rows={4}
                    placeholder="Enter diagnosis..."
                    className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50/60 p-4 text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
                  />
                </div>

                {/* TREATMENT */}

                <div>
                  <label className="mb-2 block text-xs font-black uppercase tracking-wider text-slate-500">
                    Treatment Given
                  </label>

                  <textarea
                    value={medicalForm.treatment}
                    onChange={(event) =>
                      updateMedicalField(
                        "treatment",
                        event.target.value
                      )
                    }
                    rows={4}
                    placeholder="What treatment was provided?"
                    className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50/60 p-4 text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
                  />
                </div>

                {/* MEDICINES */}

                <div>
                  <label className="mb-2 block text-xs font-black uppercase tracking-wider text-slate-500">
                    Medicines / Prescription
                  </label>

                  <textarea
                    value={medicalForm.medicines}
                    onChange={(event) =>
                      updateMedicalField(
                        "medicines",
                        event.target.value
                      )
                    }
                    rows={4}
                    placeholder="Medicine name, dosage, duration..."
                    className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50/60 p-4 text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
                  />
                </div>

                {/* TESTS */}

                <div>
                  <label className="mb-2 block text-xs font-black uppercase tracking-wider text-slate-500">
                    Tests / Investigation
                  </label>

                  <textarea
                    value={medicalForm.tests}
                    onChange={(event) =>
                      updateMedicalField(
                        "tests",
                        event.target.value
                      )
                    }
                    rows={4}
                    placeholder="Blood test, scan, X-ray, etc..."
                    className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50/60 p-4 text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
                  />
                </div>

                {/* FINAL RESULT */}

                <div>
                  <label className="mb-2 block text-xs font-black uppercase tracking-wider text-slate-500">
                    Final Result / Outcome
                  </label>

                  <textarea
                    value={medicalForm.finalResult}
                    onChange={(event) =>
                      updateMedicalField(
                        "finalResult",
                        event.target.value
                      )
                    }
                    rows={4}
                    placeholder="Final treatment result / patient outcome..."
                    className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50/60 p-4 text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
                  />
                </div>

                {/* DOCTOR NOTES */}

                <div className="md:col-span-2">
                  <label className="mb-2 block text-xs font-black uppercase tracking-wider text-slate-500">
                    Doctor Notes
                  </label>

                  <textarea
                    value={medicalForm.doctorNotes}
                    onChange={(event) =>
                      updateMedicalField(
                        "doctorNotes",
                        event.target.value
                      )
                    }
                    rows={4}
                    placeholder="Additional clinical notes..."
                    className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50/60 p-4 text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
                  />
                </div>

                {/* FOLLOW UP DATE */}

                <div>
                  <label className="mb-2 block text-xs font-black uppercase tracking-wider text-slate-500">
                    Follow-up Date
                  </label>

                  <input
                    type="date"
                    value={medicalForm.followUpDate}
                    onChange={(event) =>
                      updateMedicalField(
                        "followUpDate",
                        event.target.value
                      )
                    }
                    className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-4 text-sm font-semibold text-slate-700 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
                  />
                </div>

                {/* FOLLOW UP INSTRUCTIONS */}

                <div>
                  <label className="mb-2 block text-xs font-black uppercase tracking-wider text-slate-500">
                    Follow-up Instructions
                  </label>

                  <textarea
                    value={
                      medicalForm.followUpInstructions
                    }
                    onChange={(event) =>
                      updateMedicalField(
                        "followUpInstructions",
                        event.target.value
                      )
                    }
                    rows={3}
                    placeholder="When should the patient return? Any instructions?"
                    className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50/60 p-4 text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
                  />
                </div>
              </div>

              {/* SAVE STATUS */}

              {medicalRecordMessage && (
                <div
                  className={`mt-5 rounded-2xl px-4 py-3 text-sm font-bold ${
                    medicalRecordMessage.includes(
                      "successfully"
                    )
                      ? "border border-emerald-100 bg-emerald-50 text-emerald-700"
                      : "border border-red-100 bg-red-50 text-red-700"
                  }`}
                >
                  {medicalRecordMessage}
                </div>
              )}
            </div>

            {/* FOOTER */}

            <div className="flex flex-col justify-between gap-3 border-t border-slate-100 bg-slate-50/70 px-5 py-4 sm:flex-row sm:items-center sm:px-7">
              <p className="text-xs font-semibold text-slate-400">
                Medical record will be permanently saved with
                this visit.
              </p>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={closeMedicalRecord}
                  className="rounded-xl bg-white px-5 py-3 text-xs font-black text-slate-600 ring-1 ring-slate-200 transition hover:bg-slate-50"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={saveMedicalRecord}
                  disabled={savingMedicalRecord}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-xs font-black text-white shadow-lg shadow-blue-100 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {savingMedicalRecord ? (
                    <Loader2
                      size={15}
                      className="animate-spin"
                    />
                  ) : (
                    <Save size={15} />
                  )}

                  {savingMedicalRecord
                    ? "Saving..."
                    : "Save Medical Record"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}