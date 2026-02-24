function Testimonials() {
  const reviews = [
    {
      name: "Priya S.",
      text: "Niramaya truly helped me find clarity during a difficult time. The care and support were exceptional.",
    },
    {
      name: "Rahul M.",
      text: "Professional, compassionate, and understanding. I felt heard and supported throughout my journey.",
    },
    {
      name: "Ananya K.",
      text: "A safe and welcoming space. The sessions made a real difference in my mental well-being.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#05251e] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.2),transparent_42%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(6,78,59,0.24),transparent_45%)]" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <p className="inline-flex rounded-full border border-emerald-300/30 bg-white/10 px-4 py-1 text-sm font-medium text-emerald-200">
          Patient Voices
        </p>

        <h2 className="mt-5 text-4xl font-bold text-white">
          What Our Clients Say
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-slate-200">
          Real stories from individuals who have trusted Niramaya for their
          mental health journey.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white text-slate-800 p-7 rounded-2xl shadow-sm border border-emerald-100 text-left hover:shadow-md transition-shadow"
            >
              <p className="text-emerald-700 text-3xl leading-none">"</p>
              <p className="mt-2 italic leading-relaxed text-slate-600">
                {review.text}
              </p>
              <h4 className="mt-6 font-semibold text-slate-900">
                {review.name}
              </h4>
              <p className="text-sm text-[#0b4a3e]">Verified Client</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
