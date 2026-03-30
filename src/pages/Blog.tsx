import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { blogPosts } from '@/data/blogPosts';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { absoluteUrl } from '@/lib/site';

const cats = ['Wszystkie', 'Profilaktyka', 'Estetyka', 'Implanty', 'Ortodoncja', 'Dla dzieci'];

export default function Blog() {
  const [active, setActive] = useState('Wszystkie');
  useScrollReveal();

  const filtered = active === 'Wszystkie' ? blogPosts : blogPosts.filter((p) => p.category === active);

  return (
    <>
      <SEOHead
        title="Blog stomatologiczny — SmileArt Dental Kraków"
        description="Porady naszych lekarzy — wiedza, która dba o Twoje zęby. Blog SmileArt Dental."
        canonical={absoluteUrl('/blog')}
      />

      <section className="bg-navy pt-20 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-3xl md:text-5xl text-primary-foreground mb-4">
            Blog stomatologiczny
          </h1>
          <p className="text-light text-lg font-body">
            Porady naszych lekarzy — wiedza, która dba o Twoje zęby
          </p>
        </div>
      </section>

      <div className="sticky top-16 z-30 bg-background border-b border-border py-3">
        <div
          className="container mx-auto px-4 flex gap-2 overflow-x-auto"
          style={{ scrollbarWidth: 'none' }}
        >
          {cats.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-body font-semibold transition-all ${
                active === cat ? 'bg-gold text-primary' : 'bg-card text-muted-foreground hover:bg-accent-light'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <main id="main" className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="reveal group bg-card rounded-lg overflow-hidden shadow-card hover:-translate-y-1.5 transition-all duration-300"
                data-delay={String(i * 0.1)}
              >
                <div className="h-48 bg-navy flex items-center justify-center">
                  <svg width="60" height="60" viewBox="0 0 40 40" fill="none" aria-hidden="true" className="opacity-20">
                    <path d="M20 5c-6 0-8 4-8 8 0 6 4 12 6 16 .5 1 1 2 2 2s1.5-1 2-2c2-4 6-10 6-16 0-4-2-8-8-8z" stroke="white" strokeWidth="2" />
                  </svg>
                </div>
                <div className="p-6">
                  <span className="inline-block bg-accent-light text-foreground text-xs font-body font-bold px-2 py-1 rounded-full mb-3">
                    {post.category}
                  </span>
                  <p className="text-muted-foreground text-xs font-body mb-2">{post.date}</p>
                  <h2 className="font-heading text-lg text-foreground mb-2 group-hover:text-gold transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm font-body line-clamp-2">{post.excerpt}</p>
                  <span className="text-gold text-sm font-body font-semibold mt-3 inline-block">
                    Czytaj dalej →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground font-body py-12">
              Brak artykułów w tej kategorii.
            </p>
          )}
        </div>
      </main>
    </>
  );
}
