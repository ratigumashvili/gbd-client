"use client"

import { useLocale } from "next-intl"
import { usePathname } from "@/src/i18n/routing"
import {detectLocale} from "@/src/app/[locale]/_lib/helpers"

export default function ComponentTitle({ title }) {
    const pathName = usePathname()
    const locale = useLocale()
    return (
        <>
            {pathName === '/' ? (
                <h2 className='text-xl font-medium mb-4'>{title}</h2>
            ) : (
                <h2 className={`text-2xl font-medium mb-4 ${detectLocale(locale)}`}>{title}</h2>
            )}
        </>
    )
}
