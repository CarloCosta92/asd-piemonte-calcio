import React from "react";

const Footer = () => {
  return (
    <footer className="bg-(--color-primary) text-white py-6 mt-8">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} ASD Piemonte Calcio. Tutti i diritti
          riservati.
        </p>
        <p className="mt-2 text-(--color-bg-main) font-medium">
          Contatti: info@asdpiemontecalcio.it
        </p>
      </div>
    </footer>
  );
};

export default Footer;
