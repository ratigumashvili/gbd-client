'use client'

import { useEffect, useRef, useState } from "react"
import { useTranslations } from "next-intl"
import { toast } from "react-toastify"

import { useFullUrl } from "@/src/app/[locale]/_hooks/useFullUrl"
import { copyToClipboard, currentDate, toastOptions } from "@/src/app/[locale]/_lib/helpers"

import Copy from "./icons/Copy"

export default function Cite({ name, editors = [], contributors = [], isSpecie = false }) {

    const [citeElement, setCiteElement] = useState()
    
    const citeRef = useRef()
    
    const fullUrl = useFullUrl()

    const t = useTranslations("Common")

    useEffect(() => {
        setCiteElement(citeRef.current)
    }, [])

    const handleCopyCite = () => {
        copyToClipboard(citeElement.innerText)
        toast.success(t("copied"), toastOptions)
    }

    return (
        <div className='bg-slate-50 dark:bg-slate-600 rounded-md pt-6 pl-6 pb-6 pr-10 mt-8 text-xs relative'>
            <button
                className="absolute right-6 top-6"
                onClick={handleCopyCite}
                title="Copy"
            >
                <Copy width="18" height="18" />
            </button>
            <em><b>{t("citePage")}:</b></em> <span ref={citeRef}>{editors?.slice().reverse().map((editor, index) => <span key={index}>{editor.last_name}, {editor.first_name.slice(0, 1)}. </span>)} <em>{`${name}`}</em>. Georgian Biodiversity Database (Tbilisi, {`${currentDate.slice(-4)}`}). Ilia State University, Institute of Ecology. Available at: {`${fullUrl}`}. Date Accessed: {`${currentDate}`}.</span>
        </div>
    )
}
