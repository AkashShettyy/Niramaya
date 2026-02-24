function Services() {
  const services = [
    {
      title: "Anxiety Therapy",
      description:
        "Evidence-based strategies to help manage anxiety and regain control.",
    },
    {
      title: "Depression Support",
      description:
        "Compassionate care to help you navigate and overcome depression.",
    },
    {
      title: "Couples Counseling",
      description:
        "Strengthening relationships through guided communication.",
    },
    {
      title: "Stress Management",
      description:
        "Practical techniques to reduce stress and improve well-being.",
    },
    {
      title: "Trauma Recovery",
      description:
        "Supportive therapy to help process and heal from trauma.",
    },
    {
      title: "Child & Adolescent Care",
      description:
        "Specialized care tailored for younger individuals and families.",
    },
  ]

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="inline-flex rounded-full border border-emerald-200 bg-white px-4 py-1 text-sm font-medium text-emerald-700">
          Clinical Services
        </p>

        <h2 className="mt-5 text-4xl font-bold text-slate-900">
          Our Services
        </h2>

        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          Professional mental health services designed to support you at every stage.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-white to-emerald-50/60 p-7 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                {service.description}
              </p>
              <p className="mt-5 text-sm font-medium text-[#0b4a3e]">
                Learn more
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
