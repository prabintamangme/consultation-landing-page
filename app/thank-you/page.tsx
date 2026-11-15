import type { Metadata } from "next";
import Header from "@/components/Header";
import ThankYouContent from "@/components/ThankYouContent";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your next step with LEARNINGEVERGROW.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#f3f7f4]">
      <Header />
      <ThankYouContent />
    </main>
  );
}
