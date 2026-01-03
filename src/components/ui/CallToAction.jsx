import { useNavigate } from "react-router-dom";
import Button from "./Button";

const CallToAction = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-(--color-primary-light) text-white py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Vuoi far parte della Virtus?
        </h2>
        <p className="text-lg mb-8">
          Unisciti a oltre 450 atleti che credono nei nostri valori
        </p>
        <div className="flex gap-4 justify-center">
          <Button
            className="bg-(--color-bg-card) text-(--color-primary) px-8 py-3 rounded-lg font-bold hover:bg-(--color-bg-main) transition"
            onClick={() => navigate("/information")}
          >
            Contattaci
          </Button>
          <button className="border-2 border-(--color-bg-card) text-white px-8 py-3 rounded-lg font-bold hover:bg-(--color-primary) transition">
            Scarica il modulo
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
