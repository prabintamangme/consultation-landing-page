function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M4 9h10m-4-4 4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-[#fbfaf6] sm:min-h-[calc(100svh-6rem)]">
      <div className="hero-grid absolute inset-0 -z-20" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-6 -z-10 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-[#c89536]/14 blur-[90px] sm:h-[32rem] sm:w-[32rem]"
        aria-hidden="true"
      />
      <div
        className="absolute -left-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-[#0f5b60]/12 blur-[100px]"
        aria-hidden="true"
      />

      <div className="page-shell flex min-h-[calc(100svh-5rem)] flex-col items-center justify-center py-16 text-center sm:min-h-[calc(100svh-6rem)] sm:py-20">
        <span className="eyebrow">Finance &amp; Economics Research Support</span>

        <h1 className="mt-6 max-w-5xl text-balance text-[2.55rem] font-black leading-[1.02] tracking-[-0.045em] text-[#071f31] sm:text-6xl lg:text-[5.2rem]">
          Start Your Research With a{" "}
          <span className="brand-gradient">Clear Plan</span>
        </h1>

        <p className="mt-6 max-w-2xl text-balance text-lg font-semibold leading-8 text-[#314b57] sm:text-xl">
          Get focused one-to-one guidance for choosing your topic, shaping
          your proposal, and organizing your next steps.
        </p>

        <p className="mt-3 max-w-xl text-pretty text-base leading-7 text-[#62737b]">
          For finance and economics students who want practical direction
          before moving forward.
        </p>

        <a href="#consultation-form" className="cta-button mt-8 sm:w-auto">
          Book Your Research Consultation
          <ArrowIcon />
        </a>

        <p className="mt-4 text-sm font-medium text-[#6a7b82]">
          One clear conversation. One practical next step.
        </p>
      </div>
    </section>
  );
}
