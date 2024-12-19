"use client"

import { useState, useEffect } from "react"
import { Link, useRouter } from "@/navigation"
import { useTranslations } from "next-intl"

function BrowseByTaxonomyBlock({ id, title, slug }) {

    const [isPending, setIsPending] = useState(false)

    const router = useRouter()
    const t = useTranslations("Index")

    const handleClick = () => {
        setIsPending(true)
        router.push(`/taxonomy/${slug}?id=${id}`)
    }

    useEffect(() => {
        router.prefetch(`/taxonomy/${slug}?id=${id}`)
    }, [router])

    return (
        <div className="flex flex-col gap-y-4">
        <button
            onClick={handleClick}
            disabled={isPending}
            className={`text-center flex-1 p-8 rounded-md border border-teal-600 bg-teal-600 text-white hover:bg-white hover:text-gray-900 transition-all ease-in ${isPending && 'opacity-30 pointer-events-none'}`}
        >
            <h4 className='font-medium text-xl mb-2'>{title}</h4>
            <span className='font-firaGo'>{t("registeredRecords")}</span>
        </button>
        <Link href={`/king/${slug}?id=${id}`}>kingdom</Link>
        </div>
    )
}

export default BrowseByTaxonomyBlock