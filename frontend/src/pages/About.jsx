import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div>
      <Navbar />

      <section className="bg-mint-texture py-20">
        <div className="max-w-5xl mx-auto px-6 text-center surface-card p-10 md:p-12">
          <h1 className="text-4xl font-bold text-slate-900">About Niramaya</h1>

          <p className="mt-6 text-slate-600 leading-relaxed">
            Niramaya is dedicated to providing compassionate,
            evidence-based mental health care. Our goal is to create
            a safe and supportive environment where individuals can
            explore their challenges and build resilience.
          </p>

          <p className="mt-4 text-slate-600 leading-relaxed">
            We believe mental health is just as important as physical
            health. Through personalized treatment plans and supportive
            therapy, we help individuals move toward clarity,
            balance, and long-term well-being.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
