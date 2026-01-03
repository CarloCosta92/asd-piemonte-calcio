import React from "react";
import ContactForm from "../components/form/ContactForm";

const Contact = () => {
  return (
    <section className="container mx-auto py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Contattaci</h2>

      <div className="max-w-lg mx-auto">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
