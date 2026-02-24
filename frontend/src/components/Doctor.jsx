function Doctor() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="surface-card p-8 md:p-10">
          <p className="inline-flex rounded-full border border-[#0b4a3e]/20 bg-[#0b4a3e]/5 px-4 py-1 text-sm font-medium text-[#0b4a3e]">
            Lead Psychiatrist
          </p>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">Meet Dr. Sharma</h2>

          <p className="mt-6 text-slate-600 leading-relaxed">
            Dr. Sharma is a board-certified psychiatrist with over 10 years of
            experience in helping individuals navigate anxiety, depression, and
            life transitions.
          </p>

          <p className="mt-4 text-slate-600 leading-relaxed">
            At Niramaya, the focus is on compassionate, personalized care
            tailored to each patient’s unique journey.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-[#0b4a3e]/5 text-[#0b4a3e] text-sm px-3 py-1 border border-[#0b4a3e]/20">10+ years experience</span>
            <span className="rounded-full bg-[#0b4a3e]/5 text-[#0b4a3e] text-sm px-3 py-1 border border-[#0b4a3e]/20">Evidence-based care</span>
            <span className="rounded-full bg-[#0b4a3e]/5 text-[#0b4a3e] text-sm px-3 py-1 border border-[#0b4a3e]/20">Patient-first approach</span>
          </div>

          <button className="mt-8 bg-[#0b4a3e] text-white px-7 py-3 rounded-full font-semibold hover:bg-[#126151] transition-colors">
            Learn More
          </button>
        </div>

        <div>
          <img
            src="/images/doctor.avif"
            alt="Dr. Sharma"
            className="rounded-2xl shadow-xl w-full border border-emerald-100 object-cover min-h-[420px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Doctor;
