import { Link } from 'react-router-dom';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { siteConfig } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <path
                  d="M16 2C10 2 8 6 8 10c0 6 4 12 6 16 .5 1 1 2 2 2s1.5-1 2-2c2-4 6-10 6-16 0-4-2-8-8-8z"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gold"
                  fill="none"
                />
              </svg>
              <span className="font-heading text-lg text-gold">SmileArt Dental</span>
            </div>
            <p className="text-light text-sm leading-relaxed">
              Nowoczesna klinika stomatologiczna w sercu krakowskiego Kazimierza. Bezbolesne
              zabiegi, transparentne ceny.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-gold mb-4">Nawigacja</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-light hover:text-gold transition-colors">
                  Strona główna
                </Link>
              </li>
              <li>
                <Link to="/cennik" className="text-light hover:text-gold transition-colors">
                  Usługi i cennik
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-light hover:text-gold transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a href="/#kontakt" className="text-light hover:text-gold transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-gold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm text-light">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" aria-hidden="true" />
                {siteConfig.contact.address}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${siteConfig.contact.phoneHref}`}
                  className="hover:text-gold transition-colors"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-gold transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold flex-shrink-0" aria-hidden="true" />
                {siteConfig.contact.hoursFull}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-gold mb-4">Informacje</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/polityka-prywatnosci"
                  className="text-light hover:text-gold transition-colors"
                >
                  Polityka prywatności
                </Link>
              </li>
              <li>
                <Link
                  to="/polityka-cookies"
                  className="text-light hover:text-gold transition-colors"
                >
                  Polityka cookies
                </Link>
              </li>
              <li>
                <Link to="/regulamin" className="text-light hover:text-gold transition-colors">
                  Regulamin
                </Link>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href={siteConfig.contact.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-accent/30 flex items-center justify-center text-gold hover:bg-accent hover:text-primary transition-all"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href={siteConfig.contact.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-accent/30 flex items-center justify-center text-gold hover:bg-accent hover:text-primary transition-all"
              >
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-accent/10 mt-12 pt-8 text-center text-xs text-light">
          © {new Date().getFullYear()} {siteConfig.legalName}. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
}
