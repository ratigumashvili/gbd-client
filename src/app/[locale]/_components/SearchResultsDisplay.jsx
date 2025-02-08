"use client"

import { Link } from "@/src/i18n/routing"
import { useTranslations } from "next-intl"

import SearchResultActions from "@/src/app/[locale]/_components/SearchResultActions"
import { filterTaxonValue, checkTaxonValue } from "@/src/app/[locale]/_lib/helpers"

function SearchResultsDisplay({ data }) {
    
    const t = useTranslations("Common")

    return (
        <div className='my-4 w-full overflow-x-auto'>

            <div className="w-full min-w-[1000px] md:w-full">

                {/* <pre>
                    {JSON.stringify(data, null, 2)}
                </pre> */}

                <div className='grid grid-cols-7 w-full rounded-t-md overflow-hidden'>
                    <div className="col-span-1 rounded-tl-md border-r border-t border-l border-b bg-slate-50 text-center text-base py-2 px-3 font-medium">{t("taxon_rank")}</div>
                    <div className="col-span-1 border-r border-t border-l border-b bg-slate-50 text-center text-base py-2 px-3 font-medium">{t("scientific_name_id")}</div>
                    <div className="col-span-2 border-r border-t border-l border-b bg-slate-50 text-center text-base py-2 px-3 font-medium">{t("latin_name")}</div>
                    <div className="col-span-1 border-r border-t border-l border-b bg-slate-50 text-center text-base py-2 px-3 font-medium">{t("english_name")}</div>
                    <div className="col-span-1 border-r border-t border-l border-b bg-slate-50 text-center text-base py-2 px-3 font-medium">{t("specieGeorgianName")}</div>
                    <div className="col-span-1 rounded-tr-md border-r border-t border-l border-b bg-slate-50 text-center text-base py-2 px-3 font-medium">{t("actions")}</div>
                </div>

                <div className='w-full'>
                    {data?.map((item) => (
                        <div key={item.id} className='grid grid-cols-7 hover:bg-slate-100/30 min-w-7xl'>
                            <div className='col-span-1 border-r border-l border-b text-left text-base flex items-center px-3 py-2'>
                                <span className="capitalize">{filterTaxonValue(item.type)}</span>
                            </div>
                            <div className='col-span-1 border-r border-l border-b text-left text-base flex items-center px-3 py-2'>
                                {item.scientific_name_id}
                            </div>
                            <div className='col-span-2 border-r border-l border-b text-left text-base flex items-center px-3'>
                                <Link href={checkTaxonValue(item.type, item.slug, item.id)} className="text-teal-700 cursor-pointer font-medium">
                                    {item.name}
                                </Link>
                            </div>
                            <div className='col-span-1 border-r border-l border-b text-left text-base flex items-center px-3 py-2'>
                                <span className="truncate cursor-default" title={item?.english_name}>{item?.english_name}</span>
                            </div>
                            <div className='col-span-1 border-r border-l border-b text-left text-base flex items-center px-3 py-2'>
                                <span className="truncate cursor-default" title={item?.georgian_name_title}>{item?.georgian_name_title}</span>
                            </div>
                            <div className='col-span-1 border-r border-l border-b text-left text-base flex items-center px-3 py-2'>
                                <SearchResultActions item={item}/>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default SearchResultsDisplay