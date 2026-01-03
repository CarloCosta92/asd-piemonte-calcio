import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Users, Trophy, Zap, Heart } from "lucide-react";
import { clubData } from "../data/mockData";
import Button from "../components/ui/Button";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-(--color-success) to-(--color-primary-light) text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-pattern"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">{clubData.slogan}</h1>
          <p className="text-xl mb-8 ">{clubData.name}</p>
          <Button
            className="bg-(--color-bg-card) text-(--color-primary) px-8 py-3 rounded-lg font-bold hover:bg-(--color-bg-main) transition transform hover:scale-105"
            onClick={() => navigate("/information")}
          >
            Scopri di più
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-(--color-bg-main) py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clubData.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold text-(--color-primary) mb-2">
                  {stat.value}
                </div>
                <div className="text-(--color-text-muted)">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-(--color-text-main)">
                Chi siamo
              </h2>
              <p className="text-(--color-text-muted) text-lg mb-8 leading-relaxed">
                {clubData.description}
              </p>
              <div className="space-y-4">
                {[Trophy, Users, Zap, Heart].map((Icon, i) => (
                  <div key={i} className="flex gap-3">
                    <Icon className="text-(--color-primary) shrink-0" />
                    <span>
                      {
                        [
                          "Strutture moderne e impianti di qualità",
                          "Staff qualificato e esperienza pluriennale",
                          "Metodo innovativo basato sulla passione",
                          "Valori di squadra e crescita personale",
                        ][i]
                      }
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-linear-to-br from-(--color-primary-light) to-(--color-primary) rounded-2xl h-96 flex items-center justify-center p-8">
              <img
                src="https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg"
                alt="Team"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Squadre Preview */}
      <section className="bg-(--color-bg-main) py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-2">Le nostre squadre</h2>
            <p className="text-(--color-text-muted)">
              7 categorie dal settore giovanile al professionismo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((_, idx) => (
              <div
                key={idx}
                className="bg-(--color-bg-card) p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <div className="text-sm font-bold text-(--color-primary) mb-2">
                  SQUADRA {idx + 1}
                </div>
                <h3 className="font-bold text-(--color-text-main)">
                  {
                    [
                      "Prima Squadra - Serie D",
                      "Juniores - U19",
                      "Allievi - U17",
                      "Giovanissimi - U15",
                    ][idx]
                  }
                </h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/teams"
              className="inline-flex items-center gap-2 text-(--color-primary) font-bold hover:gap-3 transition"
            >
              Vedi tutte le squadre
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
