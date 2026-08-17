import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import Section from "@/components/animations/Section";
import GoogleMap from "@/components/common/GoogleMap";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-white py-24"
    >
      <Section>
        <Container>
          <SectionTitle
            subtitle="Contact Us"
            title="Get In Touch"
            description="We are always here to help you with your healthcare needs."
          />

          {/* Contact Information */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {/* Address */}
            <div className="group rounded-3xl border border-slate-100 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:bg-white hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 transition-all duration-300 group-hover:bg-blue-700 group-hover:text-white">
                <MapPin size={28} />
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Visit Us
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                KV Hospital
                <br />
                Dindigul Road,
                <br />
                Laxmipuram,
                <br />
                Palani - 624601,
                <br />
                Tamil Nadu
              </p>
            </div>

            {/* Phone */}
            <div className="group rounded-3xl border border-slate-100 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:bg-white hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 transition-all duration-300 group-hover:bg-blue-700 group-hover:text-white">
                <Phone size={28} />
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Call Us
              </h3>

              <p className="mt-3 text-sm text-slate-500">
                Available for appointments
              </p>

              <a
                href="tel:+919876543210"
                className="mt-3 inline-flex items-center gap-2 font-semibold text-blue-700 transition hover:text-blue-900"
              >
                +91 98765 43210
                <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Email */}
            <div className="group rounded-3xl border border-slate-100 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:bg-white hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 transition-all duration-300 group-hover:bg-blue-700 group-hover:text-white">
                <Mail size={28} />
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Email Us
              </h3>

              <p className="mt-3 text-sm text-slate-500">
                Send us your enquiries
              </p>

              <a
                href="mailto:info@kvhospital.com"
                className="mt-3 inline-flex items-center gap-2 break-all font-semibold text-blue-700 transition hover:text-blue-900"
              >
                kvmultispecialityhospital@gmail.com
                <ArrowUpRight
                  size={16}
                  className="shrink-0"
                />
              </a>
            </div>

            {/* Emergency */}
            <div className="group rounded-3xl border border-red-100 bg-red-50 p-7 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-red-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
                <Clock size={28} />
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Emergency Care
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Our emergency department is available
                around the clock.
              </p>

              <span className="mt-3 inline-block font-bold text-red-600">
                24 × 7 Available
              </span>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl">
            <div className="p-6 sm:p-8">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
                    Find Us
                  </p>

                  <h3 className="mt-1 text-2xl font-bold text-slate-900">
                    Visit KV Hospital
                  </h3>

                  <p className="mt-2 text-slate-500">
                    Dindigul Road, Laxmipuram, Palani
                  </p>
                </div>

                <a
                  href="https://maps.google.com/?q=KV+Hospital,+Dindigul+Road,+Laxmipuram,+Palani,+Tamil+Nadu+624601"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-lg"
                >
                  <MapPin size={18} />
                  Get Directions
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            <div className="h-[380px] w-full">
              <GoogleMap />
            </div>
          </div>
        </Container>
      </Section>
    </section>
  );
}