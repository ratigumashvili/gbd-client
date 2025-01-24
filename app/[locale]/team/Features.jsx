"use client"

import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
import { Link, usePathname } from "@/navigation"

import { detectLocale } from "../_lib/helpers"

export const Blocks = ({ data = [] }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.length !== 0 && data?.map((item) => (
                <article key={item.id} className="flex gap-4 mb-6">
                    <div className="shrink-0">
                        <Image
                            src={`${item.image_url}`}
                            width={150}
                            height={150}
                            alt={item.title}
                            className="object-cover overflow-hidden self-start rounded-full w-28 h-28 mt-2"
                        />
                    </div>
                    <div>
                        <h2 className="font-medium text-xl mb-1 font-firaGo">
                            <Link href={`/team/${item.id}`} className="block hover:text-teal-700 transition-all duration-150">{item.title}</Link>
                        </h2>
                        <span className="inline-block mb-3 mt-2 text-sm py-1 px-2 bg-teal-600 text-white rounded-md">{item.position}</span>
                        <div
                            dangerouslySetInnerHTML={{ __html: item.biography }}
                            className="[&>p]:mb-3 font-firaGo text-sm [&>a]:underline"
                        />
                    </div>
                </article>
            ))}
        </div>
    )
}

export const PageTitle = () => {
    
    const locale = useLocale()
    const t = useTranslations("Team")

    return <h2 className={`text-2xl font-medium mb-4 ${detectLocale(locale)}`}>{t("pageTitle")}</h2>
}

export const RoleTranslate = (data) => {

    const pathName = usePathname()
    const t = useTranslations("Team")

    return (
        <Link href={`${data.path}`} className={pathName === data.path ? "font-medium text-teal-700" : "font-normal text-black"}>
            <h3 className="text-xl">{t(data.title)}</h3>
        </Link>
    )
}