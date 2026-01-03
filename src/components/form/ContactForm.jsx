import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "../ui/InputField";
import TextAreaField from "../ui/TextAreaField";
import Button from "../ui/Button";
import Toast from "../ui/Toast";
import { contactSchema } from "../../schemas/contactSchema";

const ContactForm = () => {
  const [toast, setToast] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    try {
      console.log("Form inviato:", data);
      setToast({ message: "Messaggio inviato con successo!", type: "success" });
      reset();
    } catch (err) {
      setToast({ message: "Errore nell'invio del messaggio!", type: "error" });
    }
  };

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <InputField
          label="Nome"
          placeholder="Inserisci il tuo nome"
          error={errors.name?.message}
          {...register("name")}
        />
        <InputField
          label="Email"
          placeholder="Inserisci la tua email"
          type="email"
          error={errors.email?.message}
          {...register("email")}
        />
        <TextAreaField
          label="Messaggio"
          placeholder="Scrivi qui il tuo messaggio..."
          rows={5}
          error={errors.message?.message}
          {...register("message")}
        />
        <Button type="submit" variant="primary" disabled={isSubmitting}>
          {isSubmitting ? "Invio..." : "Invia Messaggio"}
        </Button>
      </form>
    </>
  );
};

export default ContactForm;
