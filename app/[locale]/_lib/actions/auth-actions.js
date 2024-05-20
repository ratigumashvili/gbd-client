"use server"

import { z } from "zod"

const schemaRegister = z.object({
    name: z.string().min(3).max(20, {
        message: "Username must be between 3 and 20 characters",
    }),
    password: z.string().min(6).max(100, {
        message: "Password must be between 6 and 100 characters",
    }),
    email: z.string().email({
        message: "Please enter a valid email address",
    }),
});

export async function loginUserAction(prevState, formData) {

    const fields = {
        email: formData.get("email"),
        password: formData.get("password")
    }

    return {
        ...prevState,
        data: fields
    }
}


export async function registerUserAction(prevState, formData) {

    const validatedFields = schemaRegister.safeParse({
        name: formData.get("name"),
        password: formData.get("password"),
        email: formData.get("email"),
    });

    if (!validatedFields.success) {
        return {
            ...prevState,
            zodErrors: validatedFields.error.flatten().fieldErrors,
            message: "Missing Fields. Failed to Register.",
        };
    } 
    
    return {
        ...prevState,
        data: validatedFields,
    };
}