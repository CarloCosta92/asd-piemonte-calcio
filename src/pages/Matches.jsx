import Button from "../components/ui/Button";
import { news } from "../data/mockData";
import { Calendar, ArrowRight } from "lucide-react";

const News = () => {
  const featuredNews = news.find((n) => n.featured);
  const otherNews = news.filter((n) => !n.featured);

  return (
    <div className="min-h-screen bg-(--color-bg-main)">
      {/* Header */}
      <section className="bg-linear-to-r from-(--color-success) to-(--color-primary-light) text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">News e Aggiornamenti</h1>
          <p>Resta aggiornato su tutte le ultime novità della Virtus</p>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center bg-(--color-bg-card) rounded-lg shadow-lg overflow-hidden">
              <img
                src={featuredNews.image}
                alt={featuredNews.title}
                className="w-full h-96 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center gap-2 text-(--color-success) mb-4">
                  <Calendar size={18} />
                  <span className="font-semibold">{featuredNews.date}</span>
                </div>
                <h2 className="text-3xl font-bold text-(--color-text-main) mb-6">
                  {featuredNews.title}
                </h2>
                <p className="text-(--color-text-muted) text-lg mb-8 leading-relaxed">
                  {featuredNews.content}
                </p>
                <Button
                  className="flex items-center gap-2 text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition"
                  style={{ backgroundColor: "var(--color-success)" }}
                >
                  Leggi di più
                  <ArrowRight size={18} />
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-(--color-text-main)">
            Ultimi articoli
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherNews.map((item) => (
              <article
                key={item.id}
                className="bg-(--color-bg-card) rounded-lg shadow hover:shadow-lg transition overflow-hidden group cursor-pointer"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-(--color-text-muted) text-sm mb-3">
                    <Calendar size={16} />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-(--color-text-main) mb-3 group-hover:text-(--color-success) transition">
                    {item.title}
                  </h3>
                  <p className="text-(--color-text-muted) mb-4 line-clamp-2">
                    {item.content}
                  </p>
                  <div className="flex items-center gap-2 text-(--color-success) font-bold group-hover:gap-3 transition">
                    Leggi
                    <ArrowRight size={16} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section
        className="py-16"
        style={{ backgroundColor: "var(--color-success)", color: "white" }}
      >
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Non perderti nulla</h2>
          <p className="mb-8" style={{ color: "var(--color-primary)" }}>
            Iscriviti alla nostra newsletter per ricevere gli aggiornamenti
            direttamente nella tua casella di posta
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="La tua email"
              className="flex-1 px-4 py-3 rounded-lg "
              style={{
                color: "var(--color-text-main)",
                backgroundColor: "var(--color-bg-card)",
              }}
            />
            <Button
              className="px-6 py-3 rounded-lg font-bold hover:opacity-90 transition"
              style={{
                backgroundColor: "var(--color-bg-card)",
                color: "var(--color-success)",
              }}
            >
              Iscriviti
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
