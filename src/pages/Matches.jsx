import React from "react";
import Card from "../components/ui/Card";

const fakeMatches = [
  {
    id: 1,
    home: "ASD Piemonte A",
    away: "Juventus Primavera",
    date: "10/01/2026",
  },
  { id: 2, home: "ASD Piemonte B", away: "Torino U18", date: "12/01/2026" },
];

const Matches = () => {
  return (
    <section className="container mx-auto py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Prossime partite</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fakeMatches.map((match) => (
          <Card key={match.id} className="text-center">
            <p className="font-semibold">
              {match.home} vs {match.away}
            </p>
            <p className="text-gray-600">{match.date}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Matches;
