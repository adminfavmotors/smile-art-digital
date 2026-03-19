import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';

export default function PolitykaPriv() {
  return (
    <>
      <SEOHead
        title="Polityka prywatności — SmileArt Dental Kraków"
        description="Polityka prywatności SmileArt Dental. Dowiedz się, jak przetwarzamy Twoje dane osobowe."
        canonical="https://smileartdental.pl/polityka-prywatnosci"
      />
      <section className="bg-navy pt-20 pb-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-light text-sm font-body mb-2">
            <Link to="/" className="hover:text-gold transition-colors">Strona główna</Link> / Polityka prywatności
          </p>
          <h1 className="font-heading text-3xl md:text-4xl text-primary-foreground">Polityka prywatności</h1>
        </div>
      </section>
      <main id="main" className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-3xl font-body text-muted-foreground leading-relaxed space-y-6">
          <h2 className="font-heading text-2xl text-foreground">1. Administrator danych</h2>
          <p>Administratorem danych osobowych jest SmileArt Dental Klinika Stomatologiczna, ul. Józefa 14/2, 31-056 Kraków, NIP: 677-234-56-78, email: kontakt@smileartdental.pl.</p>

          <h2 className="font-heading text-2xl text-foreground">2. Cele przetwarzania</h2>
          <p>Dane osobowe przetwarzane są w celu: realizacji usług stomatologicznych, obsługi zapytań i rezerwacji wizyt, marketingu bezpośredniego (za zgodą), wypełnienia obowiązków prawnych.</p>

          <h2 className="font-heading text-2xl text-foreground">3. Podstawa prawna</h2>
          <p>Podstawą prawną przetwarzania jest: zgoda (art. 6 ust. 1 lit. a RODO), wykonanie umowy (art. 6 ust. 1 lit. b RODO), obowiązek prawny (art. 6 ust. 1 lit. c RODO), uzasadniony interes administratora (art. 6 ust. 1 lit. f RODO).</p>

          <h2 className="font-heading text-2xl text-foreground">4. Prawa użytkownika</h2>
          <p>Masz prawo do: dostępu do danych, sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia danych, wniesienia sprzeciwu oraz cofnięcia zgody. Aby skorzystać z tych praw, skontaktuj się z nami: kontakt@smileartdental.pl.</p>

          <h2 className="font-heading text-2xl text-foreground">5. Okres przechowywania</h2>
          <p>Dane przechowujemy przez okres niezbędny do realizacji celów przetwarzania, nie dłużej niż wymagają tego przepisy prawa (dokumentacja medyczna — 20 lat, dane marketingowe — do cofnięcia zgody).</p>

          <h2 className="font-heading text-2xl text-foreground">6. Kontakt</h2>
          <p>W sprawach związanych z ochroną danych osobowych prosimy o kontakt: kontakt@smileartdental.pl lub pisemnie na adres kliniki.</p>
        </div>
      </main>
    </>
  );
}
