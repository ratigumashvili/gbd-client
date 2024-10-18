'use client'

import { useState } from "react"

import Link from "next/link"

import { useRouter } from "@/navigation"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import bcrypt from "bcryptjs";

import { toast } from "react-toastify"

import { useTranslations } from "next-intl"

import FormErrors from "../_components/FormErrors"
import { detectLocale, toastOptions } from "../_lib/helpers"

const salt = bcrypt.genSaltSync(10)

export default function RegisterPage({ params }) {

    const [isChecked, setIsChecked] = useState(false)

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

        const hashedPassword = bcrypt.hashSync(formData.password, salt)

        try {
            const response = await fetch(process.env.NEXT_PUBLIC_REGISTER_URL, {
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
                toast.success(t("userRegistered"), toastOptions)
                router.replace('/')
            }

            if (response.status === 422) {
                toast.error(t("invalidEmail"))
            }

            if (response.status === 403) {
                toast.error(t("error"))
            }

        } catch (error) {
            console.log('Error... ', error)
        }
    }

    return (
        <div className="py-4">
            <h2 className={`text-2xl font-medium mb-4 ${detectLocale(params.locale)}`}>{t("register")}</h2>

            <form onSubmit={handleSubmit(submitData)} className='className="w-full max-w-xl mb-4'>

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
                    <div className="flex items-center gap-2 text-sm">
                        <input
                            type="checkbox"
                            name="checkbox"
                            id="checkbox"
                            value={isChecked}
                            onChange={() => setIsChecked(!isChecked)}
                        />
                        <label htmlFor="checkbox">
                            <Link href={params.locale === 'ka' ? 'https://iliauni.edu.ge/ge/privacy-policy' : 'https://iliauni.edu.ge/en/privacy-policy'} target="blank">
                                {t("confirm")}
                            </Link>
                        </label>
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting || !isChecked}
                        className="button !py-3 disabled:pointer-events-none disabled:opacity-50"
                    >
                        {t("register")}
                    </button>
                </div>
            </form>
        </div>
    )
}