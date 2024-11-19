'use client'

import { Link, usePathname } from "@/navigation"

import { useTranslations } from "next-intl"

export default function TaxonomyChildNodes({ data, locale, taxonName }) {

    const pathname = usePathname()

    const t = useTranslations("Common")

    if (data.length === 0) {
        return <></>
    }

    return (
        <div className="col-span-1 mt-8 mb-4">
            <h2 className='font-medium text-md my-4'>{locale === 'ka' ? `${taxonName} - ${t("taxonomyOfThe")}` : `${t("taxonomyOfThe")} ${taxonName}`}</h2>
            <ul>
                {data?.map((item) => (
                    <li key={item.id} className="px-4 py-4 mb-4 bg-slate-50 dark:bg-slate-600 rounded-md hover:bg-teal-700 hover:text-white transition-all ease-in">
                        <Link href={`${pathname}/${item.metadata.slug}?id=${item.id}`} className="block">
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
