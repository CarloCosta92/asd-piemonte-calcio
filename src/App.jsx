import "./App.css";
import DefaultLayout from "./layout/DefaultLayout";

function App() {
  return (
    <DefaultLayout>
      <h1 className="text-3xl font-bold text-center mt-8">
        Benvenuto in ASD Piemonte Calcio
      </h1>
      <p className="text-center mt-4 text-gray-600">
        Questo è il sito demo per allenamento React + Tailwind + Zod
      </p>
    </DefaultLayout>
  );
}

export default App;
