"use client"

import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"

export const useGetStatus = (status, evaluated) => {
    const t = useTranslations("Species")
    const [message, setMessage] = useState('')

    useEffect(() => {
        if (status === 1 && evaluated !== null) {
            setMessage(`${t("cheked")} ${evaluated}`)
        }

        if (status === 1 && evaluated === null) {
            setMessage(`${t("cheked_done")}`)
        }  

        if (status !== 1) {
            setMessage(`${t("not_cheked")}`)
        }
    }, [status, evaluated, t])

        return message
}