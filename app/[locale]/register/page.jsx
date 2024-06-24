'use client'

import { useState } from "react"

import { useRouter } from "@/navigation"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { useTranslations } from "next-intl"

import FormErrors from "../_components/FormErrors"

export default function LoginPage() {

    const [message, setMessage] = useState({
        text: '',
        status: ''
    })

    const router = useRouter()

    const t = useTranslations("Registration")

    const schema = z.object({
        first_name: z.string().min(3, {
            message: t("firstNameError"),
        }).max(20),
        last_name: z.string().min(3, {
            message: t("lastNameError"),
        }).max(20),
        password: z.string().min(6, {
            message: t("passwordError"),
        }).max(12),
        email: z.string().email({
            message: t("emailError"),
        }),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) })

    async function submitData(formData) {
        setMessage({
            text: '',
            status: ''
        })
        try {
            const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    first_name: formData.first_name,
                    last_name: formData.last_name,
                    email: formData.email,
                    password: formData.password
                }),
            })

            if (response.ok) {
                // router.push('/')
                console.log(response)
                setMessage({
                    text: t("userRegistered"),
                    status: 'ok'
                })
            } else {
                setMessage({
                    text: t("invalidEmail"),
                    status: '422'
                })
            }

        } catch (error) {
            console.log('Error ... ', error)
        }
    }

    return (
        <form onSubmit={handleSubmit(submitData)} className='className="w-full max-w-[320px] mb-4 mx-auto'>

            {message && <p className={`${message.status === '422' ? "text-pink-500" : "text-teal-600"} text-sm text-center`}>{message?.text}</p>}

            <div className="my-8 flex flex-col gap-4">
                <input
                    type="text"
                    name="first_name"
                    placeholder={t("first_name")}
                    className='p-2 bg-transparent border rounded-md outline-teal-500'
                    {...register("first_name")}
                />
                {errors.first_name && <FormErrors error={errors.first_name.message} />}
                <input
                    type="text"
                    name="last_name"
                    placeholder={t("last_name")}
                    className='p-2 bg-transparent border rounded-md outline-teal-500'
                    {...register("last_name")}
                />
                {errors.last_name && <FormErrors error={errors.last_name.message} />}
                <input
                    type="email"
                    name="email"
                    placeholder={t("email")}
                    className='p-2 bg-transparent border rounded-md outline-teal-500'
                    {...register("email")}
                />
                {errors.email && <FormErrors error={errors.email.message} />}
                <input
                    type="password"
                    name="password"
                    placeholder={t("password")}
                    className='p-2 bg-transparent border rounded-md outline-teal-500'
                    {...register("password")}
                />
                {errors.password && <FormErrors error={errors.password.message} />}
                <button type="submit" className="button">{t("register")}</button>
            </div>
        </form>
    )
}