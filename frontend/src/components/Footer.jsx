function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#05251e] text-slate-300 py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.2),transparent_42%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(6,78,59,0.24),transparent_45%)]" />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Niramaya
          </h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Compassionate mental health care focused on clarity,
            balance, and long-term well-being.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2">
            <li className="hover:text-emerald-300 text-slate-300 cursor-pointer transition-colors">Home</li>
            <li className="hover:text-emerald-300 text-slate-300 cursor-pointer transition-colors">About</li>
            <li className="hover:text-emerald-300 text-slate-300 cursor-pointer transition-colors">Appointment</li>
            <li className="hover:text-emerald-300 text-slate-300 cursor-pointer transition-colors">Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            Contact
          </h3>
          <p className="mt-4 text-slate-300">
            Bangalore, India
          </p>
          <p className="mt-2 text-slate-300">
            +91 98765 43210
          </p>
          <p className="mt-2 text-slate-300">
            support@niramaya.com
          </p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="relative mt-10 text-center text-slate-400 text-sm border-t border-emerald-900/40 pt-6 max-w-6xl mx-auto px-6">
        © {new Date().getFullYear()} Niramaya. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
