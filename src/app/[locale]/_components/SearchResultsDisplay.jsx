"use client"

import { Link } from "@/src/i18n/routing"
import { filterTaxonValue, checkTaxonValue } from "@/src/app/[locale]/_lib/helpers"

function SearchResultsDisplay({data}) {
    return (
        <div className='my-4 w-full overflow-x-auto'>

            <div className='grid grid-cols-3'>
                <div className="col-span-1 border-r border-t border-l border-b bg-slate-50 text-center text-base py-2 px-3 font-medium">rank</div>
                <div className="col-span-1 border-r border-t border-l border-b bg-slate-50 text-center text-base py-2 px-3 font-medium">title</div>
                <div className="col-span-1 border-r border-t border-l border-b bg-slate-50 text-center text-base py-2 px-3 font-medium">url</div>
            </div>

            <div className='min-w-1000px overflow-x-auto'>
                {data?.map((item) => (
                    <div key={item.id} className='grid grid-cols-3 hover:bg-slate-100/30 min-w-7xl'>
                        <div className='col-span-1 border-r border-l border-b text-left text-base py-2 px-3'>{filterTaxonValue(item.type)}</div>
                        <div className='col-span-1 border-r border-l border-b text-left text-base py-2 px-3'>
                            {item.name}
                        </div>
                        <div className='col-span-1 border-r border-l border-b text-left text-base py-2 px-3'>
                            <Link href={checkTaxonValue(item.type, item.slug, item.id)}>url</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchResultsDisplay