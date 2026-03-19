import SEOHead from '@/components/SEOHead';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyUsSection from '@/components/sections/WhyUsSection';
import BeforeAfterSection from '@/components/sections/BeforeAfterSection';
import TeamSection from '@/components/sections/TeamSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import BlogPreviewSection from '@/components/sections/BlogPreviewSection';
import ContactSection from '@/components/sections/ContactSection';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Index() {
  useScrollReveal();

  return (
    <>
      <SEOHead
        title="SmileArt Dental — Nowoczesna Klinika Stomatologiczna Kraków"
        description="Nowoczesna klinika stomatologiczna w Krakowie. Implanty, ortodoncja, estetyka, bezbolesne zabiegi. Umów bezpłatną konsultację!"
        canonical="https://smileartdental.pl/"
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
