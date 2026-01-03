import React from "react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

const fakeHighlights = [
  {
    id: 1,
    title: "Vittoria 3-0",
    description: "Grande prestazione della squadra A!",
  },
  {
    id: 2,
    title: "Nuovo acquisto",
    description: "Benvenuto al giovane talento Marco Rossi.",
  },
  {
    id: 3,
    title: "Partita del weekend",
    description: "ASD Piemonte Calcio vs Torino U18",
  },
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Benvenuto in ASD Piemonte Calcio
      </h1>
      <p className="text-center mb-10 text-gray-600">
        Questo è un sito demo per allenarti su React, Tailwind e form con
        validazione Zod.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {fakeHighlights.map((item) => (
          <Card key={item.id}>
            <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button onClick={() => navigate("/teams")}>Scopri le squadre</Button>
      </div>
    </section>
  );
};

export default Home;
