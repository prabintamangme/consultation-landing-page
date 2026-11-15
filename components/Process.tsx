const steps = [
  {
    number: "1",
    title: "Share where you are stuck",
    copy: "Tell me about your research idea and the support you need.",
  },
  {
    number: "2",
    title: "Discuss it one-to-one",
    copy: "Review your topic, proposal, literature review, or data needs.",
  },
  {
    number: "3",
    title: "Define your next step",
    copy: "Finish the consultation with a clearer research direction.",
  },
];

export default function Process() {
  return (
    <section className="section-pad bg-white" aria-labelledby="process-title">
      <div className="page-shell">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Simple Consultation Process</span>
          <h2
            id="process-title"
            className="mt-5 text-balance text-3xl font-black leading-tight tracking-[-0.035em] text-[#071f31] sm:text-5xl"
          >
            Three steps to a clearer plan.
          </h2>
        </div>

        <div className="relative mt-12 grid gap-5 md:grid-cols-3">
          <div
            className="absolute left-[16.6%] right-[16.6%] top-8 hidden h-px bg-[#d3dfdb] md:block"
            aria-hidden="true"
          />
          {steps.map((step) => (
            <article key={step.number} className="relative text-center">
              <span className="relative z-10 mx-auto flex size-16 items-center justify-center rounded-full border-8 border-white bg-[#0f5b60] text-lg font-black text-white shadow-[0_9px_24px_rgba(15,91,96,0.22)]">
                {step.number}
              </span>
              <h3 className="mt-6 text-xl font-extrabold tracking-[-0.02em] text-[#163845]">
                {step.title}
              </h3>
              <p className="mx-auto mt-3 max-w-xs leading-7 text-[#65767d]">
                {step.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
