import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { StatsBar } from "@/components/landing/stats-bar";
import { Services } from "@/components/landing/services";
import { LicenseChecker } from "@/components/landing/license-checker";
import { KnowledgeHub } from "@/components/landing/knowledge-hub";
import { WhyUs } from "@/components/landing/why-us";
import { Process } from "@/components/landing/process";
import { Pricing } from "@/components/landing/pricing";
import { Testimonials } from "@/components/landing/testimonials";
import { Comparison } from "@/components/landing/comparison";
import { Faq } from "@/components/landing/faq";
import { FinalCta } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";
import { ChatWidget } from "@/components/landing/chat-widget";

// ============================================================
// PUSATPERIZINAN.COM — Landing Page Utama
// Konsultan Perizinan Usaha #1 Indonesia
// SEO Architecture: Layanan + Knowledge Hub + Perbandingan
// Lead Generation Engine + AI Consultant 24/7
// ============================================================

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <Services />
        <LicenseChecker />
        <KnowledgeHub />
        <WhyUs />
        <Process />
        <Pricing />
        <Testimonials />
        <Comparison />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
