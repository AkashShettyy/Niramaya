function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-slate-950"
      style={{
        backgroundImage: "linear-gradient(120deg, rgba(2,6,23,0.62), rgba(6,78,59,0.48)), url('/images/hero-office.png')",
      }}
    >
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-300/15 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 min-h-[88vh] flex items-center">
        <div className="max-w-2xl">
          <p className="inline-flex rounded-full border border-emerald-100/30 bg-white/10 px-4 py-1 text-sm text-emerald-100 backdrop-blur">
            Trusted mental wellness care
          </p>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Find clarity and feel
            <span className="text-emerald-300"> emotionally steady</span> again.
          </h1>

          <p className="mt-6 text-lg text-slate-200 max-w-xl leading-relaxed">
            Personalized psychiatric treatment and supportive therapy designed around your life, goals, and pace of healing.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button className="bg-emerald-500 text-slate-950 px-7 py-3 rounded-full font-semibold hover:bg-emerald-400 transition-colors">
              Book Consultation
            </button>

            <button className="border border-white/50 text-white px-7 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
