'use client'

import { useRouter } from "@/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import FormErrors from "../_components/FormErrors"

export default function LoginPage() {
    const router = useRouter()

    const schema = z.object({
        first_name: z.string().min(3, {
            message: "Name must be between 3 and 20 characters",
        }).max(20),
        last_name: z.string().min(3, {
            message: "Surname must be between 3 and 20 characters",
        }).max(20),
        password: z.string().min(6, {
            message: "Password must be between 6 and 12 characters",
        }).max(12),
        email: z.string().email({
            message: "Please enter a valid email address",
        }),
    });

    const { register, handleSubmit, formState: {errors} } = useForm({ resolver: zodResolver(schema) })

    // async function handleSubmit(event) {
    //     event.preventDefault()

    //     const formData = new FormData(event.currentTarget)

    //     const first_name = formData.get("first_name")
    //     const last_name = formData.get("last_name")
    //     const email = formData.get('email')
    //     const password = formData.get('password')

    //     try {
    //         const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/auth/register', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 first_name,
    //                 last_name,
    //                 email,
    //                 password
    //             }),
    //         })

    //         if (response.ok) {
    //             // router.push('/')
    //             console.log(response)
    //         } else {
    //             // Handle errors
    //             console.log(response.status, " status")
    //         }

    //     } catch (error) {
    //         console.log('Error ... ', error)
    //     }
    // }

    async function submitData(data) {
        try {
            console.log(data)
        } catch (error) {
            console.error(error)
            // throw new Error(formatZodError(error))
        }
    }

    return (
        <form onSubmit={handleSubmit(submitData)} className='className="w-full max-w-[320px] mb-4 mx-auto'>
            <div className="my-8 flex flex-col gap-4">
                <input
                    type="text"
                    name="first_name"
                    placeholder='First name'
                    className='p-2 bg-transparent border rounded-md outline-teal-500'
                    {...register("first_name")}
                />
                {errors.first_name && <FormErrors error={errors.first_name.message} />}
                <input
                    type="text"
                    name="last_name"
                    placeholder='Last name'
                    className='p-2 bg-transparent border rounded-md outline-teal-500'
                    {...register("last_name")}
                />
                {errors.last_name && <FormErrors error={errors.last_name.message} />}
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className='p-2 bg-transparent border rounded-md outline-teal-500'
                    {...register("email")}
                />
                {errors.email && <FormErrors error={errors.email.message} />}
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className='p-2 bg-transparent border rounded-md outline-teal-500'
                    {...register("password")}
                />
                {errors.password && <FormErrors error={errors.password.message} />}
                <button type="submit">Register</button>
            </div>
        </form>
    )
}