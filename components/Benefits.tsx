const benefits = [
  {
    number: "01",
    title: "Focus your topic",
    copy: "Turn a broad idea into a more focused research direction.",
  },
  {
    number: "02",
    title: "Clarify your question",
    copy: "Identify what your research should explore.",
  },
  {
    number: "03",
    title: "Plan your proposal",
    copy: "Create a practical structure for moving forward.",
  },
  {
    number: "04",
    title: "Organize your review",
    copy: "Bring more order to your literature-review process.",
  },
  {
    number: "05",
    title: "Identify useful sources",
    copy: "Find relevant Nepal economic data sources for your research.",
  },
];

export default function Benefits() {
  return (
    <section
      className="section-pad bg-[#f1f6f3]"
      aria-labelledby="benefits-title"
    >
      <div className="page-shell">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">How You Benefit</span>
          <h2
            id="benefits-title"
            className="mt-5 text-balance text-3xl font-black leading-tight tracking-[-0.035em] text-[#071f31] sm:text-5xl"
          >
            Leave with more clarity about your research.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className={`rounded-[1.4rem] border border-[#d6e2de] bg-white p-6 shadow-[0_12px_35px_rgba(7,31,49,0.05)] ${
                index < 3 ? "lg:col-span-2" : "lg:col-span-3"
              }`}
            >
              <span className="text-xs font-black tracking-[0.16em] text-[#c89536]">
                {benefit.number}
              </span>
              <h3 className="mt-7 text-xl font-extrabold tracking-[-0.02em] text-[#0a4048]">
                {benefit.title}
              </h3>
              <p className="mt-3 leading-7 text-[#63757c]">{benefit.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
