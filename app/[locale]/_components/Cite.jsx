'use client'

import { useEffect, useRef, useState } from "react"
import { useSearchParams } from "next/navigation"

import { useTranslations } from "next-intl"

import { toast } from "react-toastify"

import { copyToClipboard, currentDate, toastOptions } from "../_lib/helpers"

import Copy from "./icons/Copy"

export default function Cite({ name }) {

    const citeRef = useRef()

    const [citeElement, setCiteElement] = useState()
    const [url, setUrl] = useState("")

    const searchParams = useSearchParams()

    const t = useTranslations("Common")

    useEffect(() => {
        setCiteElement(citeRef.current)
    }, [])

    useEffect(() => {
        setUrl(typeof window !== "undefined" && window.location.href)
    }, [searchParams])

    const handleCopyCite = () => {
        copyToClipboard(citeElement.innerText)
        toast.success(t("copied"), toastOptions)
    }

    return (
        <div className='bg-slate-50 dark:bg-slate-600 rounded-md pt-6 pl-6 pb-6 pr-10 mt-4 text-xs relative'>
            <button
                className="absolute right-6 top-6"
                onClick={handleCopyCite}
                title="Copy"
            >
                <Copy width="18" height="18" />
            </button>
            <em><b>{t("citePage")}:</b></em> <span ref={citeRef}>{`${name}`}. {t("gbd")} ({t("tbilisi")}, {`${currentDate.slice(-4)}`}). {t("isu")}, {t("ecology_inst")}. {t("available")}: {`${url}`}. {t("date_accessed")}: {`${currentDate}`}.</span>
        </div>
    )
}
