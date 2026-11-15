"use client";

import { useEffect, useMemo, useState } from "react";

const vimeoUrl = process.env.NEXT_PUBLIC_VIMEO_URL ?? "";
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

function getVimeoId(url: string) {
  const match = url.match(/vimeo\.com\/(?:video\/)?(\d+)/i);
  return match?.[1] ?? "";
}

export default function ThankYouContent() {
  const [completedDemo, setCompletedDemo] = useState(false);

  useEffect(() => {
    setCompletedDemo(
      sessionStorage.getItem("learningevergrow-demo-submission") === "complete",
    );
  }, []);

  const vimeoId = useMemo(() => getVimeoId(vimeoUrl), []);
  const normalizedNumber = useMemo(
    () => whatsappNumber.replace(/\D/g, ""),
    [],
  );
  const whatsappMessage = encodeURIComponent(
    "Hi, I just completed the form for a research consultation. I'd like to know the next steps.",
  );

  return (
    <section className="relative overflow-hidden px-4 py-14 sm:py-20">
      <div
        className="absolute left-1/2 top-0 -z-0 size-[28rem] -translate-x-1/2 rounded-full bg-[#c89536]/12 blur-[100px]"
        aria-hidden="true"
      />
      <div className="glass-card relative z-10 mx-auto max-w-3xl rounded-[2rem] p-6 text-center sm:p-10 lg:p-12">
        <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-[#eaf4f1] text-[#0f5b60]">
          <svg
            aria-hidden="true"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="m7 15 5 5L23 9"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        <p className="mt-6 text-xs font-black uppercase tracking-[0.17em] text-[#c89536]">
          Thank You
        </p>
        <h1 className="mt-3 text-balance text-4xl font-black leading-tight tracking-[-0.04em] text-[#071f31] sm:text-5xl">
          Your next step is ready.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-8 text-[#5c6e76]">
          {completedDemo
            ? "You completed the consultation form experience."
            : "Thanks for your interest in a research consultation."}
        </p>
        <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-[#78888e]">
          This preview does not transmit your details. Connect a working form
          backend before using it for real submissions.
        </p>

        {vimeoId && (
          <div className="mt-8 overflow-hidden rounded-2xl border border-[#d8e3df] bg-[#071f31] shadow-xl">
            <div className="relative aspect-video">
              <iframe
                src={`https://player.vimeo.com/video/${vimeoId}`}
                title="Next steps video"
                allow="fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 size-full border-0"
              />
            </div>
          </div>
        )}

        {normalizedNumber && (
          <a
            href={`https://wa.me/${normalizedNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#1fa855] px-6 py-3 font-extrabold text-white shadow-[0_14px_35px_rgba(31,168,85,0.2)] transition hover:-translate-y-0.5 hover:bg-[#188a47] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#1fa855]/40"
          >
            <svg
              aria-hidden="true"
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 8.6c.3 2.5 1.8 4 4.4 4.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
            Message Us on WhatsApp
          </a>
        )}
      </div>
    </section>
  );
}
