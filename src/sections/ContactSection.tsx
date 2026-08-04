import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import Section from "@/components/animations/Section";
import GoogleMap from "@/components/common/GoogleMap";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-slate-50 py-24">
      <Section>
        <Container>
          <SectionTitle
            subtitle="Contact Us"
            title="Get In Touch"
            description="We are always here to help you with your healthcare needs."
          />

          {/* Contact Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Address */}
            <div className="rounded-3xl bg-white p-8 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <MapPin className="mx-auto mb-4 text-blue-700" size={40} />

              <h3 className="text-xl font-bold">Address</h3>

              <p className="mt-2 text-slate-600">
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
            <div className="rounded-3xl bg-white p-8 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <Phone className="mx-auto mb-4 text-blue-700" size={40} />

              <h3 className="text-xl font-bold">Phone</h3>

              <a
                href="tel:+919876543210"
                className="mt-2 block text-slate-600 transition hover:text-blue-700"
              >
                +91 98765 43210
              </a>
            </div>

            {/* Email */}
            <div className="rounded-3xl bg-white p-8 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <Mail className="mx-auto mb-4 text-blue-700" size={40} />

              <h3 className="text-xl font-bold">Email</h3>

              <a
                href="mailto:info@kvhospital.com"
                className="mt-2 block text-slate-600 transition hover:text-blue-700"
              >
                info@kvhospital.com
              </a>
            </div>

            {/* Open */}
            <div className="rounded-3xl bg-white p-8 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <Clock className="mx-auto mb-4 text-blue-700" size={40} />

              <h3 className="text-xl font-bold">Open</h3>

              <p className="mt-2 text-slate-600">
                24 × 7 Emergency Service
              </p>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-16">
            <GoogleMap />
          </div>

          {/* Get Directions */}
          <div className="mt-8 text-center">
            <a
              href="https://maps.google.com/?q=KV+Hospital,+Dindigul+Road,+Laxmipuram,+Palani,+Tamil+Nadu+624601"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white shadow-lg transition duration-300 hover:bg-blue-800 hover:shadow-xl"
            >
              📍 Get Directions
            </a>
          </div>
        </Container>
      </Section>
    </section>
  );
}