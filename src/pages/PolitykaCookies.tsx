import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';

export default function PolitykaCookies() {
  return (
    <>
      <SEOHead
        title="Polityka cookies — SmileArt Dental Kraków"
        description="Polityka cookies SmileArt Dental. Informacje o plikach cookies stosowanych na naszej stronie."
        canonical="https://smileartdental.pl/polityka-cookies"
      />
      <section className="bg-navy pt-20 pb-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-light text-sm font-body mb-2">
            <Link to="/" className="hover:text-gold transition-colors">Strona główna</Link> / Polityka cookies
          </p>
          <h1 className="font-heading text-3xl md:text-4xl text-primary-foreground">Polityka cookies</h1>
        </div>
      </section>
      <main id="main" className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-3xl font-body text-muted-foreground leading-relaxed space-y-6">
          <h2 className="font-heading text-2xl text-foreground">Czym są pliki cookies?</h2>
          <p>Pliki cookies to niewielkie pliki tekstowe zapisywane na Twoim urządzeniu podczas odwiedzania naszej strony.</p>

          <h2 className="font-heading text-2xl text-foreground">Rodzaje cookies</h2>
          <h3 className="font-body font-bold text-foreground">Niezbędne</h3>
          <p>Konieczne do prawidłowego działania strony. Nie wymagają zgody.</p>
          <h3 className="font-body font-bold text-foreground">Analityczne</h3>
          <p>Pozwalają nam analizować ruch na stronie (Google Analytics). Pomagają ulepszać stronę.</p>
          <h3 className="font-body font-bold text-foreground">Marketingowe</h3>
          <p>Służą do wyświetlania spersonalizowanych reklam (Google Ads, Facebook Pixel).</p>

          <h2 className="font-heading text-2xl text-foreground">Zarządzanie cookies</h2>
          <p>Możesz zmienić ustawienia cookies w swojej przeglądarce lub skorzystać z naszego bannera cookies na stronie.</p>

          <h2 className="font-heading text-2xl text-foreground">Kontakt</h2>
          <p>Pytania dotyczące cookies kieruj na: kontakt@smileartdental.pl</p>
        </div>
      </main>
    </>
  );
}
