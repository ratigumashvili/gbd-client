'use client'

import { Link, usePathname } from "@/navigation"

export default function TaxonomyChildNodes({ data }) {

    const pathname = usePathname()

    return (

        <ul>
            {data?.map(({ id, name, slug }) => (
                <li key={id} className="px-4 py-4 mb-4 bg-slate-50 dark:bg-slate-600 rounded-md hover:bg-teal-700 hover:text-white transition-all ease-in">
                    <Link href={`${pathname}/${slug}`} className="block">
                        {name}
                    </Link>
                </li>
            ))}
        </ul>

    )
}
