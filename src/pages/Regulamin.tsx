import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';

export default function Regulamin() {
  return (
    <>
      <SEOHead
        title="Regulamin — SmileArt Dental Kraków"
        description="Regulamin korzystania z usług SmileArt Dental Klinika Stomatologiczna w Krakowie."
        canonical="https://smileartdental.pl/regulamin"
      />
      <section className="bg-navy pt-20 pb-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-light text-sm font-body mb-2">
            <Link to="/" className="hover:text-gold transition-colors">Strona główna</Link> / Regulamin
          </p>
          <h1 className="font-heading text-3xl md:text-4xl text-primary-foreground">Regulamin</h1>
        </div>
      </section>
      <main id="main" className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-3xl font-body text-muted-foreground leading-relaxed space-y-6">
          <h2 className="font-heading text-2xl text-foreground">§1 Postanowienia ogólne</h2>
          <p>Niniejszy regulamin określa zasady korzystania z usług SmileArt Dental Klinika Stomatologiczna, ul. Józefa 14/2, 31-056 Kraków, NIP: 677-234-56-78.</p>

          <h2 className="font-heading text-2xl text-foreground">§2 Umawianie wizyt</h2>
          <p>Wizyty można umawiać telefonicznie (+48 12 345 67 89), przez formularz na stronie, e-mail lub WhatsApp. Rezerwacja wizyty jest bezpłatna.</p>

          <h2 className="font-heading text-2xl text-foreground">§3 Odwoływanie wizyt</h2>
          <p>Prosimy o odwoływanie wizyt co najmniej 24 godziny przed planowanym terminem. Trzykrotne nieodwołanie wizyty może skutkować koniecznością wniesienia kaucji przy kolejnej rezerwacji.</p>

          <h2 className="font-heading text-2xl text-foreground">§4 Płatności</h2>
          <p>Akceptujemy płatności gotówką, kartą oraz BLIK. Oferujemy raty 0% przez MediRaty i Twisto. Szczegółowy cennik dostępny jest na stronie w zakładce Usługi i cennik.</p>

          <h2 className="font-heading text-2xl text-foreground">§5 Reklamacje</h2>
          <p>Reklamacje prosimy zgłaszać na adres kontakt@smileartdental.pl. Reklamacja zostanie rozpatrzona w ciągu 14 dni roboczych.</p>

          <h2 className="font-heading text-2xl text-foreground">§6 Prawo właściwe</h2>
          <p>W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają przepisy prawa polskiego. Sądem właściwym jest sąd powszechny w Krakowie.</p>
        </div>
      </main>
    </>
  );
}
