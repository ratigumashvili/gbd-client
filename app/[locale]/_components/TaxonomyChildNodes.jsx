'use client'

import { Link } from "@/navigation"

import { useTranslations } from "next-intl"

export default function TaxonomyChildNodes({ data, recordsTotal, locale, taxonName, pathToChildren }) {
    
    const t = useTranslations("Common")

    if (!data || data.length === 0) return <></>

    return (
        <div className="col-span-1 mt-8 mb-8">
            <div className="flex flex-col gap-y-4 md:flex-row items-center justify-between mb-6">
                <h2 className='font-medium text-md flex-1'>{locale === 'ka' ? `${taxonName} - ${t("taxonomyOfThe")}` : `${t("taxonomyOfThe")} ${taxonName}`}</h2>
                <span>{recordsTotal} {locale !== 'ka' ? recordsTotal > 1 ? t("records") : t("record") : t("record")}</span>
            </div>

            <ul>
                {!data && !data?.length && (
                    <li>
                        <span className="text-sm italic">{t("no_data")}</span>
                    </li>
                )}
                {pathToChildren !== 'species' ? (
                    data?.map((item) => (
                        <li key={item.id} className="px-4 py-4 mb-4 bg-slate-50 dark:bg-slate-600 rounded-md hover:bg-teal-700 hover:text-white transition-all ease-in">
                            <Link href={`/${pathToChildren}/${item.metadata.slug}?id=${item.id}`} className="block">
                               <span className="capitalize">{pathToChildren}</span> {item.title}
                            </Link>
                        </li>
                    ))
                ) : (
                    data?.map((item) => (
                        <li key={item.id} className="px-4 py-4 mb-4 bg-slate-50 dark:bg-slate-600 rounded-md hover:bg-teal-700 hover:text-white transition-all ease-in">
                            <Link href={`/species/${item.id}`} className="block">
                                <span className="capitalize">{pathToChildren}</span> <em>{item.title}</em>
                            </Link>
                        </li>
                    ))
                )}
            </ul>
        </div>
    )
}
