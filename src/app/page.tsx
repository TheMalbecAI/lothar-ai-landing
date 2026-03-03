import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Stats } from "@/components/sections/Stats";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { AdExamples } from "@/components/sections/AdExamples";
import { Comparison } from "@/components/sections/Comparison";
import { Proof } from "@/components/sections/Proof";
import { BookDemo } from "@/components/sections/BookDemo";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Stats />
        <Features />
        <HowItWorks />
        <AdExamples />
        <Comparison />
        <Proof />
        <BookDemo />
      </main>
      <Footer />
    </>
  );
}
