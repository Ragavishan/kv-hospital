"use client";

import Section from "@/components/animations/Section";
import { hospitalInfo } from "@/constants/hospital";
import { useLanguage } from "@/components/common/LanguageProvider";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function FooterSection() {
  const { t } = useLanguage();

  return (
    <Section>
      <footer className="bg-slate-950 text-white">

        {/* Main Footer */}
        <div className="mx-auto max-w-7xl px-6 py-16">

          <div className="grid gap-12 lg:grid-cols-4">

            {/* Hospital Info */}
            <div className="lg:col-span-1">

              {/* Hospital Name */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  {hospitalInfo.name}
                </h2>

                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
                  {t.footer.trustedHealthcare}
                </p>
              </div>

              {/* Description */}
              <p className="mt-6 max-w-sm leading-7 text-slate-400">
                {t.footer.description}
              </p>

              {/* Emergency Badge */}
              <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-red-900/50 bg-red-950/40 px-4 py-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600">
                  <Phone size={17} />
                </div>

                <div>
                  <p className="text-xs text-red-300">
                    {t.footer.emergencySupport}
                  </p>

                  <p className="font-semibold text-white">
                    {t.footer.available247}
                  </p>
                </div>

              </div>

              {/* Social Media */}
              <div className="mt-7">

                <p className="mb-3 text-sm font-semibold text-white">
                  {t.footer.followUs}
                </p>

                <div className="flex items-center gap-3">

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/profile.php?id=61593785437227"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                  >
                    <FaFacebookF size={16} />
                  </a>

                  {/* Twitter */}
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:bg-sky-500 hover:text-white"
                  >
                    <FaTwitter size={16} />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500 hover:bg-pink-600 hover:text-white"
                  >
                    <FaInstagram size={17} />
                  </a>

                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>

              <h3 className="text-lg font-bold">
                {t.footer.quickLinks}
              </h3>

              <div className="mt-6 space-y-3">

                <a
                  href="#home"
                  className="block text-slate-400 transition hover:translate-x-1 hover:text-white"
                >
                  {t.footer.home}
                </a>

                <a
                  href="#about"
                  className="block text-slate-400 transition hover:translate-x-1 hover:text-white"
                >
                  {t.footer.aboutUs}
                </a>

                <a
                  href="#departments"
                  className="block text-slate-400 transition hover:translate-x-1 hover:text-white"
                >
                  {t.footer.departments}
                </a>

                <a
                  href="#doctors"
                  className="block text-slate-400 transition hover:translate-x-1 hover:text-white"
                >
                  {t.footer.ourDoctors}
                </a>

                <a
                  href="#contact"
                  className="block text-slate-400 transition hover:translate-x-1 hover:text-white"
                >
                  {t.footer.contactUs}
                </a>

                <a
                  href="#appointment"
                  className="block text-slate-400 transition hover:translate-x-1 hover:text-white"
                >
                  {t.footer.bookAppointment}
                </a>

              </div>
            </div>

            {/* Departments */}
            <div>

              <h3 className="text-lg font-bold">
                {t.footer.ourDepartments}
              </h3>

              <div className="mt-6 space-y-3 text-slate-400">

                <p className="transition hover:text-white">
                  {t.footer.generalMedicine}
                </p>

                <p className="transition hover:text-white">
                  {t.footer.cardiology}
                </p>

                <p className="transition hover:text-white">
                  {t.footer.orthopedics}
                </p>

                <p className="transition hover:text-white">
                  {t.footer.neurology}
                </p>

                <p className="transition hover:text-white">
                  {t.footer.pediatrics}
                </p>

                <p className="transition hover:text-white">
                  {t.footer.emergencyCare}
                </p>

              </div>
            </div>

            {/* Contact */}
            <div>

              <h3 className="text-lg font-bold">
                {t.footer.contactUs}
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

                  <span>
                    {hospitalInfo.phone}
                  </span>

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

                  <span>
                    {hospitalInfo.email}
                  </span>

                </a>

                {/* Timing */}
                <div className="flex items-center gap-3 text-slate-400">

                  <Clock
                    size={20}
                    className="text-blue-500"
                  />

                  <span>
                    {t.footer.emergencyService}
                  </span>

                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800">

          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm sm:flex-row">

            <p className="text-center text-slate-500 sm:text-left">
              © 2026 {hospitalInfo.name}.{" "}
              {t.footer.allRightsReserved}
            </p>

            <div className="flex items-center gap-6 text-slate-500">

              <a
                href="#home"
                className="transition hover:text-white"
              >
                {t.footer.privacy}
              </a>

              <a
                href="#home"
                className="transition hover:text-white"
              >
                {t.footer.terms}
              </a>

              <a
                href="#contact"
                className="transition hover:text-white"
              >
                {t.footer.support}
              </a>

            </div>

          </div>
        </div>

      </footer>
    </Section>
  );
}