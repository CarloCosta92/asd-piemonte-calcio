import * as z from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Inserisci un nome valido"),
  email: z.string().email("Email non valida"),
  message: z.string().min(10, "Il messaggio deve avere almeno 10 caratteri"),
});
