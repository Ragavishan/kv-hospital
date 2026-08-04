import { Phone, Mail, Clock } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-primary text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>+91 98765 43210</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>info@kvhospital.com</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Clock size={16} />
          <span>Open 24 × 7</span>
        </div>
      </div>
    </div>
  );
}