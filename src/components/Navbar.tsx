import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Strona główna', path: '/' },
  { label: 'Usługi i cennik', path: '/cennik' },
  { label: 'Blog', path: '/blog' },
  { label: 'Kontakt', path: '/#kontakt' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleContactClick = () => {
    if (isHome) {
      document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-navy text-primary-foreground text-xs py-1.5 text-center font-body relative z-50">
        <a href="tel:+48123456789" className="hover:text-gold transition-colors">
          <Phone className="inline w-3 h-3 mr-1" aria-hidden="true" />
          +48 12 345 67 89
        </a>
        <span className="mx-2 opacity-40">·</span>
        <span>Pn–Pt 9–21</span>
        <span className="mx-2 opacity-40">·</span>
        <span>Sb 9–16</span>
      </div>

      {/* Main nav */}
      <nav
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-navy shadow-lg'
            : isHome
            ? 'bg-transparent'
            : 'bg-navy'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <path d="M16 2C10 2 8 6 8 10c0 6 4 12 6 16 .5 1 1 2 2 2s1.5-1 2-2c2-4 6-10 6-16 0-4-2-8-8-8z" stroke="currentColor" strokeWidth="2" className="text-gold" fill="none"/>
              <path d="M12 8a4 4 0 018 0" stroke="currentColor" strokeWidth="1.5" className="text-gold" fill="none"/>
            </svg>
            <span className="font-heading text-xl text-gold">SmileArt</span>
            <span className="font-heading text-xl text-primary-foreground opacity-80">Dental</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.path === '/#kontakt' ? (
                <Link
                  key={link.path}
                  to={isHome ? '#kontakt' : '/#kontakt'}
                  onClick={handleContactClick}
                  className="text-primary-foreground/80 hover:text-gold transition-colors text-sm font-body font-semibold"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-body font-semibold transition-colors ${
                    location.pathname === link.path
                      ? 'text-gold'
                      : 'text-primary-foreground/80 hover:text-gold'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          <div className="hidden lg:block">
            <Button variant="gold" size="lg" asChild>
              <a href={isHome ? '#kontakt' : '/#kontakt'}>Umów wizytę</a>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-primary-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Zamknij menu' : 'Otwórz menu'}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-50 bg-navy flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          className="absolute top-6 right-6 text-primary-foreground"
          onClick={() => setMobileOpen(false)}
          aria-label="Zamknij menu"
        >
          <X size={32} />
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="text-gold text-2xl font-heading hover:opacity-80 transition-opacity"
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Button variant="gold" size="xl" asChild>
          <a href="/#kontakt" onClick={() => setMobileOpen(false)}>Umów wizytę</a>
        </Button>
      </div>
    </>
  );
}
