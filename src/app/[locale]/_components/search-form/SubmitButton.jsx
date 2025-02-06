"use client"

import { useTranslations } from "next-intl";
import { useFormStatus } from "react-dom"
import SearchIcon from "@/src/app/[locale]/_components/icons/SearchIcon";
import LoadingIcon from "@/src/app/[locale]/_components/icons//LoadingIcon";

function SubmitButton({ disabled }) {

    const { pending } = useFormStatus()
    const s = useTranslations("Search");
    return (
        <>
            {pending ? (
                <button type="button" className={`inline-flex flex-1 md:!w-max !sm:w-max justify-center rounded-md border border-transparent bg-teal-600 px-4 py-[10px] text-sm font-medium text-white hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-900 focus-visible:ring-offset-2 ${pending && "opacity-50 pointer-events-none"}`}>
                    <LoadingIcon width="20" height="20" className="animate-spin" />
                    <span className="pl-2">{s("loading")}</span>
                </button>
            ) : (
                <button type="submit" disabled={disabled || pending} className={`inline-flex flex-1 md:!w-max !sm:w-max justify-center rounded-md border border-transparent bg-teal-600 px-4 py-[10px] text-sm font-medium text-white hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-900 focus-visible:ring-offset-2 ${disabled && "opacity-50 pointer-events-none"
                    }`}>
                    <SearchIcon width="18" height="18" />
                    <span className="pl-2">{s("submit")}</span>
                </button>
            )}
        </>
    )
}

export default SubmitButton