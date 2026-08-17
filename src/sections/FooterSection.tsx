import Section from "@/components/animations/Section";
import { hospitalInfo } from "@/constants/hospital";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
} from "lucide-react";

export default function FooterSection() {
  return (
    <Section>
      <footer className="bg-slate-950 text-white">

        {/* Main Footer */}
        <div className="mx-auto max-w-7xl px-6 py-16">

          <div className="grid gap-12 lg:grid-cols-4">

            {/* Hospital Info */}
            <div className="lg:col-span-1">

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-700 text-lg font-bold">
                  KV
                </div>

                <div>
                  <h2 className="text-xl font-bold">
                    {hospitalInfo.name}
                  </h2>

                  <p className="text-xs font-medium tracking-wider text-blue-400">
                    TRUSTED HEALTHCARE
                  </p>
                </div>
              </div>

              <p className="mt-6 max-w-sm leading-7 text-slate-400">
                Trusted healthcare for families in Palani,
                providing compassionate treatment with
                experienced doctors and modern medical facilities.
              </p>

              {/* Emergency Badge */}
              <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-red-900/50 bg-red-950/40 px-4 py-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600">
                  <Phone size={17} />
                </div>

                <div>
                  <p className="text-xs text-red-300">
                    Emergency Support
                  </p>

                  <p className="font-semibold text-white">
                    Available 24 × 7
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold">
                Quick Links
              </h3>

              <div className="mt-6 space-y-3">
                <a
                  href="#home"
                  className="block text-slate-400 transition hover:translate-x-1 hover:text-white"
                >
                  Home
                </a>

                <a
                  href="#about"
                  className="block text-slate-400 transition hover:translate-x-1 hover:text-white"
                >
                  About Us
                </a>

                <a
                  href="#departments"
                  className="block text-slate-400 transition hover:translate-x-1 hover:text-white"
                >
                  Departments
                </a>

                <a
                  href="#doctors"
                  className="block text-slate-400 transition hover:translate-x-1 hover:text-white"
                >
                  Our Doctors
                </a>

                <a
                  href="#contact"
                  className="block text-slate-400 transition hover:translate-x-1 hover:text-white"
                >
                  Contact Us
                </a>

                <a
                  href="#appointment"
                  className="block text-slate-400 transition hover:translate-x-1 hover:text-white"
                >
                  Book Appointment
                </a>
              </div>
            </div>

            {/* Departments */}
            <div>
              <h3 className="text-lg font-bold">
                Our Departments
              </h3>

              <div className="mt-6 space-y-3 text-slate-400">
                <p className="transition hover:text-white">
                  General Medicine
                </p>

                <p className="transition hover:text-white">
                  Cardiology
                </p>

                <p className="transition hover:text-white">
                  Orthopedics
                </p>

                <p className="transition hover:text-white">
                  Neurology
                </p>

                <p className="transition hover:text-white">
                  Pediatrics
                </p>

                <p className="transition hover:text-white">
                  Emergency Care
                </p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold">
                Contact Us
              </h3>

              <div className="mt-6 space-y-5">

                {/* Location */}
                <div className="flex gap-3">
                  <MapPin
                    size={20}
                    className="mt-1 shrink-0 text-blue-500"
                  />

                  <p className="leading-6 text-slate-400">
                    {hospitalInfo.location}
                  </p>
                </div>

                {/* Phone */}
                <a
                  href={`tel:${hospitalInfo.phone}`}
                  className="flex items-center gap-3 text-slate-400 transition hover:text-white"
                >
                  <Phone
                    size={20}
                    className="text-blue-500"
                  />

                  <span>{hospitalInfo.phone}</span>

                  <ArrowUpRight size={15} />
                </a>

                {/* Email */}
                <a
                  href={`mailto:${hospitalInfo.email}`}
                  className="flex items-center gap-3 break-all text-slate-400 transition hover:text-white"
                >
                  <Mail
                    size={20}
                    className="shrink-0 text-blue-500"
                  />

                  <span>{hospitalInfo.email}</span>
                </a>

                {/* Timing */}
                <div className="flex items-center gap-3 text-slate-400">
                  <Clock
                    size={20}
                    className="text-blue-500"
                  />

                  <span>24 × 7 Emergency Service</span>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800">

          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm sm:flex-row">

            <p className="text-center text-slate-500 sm:text-left">
              © 2026 {hospitalInfo.name}. All Rights Reserved.
            </p>

            <div className="flex items-center gap-6 text-slate-500">
              <a
                href="#home"
                className="transition hover:text-white"
              >
                Privacy
              </a>

              <a
                href="#home"
                className="transition hover:text-white"
              >
                Terms
              </a>

              <a
                href="#contact"
                className="transition hover:text-white"
              >
                Support
              </a>
            </div>

          </div>
        </div>

      </footer>
    </Section>
  );
}