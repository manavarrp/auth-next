import { RegisterSchema } from "@/shemas";
import { z } from "zod";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if(!validatedFields.success) {
        return {
            error: "Campos invalidos!",
           
        }
    }
    return {success : "Registro exitoso!"}
}