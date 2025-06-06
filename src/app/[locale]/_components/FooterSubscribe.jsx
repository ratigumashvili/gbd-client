"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import FormErrors from "./FormErrors"

import { useTranslations } from "next-intl"

import { toast } from 'react-toastify'
import { toastOptions } from "../_lib/helpers"

function FooterSubscribe() {

    const t = useTranslations("Footer")

    const schema = z.object({
        email: z.string().email({
            message: t("emailError"),
        })
    });

    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(schema) })

    async function submitData(formData) {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/subscribe`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    email: formData.email,
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                toast.error("Subscription failed")
                console.log(errorData)
                return;
            }

            const result = await response.json();
            toast.success(result?.message, toastOptions)
        } catch (error) {
            console.error("Error submitting subscription:", error);
        }
        reset()
    }

    return (
        <div className="flex flex-col gap-4 p-6 border border-teal-600 rounded-md dark:border-slate-400">
            <div>
                <h2 className="text-center sm:text-left">{t("subscribeTitle")}</h2>
                <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-sm sm:text-left font-firaGo">
                    {t("subscribeText")}
                </p>
            </div>
            <form onSubmit={handleSubmit(submitData)} className="flex flex-col gap-2 font-firaGo">
                <div className="flex gap-2">
                    <input
                        type="email"
                        name="email"
                        {...register("email")}
                        placeholder={t("subscribePlaceholder")}
                        className="w-full p-2 border focus:outline-none dark:border-0 dark:bg-slate-700 placeholder:text-sm"
                    />
                    <button
                        disabled={isSubmitting}
                        className={`button ${isSubmitting && 'pointer-events-none opacity-50'}`}
                    >
                        {t("subscribeBtn")}
                    </button>
                </div>
                {errors.email && <FormErrors error={errors.email.message} />}
            </form>
        </div>
    )
}

export default FooterSubscribe