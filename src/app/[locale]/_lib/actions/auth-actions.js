"use server"

import { z } from "zod"

const schemaRegister = z.object({
    first_name: z.string().min(3).max(20, {
        message: "Name must be between 3 and 20 characters",
    }),
    last_name: z.string().min(3).max(20, {
        message: "Surname must be between 3 and 20 characters",
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
        first_name: formData.get("fist_name"),
        last_surname: formData.get("last_name"),
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

    // const {name, surname, email, password} = validatedFields?.data

    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify(name, surname, email, password),
        body: JSON.stringify({
            first_name: validatedFields.fisrt_name,
            last_name: validatedFields.last_name,
            email: validatedFields.email,
            password: validatedFields.password
        })

    })
    
    const data = await response.json()

    console.log("data")
    
    // return {
    //     ...prevState,
    //     data: validatedFields,
    // };
    

}

