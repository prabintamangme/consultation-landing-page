export default function Urgency() {
  return (
    <section className="bg-[#071f31] py-16 text-white sm:py-20">
      <div className="page-shell text-center">
        <p className="text-xs font-black uppercase tracking-[0.17em] text-[#e2bd6d]">
          Your Next Step
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-balance text-3xl font-black tracking-[-0.035em] sm:text-5xl">
          Start with clarity.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-8 text-[#c7d5d7]">
          Use the consultation to clarify what you are working on and what to
          do next.
        </p>
        <a
          href="#consultation-form"
          className="cta-button mt-8 border-[#d8a84c] bg-[linear-gradient(120deg,#c89536,#e2bd6d)] text-[#071f31] shadow-[0_14px_35px_rgba(200,149,54,0.18)] sm:w-auto"
        >
          Book Your Research Consultation
        </a>
      </div>
    </section>
  );
}
