import Benefits from "@/components/Benefits";
import CTAForm from "@/components/CTAForm";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Process from "@/components/Process";
import Urgency from "@/components/Urgency";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Problem />
      <Benefits />
      <Process />
      <Urgency />
      <CTAForm />
    </main>
  );
}
