import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Correo invalido",
  }),
  password: z.string().min(3, { message: "Contraseña requerida" }),
});

export const RegisterSchema = z.object({
    email: z.string().email({
      message: "Correo es requerido",
    }),
    password: z.string().min(6, { message: "Minimo 6 caracteres" }),
    name: z.string().min(1, { message: "Nombre es requerido" }),
  });
