import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(3, {
    error: "El nombre tiene que ser de al menos 3 caracteres",
  }),
  email: z.email({
    error: "Por favor ingrese un correo valido",
  }),
  password: z.string().min(6, {
    error: "La contraseña tiene que tener al menos 6 caracteres",
  }),
});

export const loginSchema = z.object({
  email: z.email({
    error: "Por favor ingrese un correo valido",
  }),
  password: z.string().min(6, {
    error: "La contraseña tiene que tener al menos 6 caracteres",
  }),
});
