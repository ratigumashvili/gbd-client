'use client'

import { Link, usePathname } from "@/navigation"

import { useTranslations } from "next-intl"

import { useFilterByName } from "../_hooks/useFilterByName"

export default function TaxonomyChildNodes({ data, locale, taxonName, pathToChildren }) {

    const { searchTerm, setSearchTerm, filteredData } = useFilterByName(data, "title")
    
    const pathname = usePathname()
    
    const t = useTranslations("Common")

    if (!data || data.length === 0) return <></>

    return (
        <div className="col-span-1 mt-8 mb-4">
            <div className="flex flex-col gap-y-4 md:flex-row items-center justify-between mb-6">
                <h2 className='font-medium text-md flex-1'>{locale === 'ka' ? `${taxonName} - ${t("taxonomyOfThe")}` : `${t("taxonomyOfThe")} ${taxonName}`}</h2>
                <div className="w-full max-w-[320px]">
                    <input
                        type="text"
                        placeholder={t("filter")}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-2 bg-transparent border rounded-md outline-teal-500 placeholder:text-sm"
                    />
                </div>
            </div>

            <ul>
                {searchTerm && !filteredData?.length && (
                    <li>
                        <span className="text-sm italic">{t("no_data")}</span>
                    </li>
                )}
                {filteredData?.map((item) => (
                    <li key={item.id} className="px-4 py-4 mb-4 bg-slate-50 dark:bg-slate-600 rounded-md hover:bg-teal-700 hover:text-white transition-all ease-in">
                        {/* <Link href={`${pathname}/${item.metadata.slug}?id=${item.id}`} className="block">
                            {item.title} - {pathToChildren}
                        </Link> */}
                        <Link href={`/${pathToChildren}/${item.metadata.slug}?id=${item.id}`} className="block">
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
