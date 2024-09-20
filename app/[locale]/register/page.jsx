'use client'

import { useState } from "react"
import { useRouter } from "@/navigation"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import bcrypt from "bcryptjs";

import { useTranslations } from "next-intl"

import FormErrors from "../_components/FormErrors"
import { detectLocale } from "../_lib/helpers"

const salt = bcrypt.genSaltSync(10)

export default function LoginPage({params}) {

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
        institution: z.string(),
        interests: z.string()
    });

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(schema) })

    async function submitData(formData) {

        setMessage({
            text: '',
            status: ''
        })

        const hashedPassword = bcrypt.hashSync(formData.password, salt)

        try {
            const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    first_name: formData.first_name,
                    last_name: formData.last_name,
                    email: formData.email,
                    password: hashedPassword,
                    institution: formData.institution,
                    interests: formData.institution,
                }),
            })

            if (response.ok) {
                // router.push('/')
                console.log(response)
                setMessage({
                    text: t("userRegistered"),
                    status: 'ok'
                })
            }
            if (response.status === 404) {
                setMessage({
                    text: t("error"),
                    status: '404'
                })
            }
            else {
                setMessage({
                    text: t("invalidEmail"),
                    status: '422'
                })
            }

        } catch (error) {
            console.log('Error... ', error)
            setMessage({
                text: t("error"),
                status: '404'
            })
        }
    }

    return (
        <div className="py-4">
            <h2 className={`text-2xl font-medium mb-4 ${detectLocale(params.locale)}`}>{t("register")}</h2>

            <form onSubmit={handleSubmit(submitData)} className='className="w-full max-w-xl mb-4'>

                {message && <p className={`${message.status === '422' || message.status === '404' ? "text-pink-500" : "text-teal-600"} text-sm text-center`}>{message?.text}</p>}

                <div className="my-8 flex flex-col gap-4">
                    <input
                        type="text"
                        name="first_name"
                        placeholder={t("first_name")}
                        className='p-2 bg-transparent border rounded-md outline-teal-500 placeholder:text-sm'
                        {...register("first_name")}
                    />
                    {errors.first_name && <FormErrors error={errors.first_name.message} />}
                    <input
                        type="text"
                        name="last_name"
                        placeholder={t("last_name")}
                        className='p-2 bg-transparent border rounded-md outline-teal-500 placeholder:text-sm'
                        {...register("last_name")}
                    />
                    {errors.last_name && <FormErrors error={errors.last_name.message} />}
                    <input
                        type="email"
                        name="email"
                        placeholder={t("email")}
                        className='p-2 bg-transparent border rounded-md outline-teal-500 placeholder:text-sm'
                        {...register("email")}
                    />
                    {errors.email && <FormErrors error={errors.email.message} />}
                    <input
                        type="text"
                        name="institution"
                        placeholder={t("institution")}
                        className='p-2 bg-transparent border rounded-md outline-teal-500 placeholder:text-sm'
                        {...register("institution")}
                    />
                    <textarea
                        name="interests"
                        placeholder={t("interests")}
                        className='p-2 bg-transparent border rounded-md outline-teal-500 placeholder:text-sm'
                        {...register("interests")}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder={t("password")}
                        className='p-2 bg-transparent border rounded-md outline-teal-500 placeholder:text-sm'
                        {...register("password")}
                    />
                    {errors.password && <FormErrors error={errors.password.message} />}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`button ${isSubmitting && 'pointer-events-none opacity-50'}`} >
                        {t("register")}
                    </button>
                </div>
            </form>
        </div>
    )
}