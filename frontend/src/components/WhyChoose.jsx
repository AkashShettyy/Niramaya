function WhyChoose() {
  const points = [
    {
      title: "Personalized Care",
      description: "Treatment plans designed specifically for your unique needs.",
    },
    {
      title: "Experienced Professionals",
      description: "Certified specialists dedicated to your well-being.",
    },
    {
      title: "Safe & Supportive Space",
      description: "A welcoming environment focused on comfort and trust.",
    },
  ];

  return (
    <section className="bg-mint-texture py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="inline-flex rounded-full border border-emerald-200 bg-white px-4 py-1 text-sm font-medium text-emerald-700">
          Why Niramaya
        </p>

        <h2 className="mt-5 text-4xl font-bold text-slate-900">
          Why Choose Niramaya?
        </h2>

        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          We provide compassionate, evidence-based mental health care
          tailored to your individual journey toward healing and growth.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {points.map((point, index) => (
            <div
              key={point.title}
              className="rounded-2xl border border-emerald-100 bg-white p-7 text-left shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-9 w-9 rounded-full bg-emerald-100 text-emerald-700 font-semibold grid place-items-center">
                {index + 1}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                {point.title}
              </h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
