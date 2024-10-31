'use client'

import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"

import { useTranslations } from "next-intl"

import { toast } from "react-toastify"

import { baseUrl, copyToClipboard, currentDate, toastOptions } from "../_lib/helpers"

import Copy from "./icons/Copy"

export default function Cite({ name, id = undefined }) {

    const citeRef = useRef()

    const [citeElement, setCiteElement] = useState()

    const pathname = usePathname()

    const t = useTranslations("Common")

    useEffect(() => {
        setCiteElement(citeRef.current)
    }, [])

    const handleCopyCite = () => {
        copyToClipboard(citeElement.innerText)
        toast.success(t("copied"), toastOptions)
    }

    return (
        <>
            <div className='bg-slate-50 dark:bg-slate-600 rounded-md pt-6 pl-6 pb-6 pr-10 mt-4 text-xs relative'>

                <button
                    className="absolute right-6 top-6"
                    onClick={handleCopyCite}
                    title="Copy"
                >
                    <Copy width="18" height="18" />
                </button>

                <em><b>{t("citePage")}:</b></em> <span ref={citeRef}>{`${name}`}. {t("gbd")} ({t("tbilisi")}, {`${currentDate.slice(-4)}`}). {t("isu")}, {t("ecology_inst")}. {id !== undefined && `Record id: ${id};`} {t("available")}: {`${baseUrl + pathname}`}. {t("date_accessed")}: {`${currentDate}`}.</span>

            </div>
        </>
    )
}
