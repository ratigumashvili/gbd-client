"use client"

import Image from "next/image"
import { Link, usePathname } from "@/src/i18n/routing"

import { filterTaxonValue, formatPathname, separator } from "@/src/app/[locale]/_lib/helpers"

export default function TaxonomyParentNodes({ data }) {
    
    const path = usePathname()

    return (
        <>
            {data && data?.length !== 0 && (
                <div className="py-4 mt-8 flex items-center gap-2 flex-wrap text-base border-b border-b-slate-100 border-t border-t-slate-50 mb-10">
                    <Image src={'/nodes.svg'} alt="Nodes" width={20} height={20} />
                    {data.map((item, index) => (
                        <Link
                            key={item.id}
                            href={`/${filterTaxonValue(item.type)}/${item.name.toLowerCase()}?id=${item.id}`}
                            className="text-teal-700 hover:text-teal-700/80 transition"
                        >
                            <span className="capitalize">{filterTaxonValue(item.type)}</span> {item.name}
                            <span className="text-gray-400 ">
                                {!path.startsWith("/species")
                                    ? (separator(index, data, ' → ', " : "))
                                    : (separator(index, data, ' → ', ""))}
                            </span>
                        </Link>
                    ))} <span className="text-gray-500">{formatPathname(path)}</span>
                </div>
            )}
        </>
    )
}
