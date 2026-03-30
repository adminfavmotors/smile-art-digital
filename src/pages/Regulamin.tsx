import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { absoluteUrl, siteConfig } from '@/lib/site';

export default function Regulamin() {
  return (
    <>
      <SEOHead
        title="Regulamin — SmileArt Dental Kraków"
        description="Zasady korzystania z demonstracyjnej strony portfolio SmileArt Dental."
        canonical={absoluteUrl('/regulamin')}
      />
      <section className="bg-navy pt-20 pb-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-light text-sm font-body mb-2">
            <Link to="/" className="hover:text-gold transition-colors">
              Strona główna
            </Link>{' '}
            / Regulamin
          </p>
          <h1 className="font-heading text-3xl md:text-4xl text-primary-foreground">Regulamin</h1>
        </div>
      </section>
      <main id="main" className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-3xl font-body text-muted-foreground leading-relaxed space-y-6">
          <h2 className="font-heading text-2xl text-foreground">§1 Postanowienia ogólne</h2>
          <p>
            Niniejsza strona jest projektem demonstracyjnym prezentującym koncept witryny dla
            marki {siteConfig.name}. Zawartość ma charakter portfolio i informacyjny.
          </p>

          <h2 className="font-heading text-2xl text-foreground">§2 Zakres działania</h2>
          <p>
            Witryna nie prowadzi rzeczywistej sprzedaży usług, nie zawiera systemu płatności i nie
            służy do zawierania umów o świadczenie usług medycznych online.
          </p>

          <h2 className="font-heading text-2xl text-foreground">§3 Formularze i kontakt</h2>
          <p>
            Formularz kontaktowy oraz przyciski CTA pełnią funkcję prezentacyjną. Wysłanie danych
            w formularzu nie powoduje utworzenia rezerwacji, konta użytkownika ani zgłoszenia do
            obsługi.
          </p>

          <h2 className="font-heading text-2xl text-foreground">§4 Linki i usługi zewnętrzne</h2>
          <p>
            Strona może zawierać linki oraz osadzone elementy zewnętrzne, takie jak mapy lub
            profile społecznościowe. Korzystanie z nich odbywa się na zasadach określonych przez
            ich dostawców.
          </p>

          <h2 className="font-heading text-2xl text-foreground">§5 Prawa autorskie</h2>
          <p>
            Układ strony, warstwa wizualna i implementacja front-endowa stanowią element projektu
            portfolio i nie mogą być kopiowane w całości bez zgody autora.
          </p>

          <h2 className="font-heading text-2xl text-foreground">§6 Kontakt</h2>
          <p>
            W sprawach dotyczących tej strony skontaktuj się przez:{' '}
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
