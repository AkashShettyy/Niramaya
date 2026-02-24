import logo from "../assets/logo.png";

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
  ]

  return (
    <section className="bg-mint-texture py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="inline-flex rounded-full border border-emerald-200 bg-white px-4 py-1 text-sm font-medium text-emerald-700">
          Patient Voices
        </p>

        <h2 className="mt-5 text-4xl font-bold text-slate-900">
          What Our Clients Say
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-slate-600">
          Real stories from individuals who have trusted Niramaya for their mental health journey.
        </p>

        <div className="mt-8 flex justify-center">
          <img
            src={logo}
            alt="Niramaya logo"
            className="h-10 w-auto object-contain opacity-90"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white text-slate-800 p-7 rounded-2xl shadow-sm border border-emerald-100 text-left hover:shadow-md transition-shadow"
            >
              <p className="text-emerald-700 text-3xl leading-none">"</p>
              <p className="mt-2 italic leading-relaxed text-slate-600">{review.text}</p>
              <h4 className="mt-6 font-semibold text-slate-900">{review.name}</h4>
              <p className="text-sm text-emerald-700">Verified Client</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
