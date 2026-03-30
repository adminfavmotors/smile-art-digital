import { useParams, Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { blogPosts } from '@/data/blogPosts';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  useScrollReveal();

  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-3xl mb-4">Artykuł nie znaleziony</h1>
          <Link to="/blog" className="text-gold font-body hover:underline">← Wróć do bloga</Link>
        </div>
      </div>
    );
  }

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <SEOHead
        title={`${post.title} — SmileArt Dental`}
        description={post.excerpt}
        canonical={`https://smileartdental.pl/blog/${post.slug}`}
      />

      <section className="bg-navy pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-light text-sm font-body mb-4">
            <Link to="/" className="hover:text-gold transition-colors">Strona główna</Link>
            {' / '}
            <Link to="/blog" className="hover:text-gold transition-colors">Blog</Link>
            {' / '}
            <span className="text-primary-foreground">{post.title}</span>
          </p>
          <span className="inline-block bg-accent/20 border border-accent/30 text-gold text-xs font-body font-bold px-3 py-1 rounded-full mb-4">{post.category}</span>
          <h1 className="font-heading text-2xl md:text-4xl text-primary-foreground mb-4">{post.title}</h1>
          <p className="text-light text-sm font-body">{post.author} · {post.date}</p>
        </div>
      </section>

      <main id="main" className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="relative overflow-hidden rounded-lg mb-10 bg-navy p-8 md:p-10 shadow-card">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(208,169,75,0.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_30%)]" />
            <div className="relative flex min-h-64 flex-col justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-xl">
                <p className="text-gold text-xs font-body font-bold uppercase tracking-[0.35em]">
                  SmileArt Journal
                </p>
                <h2 className="mt-4 font-heading text-2xl md:text-3xl text-primary-foreground">
                  {post.title}
                </h2>
                <p className="mt-4 text-light font-body leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
              <div className="self-start md:self-auto">
                <div className="w-24 h-24 rounded-full border border-accent/30 bg-white/5 backdrop-blur-sm flex items-center justify-center">
                  <svg width="52" height="52" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                    <path d="M20 5c-6 0-8 4-8 8 0 6 4 12 6 16 .5 1 1 2 2 2s1.5-1 2-2c2-4 6-10 6-16 0-4-2-8-8-8z" stroke="currentColor" strokeWidth="2" className="text-gold"/>
                    <path d="M16 12a4 4 0 018 0" stroke="currentColor" strokeWidth="1.5" className="text-primary-foreground"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Article content */}
          <article
            className="prose prose-lg max-w-none font-body text-foreground
              [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:text-foreground
              [&_p]:leading-relaxed [&_p]:mb-4 [&_p]:text-muted-foreground
              [&_a]:text-gold [&_a]:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Mid-article CTA */}
          <div className="bg-accent-light rounded-lg p-8 my-10 text-center">
            <h3 className="font-heading text-xl text-foreground mb-2">Masz pytania?</h3>
            <p className="text-muted-foreground font-body mb-4">Umów bezpłatną konsultację z naszym specjalistą.</p>
            <Button variant="gold" size="lg" asChild>
              <a href="/#kontakt">Kontakt</a>
            </Button>
          </div>

          {/* Author bio */}
          <div className="flex items-center gap-4 p-6 bg-card rounded-lg shadow-card mb-10">
            <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
              <span className="text-gold font-heading text-lg">{post.author.split(' ').slice(-2).map(w => w[0]).join('')}</span>
            </div>
            <div>
              <p className="font-body font-bold text-foreground">{post.author}</p>
              <p className="text-muted-foreground text-sm font-body">SmileArt Dental, Kraków</p>
            </div>
          </div>

          {/* Related posts */}
          <h3 className="font-heading text-2xl text-foreground mb-6">Powiązane artykuły</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {related.map((r) => (
              <Link
                key={r.slug}
                to={`/blog/${r.slug}`}
                className="group bg-card rounded-lg overflow-hidden shadow-card hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-32 bg-navy flex items-center justify-center">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true" className="opacity-20">
                    <path d="M20 5c-6 0-8 4-8 8 0 6 4 12 6 16 .5 1 1 2 2 2s1.5-1 2-2c2-4 6-10 6-16 0-4-2-8-8-8z" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="p-4">
                  <span className="text-xs text-gold font-body font-bold">{r.category}</span>
                  <h4 className="font-heading text-base text-foreground group-hover:text-gold transition-colors mt-1">{r.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
