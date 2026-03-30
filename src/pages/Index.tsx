import SEOHead from '@/components/SEOHead';
import BeforeAfterSection from '@/components/sections/BeforeAfterSection';
import BlogPreviewSection from '@/components/sections/BlogPreviewSection';
import ContactSection from '@/components/sections/ContactSection';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import StatsSection from '@/components/sections/StatsSection';
import TeamSection from '@/components/sections/TeamSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import WhyUsSection from '@/components/sections/WhyUsSection';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { absoluteUrl } from '@/lib/site';

export default function Index() {
  useScrollReveal();

  return (
    <>
      <SEOHead
        title="SmileArt Dental — Nowoczesna Klinika Stomatologiczna Kraków"
        description="Nowoczesna klinika stomatologiczna w Krakowie. Implanty, ortodoncja, estetyka, bezbolesne zabiegi. Umów bezpłatną konsultację!"
        canonical={absoluteUrl('/')}
      />
      <main id="main">
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <WhyUsSection />
        <BeforeAfterSection />
        <TeamSection />
        <TestimonialsSection />
        <BlogPreviewSection />
        <ContactSection />
      </main>
    </>
  );
}
