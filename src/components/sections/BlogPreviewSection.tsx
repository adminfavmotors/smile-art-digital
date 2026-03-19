import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';

export default function BlogPreviewSection() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-4 reveal">Wiedza, która pomaga</h2>
          <p className="text-muted-foreground text-lg font-body reveal" data-delay="0.1">
            Wskazówki naszych lekarzy o zdrowiu zębów
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPosts.map((post, i) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="reveal group bg-card rounded-lg overflow-hidden shadow-card hover:-translate-y-1.5 transition-all duration-300 hover:shadow-card-hover"
              data-delay={String(i * 0.1)}
            >
              <div className="h-48 bg-navy flex items-center justify-center relative">
                <svg width="60" height="60" viewBox="0 0 40 40" fill="none" aria-hidden="true" className="opacity-20">
                  <path d="M20 5c-6 0-8 4-8 8 0 6 4 12 6 16 .5 1 1 2 2 2s1.5-1 2-2c2-4 6-10 6-16 0-4-2-8-8-8z" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
              <div className="p-6">
                <span className="inline-block bg-accent-light text-foreground text-xs font-body font-bold px-2 py-1 rounded-full mb-3">{post.category}</span>
                <p className="text-muted-foreground text-xs font-body mb-2">{post.date}</p>
                <h3 className="font-heading text-lg text-foreground mb-2 group-hover:text-gold transition-colors">{post.title}</h3>
                <p className="text-muted-foreground text-sm font-body line-clamp-2">{post.excerpt}</p>
                <span className="text-gold text-sm font-body font-semibold mt-3 inline-block">Czytaj dalej →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/blog" className="text-gold font-body font-semibold hover:underline text-lg">
            → Zobacz wszystkie artykuły
          </Link>
        </div>
      </div>
    </section>
  );
}
