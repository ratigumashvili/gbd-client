'use client'

import { Link } from "@/navigation"

import { useTranslations } from "next-intl"

export default function TaxonomyChildSpecies({ data, locale, taxonName }) {

    const t = useTranslations("Common")
    
    if (data.data.length === 0) return

    return (
        <div className="col-span-1 mt-8 mb-4">
            {taxonName && (
                <>
                    <h2 className='font-medium text-md my-4'>{locale === 'ka' ? `${taxonName} - ${t("taxonomyOfThe")}` : `${t("taxonomyOfThe")} ${taxonName}`}</h2>
                    <ul className="my-8">
                        {data?.data?.map((item) => (
                            <li key={item.id} className="px-4 py-4 mb-4 bg-slate-50 dark:bg-slate-600 rounded-md hover:bg-teal-700 hover:text-white transition-all ease-in">
                                <Link href={`/species/${item.id}`} className="block">
                                    <em>{item.title}</em>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    )
}
