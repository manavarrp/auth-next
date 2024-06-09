"use server";

import { LoginSchema } from "@/shemas";
import { z } from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);

    if(!validatedFields.success) {
        return {
            error: "Campos invalidos!",
           
        }
    }
    return {success : "Login exitoso!"}
}