import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div>
      <Navbar />

      <section className="bg-mint-texture py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-center text-slate-900">
            Contact Us
          </h1>

          <p className="mt-4 text-center text-slate-600">
            Have questions? We are here to help.
          </p>

          <form className="mt-10 surface-card p-8 space-y-6">
            <div>
              <label className="block text-slate-700 font-medium">
                Full Name
              </label>
              <input
                type="text"
                className="w-full mt-2 p-3 border border-emerald-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-medium">
                Email
              </label>
              <input
                type="email"
                className="w-full mt-2 p-3 border border-emerald-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-medium">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full mt-2 p-3 border border-emerald-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
