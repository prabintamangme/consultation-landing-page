const problems = [
  "Your research idea still feels too broad.",
  "Your research question needs more focus.",
  "Your proposal, literature review, and data sources need structure.",
];

export default function Problem() {
  return (
    <section className="section-pad bg-white" aria-labelledby="problem-title">
      <div className="page-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
        <div>
          <span className="eyebrow">When Research Feels Unclear</span>
          <h2
            id="problem-title"
            className="mt-5 max-w-xl text-balance text-3xl font-black leading-tight tracking-[-0.035em] text-[#071f31] sm:text-5xl"
          >
            You have an idea. You need a clearer next step.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[#596b73]">
            A focused conversation can help you organize what you already
            have and decide what to work on next.
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-[#dce6e3] bg-[#f7faf8] p-5 sm:p-8">
          <ul className="space-y-3">
            {problems.map((problem, index) => (
              <li
                key={problem}
                className="flex items-start gap-4 rounded-2xl bg-white p-4 shadow-[0_8px_24px_rgba(7,31,49,0.05)] sm:p-5"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#eaf4f1] text-sm font-black text-[#0f5b60]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="pt-1 text-[0.98rem] font-bold leading-6 text-[#203d49]">
                  {problem}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
