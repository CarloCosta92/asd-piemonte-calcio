import { useParams, Link } from "react-router-dom";
import { teams } from "../data/mockData";
import { Users, Calendar, ArrowLeft } from "lucide-react";

const TeamDetail = () => {
  const { id } = useParams();
  const team = teams.find((t) => String(t.id) === id);

  if (!team) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Squadra non trovata
      </div>
    );
  }

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <section
        className="text-white py-12"
        style={{ backgroundColor: `var(${team.color})` }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <Link
            to="/teams"
            className="flex items-center gap-2 mb-6 text-sm opacity-90 hover:opacity-100"
          >
            <ArrowLeft size={16} />
            Torna alle squadre
          </Link>

          <h1 className="text-4xl font-bold">{team.name}</h1>
          <p className="opacity-90 mt-2">
            Categoria {team.category} · {team.age}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Staff tecnico</h2>
              <ul className="space-y-2 text-(--color-text-muted)">
                <li>
                  Allenatore: <strong>{team.coach}</strong>
                </li>
                <li>Vice allenatore</li>
                <li>Preparatore atletico</li>
                <li>Dirigente accompagnatore</li>
              </ul>
            </div>

            {/* Allenamenti */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Allenamenti</h2>
              <div className="flex items-center gap-3 text-(--color-text-muted)">
                <Calendar size={18} />
                <span>Martedì e Giovedì · 18:00 – 19:30</span>
              </div>
            </div>

            {/* Rosa  */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Composizione della rosa
              </h2>

              <div className="grid sm:grid-cols-2 gap-6 text-(--color-text-muted)">
                <div>
                  <h3 className="font-semibold mb-2">Portieri</h3>
                  <p>3 atleti</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Difensori</h3>
                  <p>8 atleti</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Centrocampisti</h3>
                  <p>8 atleti</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Attaccanti</h3>
                  <p>6 atleti</p>
                </div>
              </div>

              <p className="mt-4 text-sm text-(--color-text-muted)">
                * La composizione della rosa può variare durante la stagione
                sportiva.
              </p>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="bg-(--color-bg-card) p-6 rounded-lg shadow-lg h-fit">
            <h3 className="font-bold mb-4">Info squadra</h3>

            <div className="space-y-3 text-(--color-text-muted)">
              <div className="flex items-center gap-2">
                <Users size={16} />
                {team.players} atleti tesserati
              </div>
              <div>Categoria: {team.category}</div>
              <div>Fascia età: {team.age}</div>
            </div>

            <Link
              to="/information"
              className="block mt-6 text-center text-white py-2 rounded-lg font-bold"
              style={{ backgroundColor: `var(${team.color})` }}
            >
              Richiedi informazioni
            </Link>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default TeamDetail;
