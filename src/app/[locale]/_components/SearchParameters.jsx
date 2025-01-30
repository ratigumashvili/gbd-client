"use client"

import { useTranslations } from "next-intl"
import { useSearchParams } from "next/navigation";

import { separator } from "@/src/app/[locale]/_lib/helpers";

function SearchParameters({ length = 0 }) {
    const searchParams = useSearchParams()
    const s = useTranslations("Search")


    const getNonEmptyParams = () => {
        const params = new URLSearchParams(searchParams.toString());

        return Array.from(params.entries()) // Convert to array
            .filter(([_, value]) => value.trim() !== "") // Skip empty values
            .map(([key, value]) => ({ key, value })); // Return as array of objects
    };

    const filteredParams = getNonEmptyParams();

    return (
        <section className="p-4 rounded-md bg-slate-50 dark:bg-slate-600">
            <h2 className="text-xl font-medium mb-4">{s("parameters")}</h2>
            <div className="flex flex-wrap gap-2">
                {filteredParams && filteredParams?.length !== 0 && filteredParams?.map((item, index) => (
                    <div key={index}>
                        <p><span className="font-medium">{s(`${item.key}`)}</span>: <span>{item.value}</span>{separator(index, filteredParams)}</p>
                    </div>
                ))}
            </div>
                <>
                    <hr className="my-4" />
                    <p className="text-sm">{s("found")} <span className="font-medium">{length}</span> {s("records")}</p>
                </>
        </section>
    )
}

export default SearchParameters