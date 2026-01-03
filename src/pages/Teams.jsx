import React from "react";
import Card from "../components/ui/Card";

const fakeTeams = [
  { id: 1, name: "ASD Piemonte A" },
  { id: 2, name: "ASD Piemonte B" },
  { id: 3, name: "Torino U18" },
];

const Teams = () => {
  return (
    <section className="container mx-auto py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Le nostre squadre</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {fakeTeams.map((team) => (
          <Card key={team.id} className="text-center">
            <h3 className="font-semibold text-xl">{team.name}</h3>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Teams;
