function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-14">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Niramaya
          </h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
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
            <li className="hover:text-white cursor-pointer transition-colors">Home</li>
            <li className="hover:text-white cursor-pointer transition-colors">About</li>
            <li className="hover:text-white cursor-pointer transition-colors">Appointment</li>
            <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            Contact
          </h3>
          <p className="mt-4 text-slate-400">
            Bangalore, India
          </p>
          <p className="mt-2 text-slate-400">
            +91 98765 43210
          </p>
          <p className="mt-2 text-slate-400">
            support@niramaya.com
          </p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Niramaya. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
