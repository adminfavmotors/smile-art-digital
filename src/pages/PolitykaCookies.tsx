import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { absoluteUrl, siteConfig } from '@/lib/site';

export default function PolitykaCookies() {
  return (
    <>
      <SEOHead
        title="Polityka cookies — SmileArt Dental Kraków"
        description="Informacje o plikach cookies i zewnętrznych osadzeniach użytych w portfolio SmileArt Dental."
        canonical={absoluteUrl('/polityka-cookies')}
      />
      <section className="bg-navy pt-20 pb-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-light text-sm font-body mb-2">
            <Link to="/" className="hover:text-gold transition-colors">
              Strona główna
            </Link>{' '}
            / Polityka cookies
          </p>
          <h1 className="font-heading text-3xl md:text-4xl text-primary-foreground">
            Polityka cookies
          </h1>
        </div>
      </section>
      <main id="main" className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-3xl font-body text-muted-foreground leading-relaxed space-y-6">
          <h2 className="font-heading text-2xl text-foreground">1. Zakres stosowania</h2>
          <p>
            Ta strona jest projektem portfolio prezentującym koncept witryny dla marki{' '}
            {siteConfig.name}. Sama aplikacja nie korzysta z narzędzi analitycznych, reklamowych
            ani banera zgód cookies.
          </p>

          <h2 className="font-heading text-2xl text-foreground">2. Pliki techniczne</h2>
          <p>
            Podczas korzystania ze strony przeglądarka może przechowywać dane techniczne
            niezbędne do poprawnego działania sesji, pamięci podręcznej lub ustawień renderowania.
          </p>

          <h2 className="font-heading text-2xl text-foreground">3. Treści zewnętrzne</h2>
          <p>
            Strona zawiera osadzone treści podmiotów trzecich, w szczególności mapę Google.
            Dostawcy takich usług mogą ustawiać własne cookies lub przetwarzać dane zgodnie z
            ich politykami prywatności.
          </p>

          <h2 className="font-heading text-2xl text-foreground">4. Zarządzanie cookies</h2>
          <p>
            Możesz ograniczyć lub usunąć cookies w ustawieniach swojej przeglądarki. Wyłączenie
            cookies podmiotów zewnętrznych może wpłynąć na działanie osadzonych map lub linków.
          </p>

          <h2 className="font-heading text-2xl text-foreground">5. Kontakt</h2>
          <p>
            Pytania dotyczące tej strony lub użytych osadzeń możesz kierować na adres:{' '}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-gold underline">
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </div>
      </main>
    </>
  );
}
