import Image from "next/image"
import { Link } from "@/src/i18n/routing"

import { separator } from "@/src/app/[locale]/_lib/helpers"

export default function TaxonomyParentNodes({data}) {
    return (
        <>
        <div className="py-4 flex items-center gap-2 flex-wrap text-base border-b border-b-slate-100 border-t border-t-slate-50 mb-10">
            <Image src={'/nodes.svg'} alt="Nodes" width={20} height={20} />
            {data && data?.length !== 0 && data.reverse().map((item, index) => (
                <Link
                    key={item.id}
                    href={`/${item.type.toLowerCase()}/${item.name.toLowerCase()}?id=${item.id}`}
                    className={`${index === data.length - 1 ? "italic text-gray-600 hover:text-gray-700/80 transition" : "text-teal-700 hover:text-teal-700/80 transition"}`}
                >
                    <span className="capitalize">{item.type}</span> {item.name} 
                    <span className="text-gray-400 ">{separator(index, data, ' → ', "")}</span>
                </Link>
            ))}
        </div>
        </>
    )
}
