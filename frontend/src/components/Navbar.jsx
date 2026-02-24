import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-emerald-100/70 bg-white/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Niramaya"
            className="h-16 md:h-20 w-auto object-contain"
          />
        </Link>

        {/* Menu */}
        <div className="space-x-7 hidden md:flex font-medium">
          <Link to="/" className="text-slate-700 hover:text-emerald-700 transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-slate-700 hover:text-emerald-700 transition-colors">
            About
          </Link>
          <Link
            to="/appointment"
            className="text-slate-700 hover:text-emerald-700 transition-colors"
          >
            Appointment
          </Link>
          <Link to="/contact" className="text-slate-700 hover:text-emerald-700 transition-colors">
            Contact
          </Link>
          <Link to="/blogs" className="text-slate-700 hover:text-emerald-700 transition-colors">
            Blogs
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
