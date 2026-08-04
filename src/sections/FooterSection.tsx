import Section from "@/components/animations/Section";
import { hospitalInfo } from "@/constants/hospital";

export default function FooterSection() {
  return (
    <Section>
      <footer
        id="contact"
        className="bg-slate-900 py-12 text-white"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4">

          {/* Hospital Info */}

          <div>
            <h2 className="text-2xl font-bold">
              {hospitalInfo.name}
            </h2>

            <p className="mt-4 text-slate-300">
              Trusted healthcare for families in Palani with
              experienced doctors and modern facilities.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="mb-4 font-bold">
              Quick Links
            </h3>

            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#home" className="hover:text-white">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>

              <li>
                <a href="#departments" className="hover:text-white">
                  Departments
                </a>
              </li>

              <li>
                <a href="#doctors" className="hover:text-white">
                  Doctors
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Departments */}

          <div>
            <h3 className="mb-4 font-bold">
              Departments
            </h3>

            <ul className="space-y-2 text-slate-300">
              <li>General Medicine</li>
              <li>Cardiology</li>
              <li>Orthopedics</li>
              <li>Pediatrics</li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-4 font-bold">
              Contact
            </h3>

            <p>{hospitalInfo.phone}</p>
            <p>{hospitalInfo.email}</p>
            <p>{hospitalInfo.location}</p>
          </div>

        </div>

        <div className="mt-10 border-t border-slate-700 pt-6 text-center text-slate-400">
          © 2026 {hospitalInfo.name}. All Rights Reserved.
        </div>
      </footer>
    </Section>
  );
}