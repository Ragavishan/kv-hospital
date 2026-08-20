import { Phone, Mail, Clock, ShieldCheck } from "lucide-react";

export default function TopBar() {
  return (
    <div className="border-b border-blue-900/20 bg-blue-950 text-white">
      <div className="mx-auto flex min-h-10 max-w-7xl items-center justify-between px-5 py-2 sm:px-6 lg:px-8">

        {/* Contact Information */}

        <div className="flex items-center gap-5 text-xs font-medium sm:gap-7 sm:text-sm">

          {/* Phone */}

          <a
            href="tel:+917502710333"
            className="group flex items-center gap-2 transition-colors duration-200 hover:text-blue-200"
          >
            <Phone
              size={14}
              strokeWidth={2}
              className="text-blue-300 transition-transform duration-200 group-hover:scale-110"
            />

            <span className="hidden sm:inline">
              +91 7502710333
            </span>

            <span className="sm:hidden">
              Call Us
            </span>
          </a>

          {/* Divider */}

          <span className="hidden h-4 w-px bg-white/15 sm:block" />

          {/* Email */}

          <a
            href="mailto:info@kvhospital.com"
            className="group hidden items-center gap-2 transition-colors duration-200 hover:text-blue-200 md:flex"
          >
            <Mail
              size={14}
              strokeWidth={2}
              className="text-blue-300 transition-transform duration-200 group-hover:scale-110"
            />

            <span>
              info@kvhospital.com
            </span>
          </a>

        </div>

        {/* Availability */}

        <div className="flex items-center gap-2">

          <div className="flex items-center gap-2 rounded-full border border-red-400/20 bg-red-500/10 px-3 py-1.5">

            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-60" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
            </span>

            <Clock
              size={14}
              strokeWidth={2}
              className="text-red-300"
            />

            <span className="text-xs font-bold tracking-wide text-red-100">
              Open 24 × 7
            </span>

          </div>

          <div className="hidden items-center gap-1.5 text-xs font-medium text-blue-200 lg:flex">
            <ShieldCheck size={14} />
            Trusted Care
          </div>

        </div>

      </div>
    </div>
  );
}