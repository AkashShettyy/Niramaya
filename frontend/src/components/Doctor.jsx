function Doctor() {
  return (
    <section className="bg-mint-texture py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Doctor Info (Now First) */}
        <div>
          <h2 className="text-4xl font-bold text-slate-900">Meet Dr. Sharma</h2>

          <p className="mt-6 text-slate-600 leading-relaxed">
            Dr. Sharma is a board-certified psychiatrist with over 10 years of
            experience in helping individuals navigate anxiety, depression, and
            life transitions.
          </p>

          <p className="mt-4 text-slate-600 leading-relaxed">
            At Niramaya, the focus is on compassionate, personalized care
            tailored to each patient’s unique journey.
          </p>

          <button className="mt-8 bg-emerald-600 text-white px-7 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors">
            Learn More
          </button>
        </div>

        {/* Doctor Image (Now Second) */}
        <div>
          <img
            src="/images/doctor.avif"
            alt="Doctor"
            className="rounded-2xl shadow-xl w-full border border-emerald-100"
          />
        </div>
      </div>
    </section>
  );
}

export default Doctor;
