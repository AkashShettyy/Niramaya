import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch("http://localhost:3001/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Appointment booked successfully ✅");
        setFormData({
          name: "",
          email: "",
          date: "",
          message: "",
        });
      } else {
        setError(data.error || "Something went wrong ❌");
      }
    } catch (err) {
      setError("Server error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div>
      <Navbar />

      <section className="bg-mint-texture py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-center text-slate-900">
            Book an Appointment
          </h1>

          <form
            onSubmit={handleSubmit}
            className="mt-10 surface-card p-8 space-y-6"
          >
            {success && (
              <div className="bg-emerald-50 text-emerald-700 p-3 rounded-lg border border-emerald-100">
                {success}
              </div>
            )}

            {error && (
              <div className="bg-red-50 text-red-700 p-3 rounded-lg border border-red-100">
                {error}
              </div>
            )}

            <div>
              <label className="block text-slate-700 font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-2 p-3 border border-emerald-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>

            <div>
              <label className="block text-slate-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-2 p-3 border border-emerald-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>

            <div>
              <label className="block text-slate-700 font-medium">
                Preferred Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full mt-2 p-3 border border-emerald-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>

            <div>
              <label className="block text-slate-700 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full mt-2 p-3 border border-emerald-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit Appointment Request"}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Appointment;
