'use client'

import { useState, useEffect } from "react"

import { usePathname, useRouter } from "@/navigation"
import { useTranslations } from "next-intl"

function Pagination({ path, searchParams, currentPage, total }) {
    const [current, setCurrent] = useState(+currentPage || 1)

    const router = useRouter()
    const pathname = usePathname()

    const url = pathname + `?id=${searchParams?.id}&page=`

    useEffect(() => {
        if (path !== null) {
            router.replace(path + current, { scroll: false })    
        } else {
            router.replace(url + current, { scroll: false })
        }
    }, [current])

    useEffect(() => {
        if(current > total) {
            setCurrent(total)
        }
    }, [])

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