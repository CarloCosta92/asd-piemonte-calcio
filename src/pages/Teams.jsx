import { teams } from "../data/mockData";
import { Users, Calendar, User } from "lucide-react";

const Teams = () => {
  return (
    <div className="min-h-screen bg-(--color-bg-main)">
      {/* Header */}
      <section className="bg-linear-to-r from-(--color-primary) to-(--color-primary-light) text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Le nostre squadre</h1>
          <p>
            Sette categorie per accompagnare i nostri atleti dal settore
            giovanile al professionismo
          </p>
        </div>
      </section>

      {/* Teams Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teams.map((team) => (
              <div
                key={team.id}
                className="bg-(--color-bg-card) rounded-lg shadow-lg hover:shadow-xl transition overflow-hidden group"
              >
                {/* Color Bar */}
                <div
                  className="h-2"
                  style={{ backgroundColor: `var(${team.color})` }}
                />

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-(--color-text-main)">
                        {team.name}
                      </h3>
                      <p className="text-sm text-(--color-text-muted) mt-1">
                        {team.category}
                      </p>
                    </div>
                    <span className="bg-(--color-bg-main) text-(--color-text-muted) px-3 py-1 rounded-full text-sm font-semibold">
                      {team.age}
                    </span>
                  </div>

                  <div className="space-y-4 mb-6 border-t pt-6">
                    <div className="flex items-center gap-3 text-(--color-text-muted)">
                      <User size={18} />
                      <div>
                        <div className="text-xs uppercase">Allenatore</div>
                        <div className="font-semibold text-(--color-text-main)">
                          {team.coach}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-(--color-text-muted)">
                      <Users size={18} />
                      <div>
                        <div className="text-xs uppercase">Atleti</div>
                        <div className="font-semibold text-(--color-text-main)">
                          {team.players} giocatori
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 mb-6 pt-6 border-t text-center">
                    <div>
                      <div className="text-2xl font-bold text-(--color-text-main)">
                        {team.players}
                      </div>
                      <div className="text-xs text-(--color-text-muted)">
                        Rosa
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-(--color-primary)">
                        {Math.floor(Math.random() * 15) + 5}
                      </div>
                      <div className="text-xs text-(--color-text-muted)">
                        Vittorie
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-(--color-success)">
                        {Math.floor(Math.random() * 50) + 20}
                      </div>
                      <div className="text-xs text-(--color-text-muted)">
                        Gol
                      </div>
                    </div>
                  </div>

                  <button
                    className="w-full text-white py-2 rounded-lg font-bold transition hover:opacity-90"
                    style={{ backgroundColor: `var(${team.color})` }}
                  >
                    Scopri la rosa
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-(--color-bg-card) py-16 border-t">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Come funziona
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-(--color-bg-main) w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-(--color-primary)" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Iscrizione</h3>
              <p className="text-(--color-text-muted)">
                Contatta la nostra segreteria per le modalità di iscrizione e i
                costi associativi 2025/26
              </p>
            </div>

            <div className="text-center">
              <div className="bg-(--color-bg-main) w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-(--color-success)" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Selezione</h3>
              <p className="text-(--color-text-muted)">
                Partecipa alle prove di selezione con i nostri allenatori
                qualificati
              </p>
            </div>

            <div className="text-center">
              <div className="bg-(--color-bg-main) w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-(--color-error)" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Tesseramento</h3>
              <p className="text-(--color-text-muted)">
                Completa la documentazione e inizia il tuo percorso con la
                Virtus
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Teams;
