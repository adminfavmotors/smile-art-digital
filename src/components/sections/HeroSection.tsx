import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden -mt-16">
      {/* Radial gradient */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, hsl(213 53% 25% / 0.6) 0%, hsl(214 50% 12%) 70%)' }} />
      
      {/* Decorative tooth SVG */}
      <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[600px] opacity-[0.04]" viewBox="0 0 200 240" fill="none" aria-hidden="true">
        <path d="M100 10C60 10 40 40 40 70c0 50 30 90 45 120 5 10 10 20 15 20s10-10 15-20c15-30 45-70 45-120 0-30-20-60-60-60z" stroke="white" strokeWidth="3"/>
        <path d="M75 50c0-15 12-25 25-25s25 10 25 25" stroke="white" strokeWidth="2"/>
      </svg>

      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        {/* Eyebrow */}
        <div className="inline-block bg-accent/20 border border-accent/30 rounded-full px-5 py-1.5 mb-8">
          <span className="text-gold text-sm font-body font-semibold tracking-wide">
            Klinika stomatologiczna · Kraków Kazimierz
          </span>
        </div>

        <h1 className="font-heading text-4xl md:text-6xl lg:text-[64px] text-primary-foreground leading-tight mb-6 italic">
          Twój uśmiech zasługuje na wyjątkową opiekę
        </h1>

        <p className="text-light text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto font-body">
          Nowoczesna stomatologia w sercu Krakowa. Bezbolesne zabiegi, transparentne ceny, doświadczeni specjaliści.
        </p>

        {/* Social proof */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-10 text-sm text-light font-body">
          <span>⭐ 4,9 Google</span>
          <span className="opacity-40">·</span>
          <span>1 500+ pacjentów</span>
          <span className="opacity-40">·</span>
          <span>10 lat doświadczenia</span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="gold" size="xl" asChild>
            <a href="#kontakt">Umów wizytę</a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="#uslugi">Zobacz nasze usługi</a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-down">
        <ChevronDown className="w-8 h-8 text-primary-foreground opacity-50" aria-hidden="true" />
      </div>
    </section>
  );
}
