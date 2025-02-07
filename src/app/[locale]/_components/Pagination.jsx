'use client'

import { useState, useEffect } from "react"

import { usePathname, useRouter } from "@/src/i18n/routing"
import { useTranslations } from "next-intl"

function Pagination({ path, searchParams, currentPage, total }) {
    const [current, setCurrent] = useState(+currentPage || 1)

    const router = useRouter()
    const pathname = usePathname()

    const url = pathname + `?id=${searchParams?.id}&page=`
    const searchPageUrl = path + "&page="

    useEffect(() => {
        if (path !== null) {  
            router.replace(searchPageUrl + current, { scroll: false })    
        } else {
            router.replace(url + current, { scroll: false })
        }
    }, [current, path, router, url])

    useEffect(() => {
        if(current > total) {
            setCurrent(total)
        }
    }, [current, total])

    const t = useTranslations("Common")

    const handlePagionationClick = (direction) => direction === 'next' ? setCurrent((prev) => prev + 1) : setCurrent((prev) => prev - 1)
    
    return (
        <div className="flex items-center justify-between">
            <div className="flex gap-2">
                <button
                    onClick={() => handlePagionationClick("prev")}
                    disabled={current === 1}
                    className="button disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {t("prev")}
                </button>
                <button
                    onClick={() => handlePagionationClick("next")}
                    disabled={current === total || current > total}
                    className="button disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {t("next")}
                </button>
            </div>
            <p className="text-sm">{t("page")} {current} / {total}</p>
        </div>
    )
}

export default Pagination