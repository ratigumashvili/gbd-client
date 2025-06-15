"use client"

import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
import { Link, usePathname } from "@/src/i18n/routing"

import { detectLocale, sanitize } from "@/src/app/[locale]/_lib/helpers"

const routes = [
    {
        id: 1,
        title: "editors",
        path: "/team/editors"
    },
    {
        id: 2,
        title: "contributors",
        path: '/team/contributors'
    }
]

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
                            dangerouslySetInnerHTML={{ __html: sanitize(item.biography) }}
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

export const RoleTranslate = () => {

    const pathName = usePathname()
    const t = useTranslations("Team")

    const existingPaths = routes.map((item) => item.path)

    if (existingPaths.includes(pathName)) {
        return (
            <div className="flex gap-x-4 mb-8">
                {routes.map((item) => (
                    <Link
                        key={item.id}
                        href={`${item.path}`}
                        className={pathName === item.path ? "font-medium text-teal-700" : "font-normal text-black"}
                    >
                        <h3 className="text-xl">{t(item.title)}</h3>
                    </Link>
                ))}
            </div>
        )
    }
}

