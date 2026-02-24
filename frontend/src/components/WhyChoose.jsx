function WhyChoose() {
  return (
    <section className="bg-mint-texture py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-slate-900">
          Why Choose Niramaya?
        </h2>

        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          We provide compassionate, evidence-based mental health care
          tailored to your individual journey toward healing and growth.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-16">
          <div className="p-7 rounded-2xl border border-emerald-100 bg-white shadow-sm hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-emerald-700">
              Personalized Care
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Treatment plans designed specifically for your unique needs.
            </p>
          </div>

          <div className="p-7 rounded-2xl border border-emerald-100 bg-white shadow-sm hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-emerald-700">
              Experienced Professionals
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Certified specialists dedicated to your well-being.
            </p>
          </div>

          <div className="p-7 rounded-2xl border border-emerald-100 bg-white shadow-sm hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-emerald-700">
              Safe & Supportive Space
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              A welcoming environment focused on comfort and trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
