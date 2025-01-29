"use client"

import { useState, useEffect } from "react"
import { Link, usePathname, useRouter } from "@/src/i18n/routing"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { useLocale, useTranslations } from "next-intl"

import { useBookmarks } from "@/src/app/[locale]/_hooks/useBookmarks"
import useIsMounted from "@/src/app/[locale]/_hooks/useIsMounted"
import { detectLocale } from "@/src/app/[locale]/_lib/helpers"
import thumbnail from "@/public/logo.svg"
import RemoFromFolderIcon from "@/src/app/[locale]/_components/icons/RemoFromFolderIcon"
import BookmarksModal from "../_components/BookmarksModal"

const taxonomy = [
    {
        id: 1,
        title: "Kingdom",
    },
    {
        id: 2,
        title: "Phylum"
    },
    {
        id: 3,
        title: "Class"
    },
    {
        id: 4,
        title: "Order"
    },
    {
        id: 5,
        title: "Family"
    },
    {
        id: 6,
        title: "Genus"
    },
    {
        id: 7,
        title: "Species"
    },
    {
        id: 8,
        title: "SubSpecies"
    }
]

function Bookmarked() {
    const { bookmarks, handleRemoveBookmark } = useBookmarks()

    const locale = useLocale()

    const searchParams = useSearchParams()

    const router = useRouter()
    const pathname = usePathname()
    const t = useTranslations("Common")
    const { isMounted } = useIsMounted()

    const [data, setData] = useState(bookmarks)
    const [selectedRank, setSelectedRank] = useState(searchParams.get("rank") || "All")

    // const selectedRadio = searchParams.get("rank")

    const uniqueRanks = [... new Set(bookmarks.map((item) => item.rank))]

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedRank(selectedValue);
        router.push(pathname + "?rank=" + selectedValue)
    }

    useEffect(() => {
        const rankFilter = searchParams.get("rank")

        setData(
            !rankFilter || rankFilter === "All" || !uniqueRanks.includes(rankFilter)
                ? bookmarks
                : bookmarks.filter((item) => item.rank === rankFilter)
        )
    }, [router, bookmarks, searchParams])

    if (!isMounted) {
        return
    }

    return (
        <section className="py-4">
            <div className="mb-4 flex items-center justify-between">
                <h2 className={`text-2xl font-medium ${detectLocale(locale)}`}>{t("bookmarkedPageTitle")}</h2>
                <BookmarksModal />
            </div>

            <div className="grid grid-cols-6 gap-4">

                <div className="col-span-2">

                    <div className="flex flex-col gap-y-4">

                        <div>
                            <label htmlFor="title"></label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                placeholder={t("search")}
                                className="border w-full px-2 py-1"
                            />
                        </div>

                        <label className="flex items-center gap-x-2">
                            <input
                                type="radio"
                                name="rank"
                                value="All"
                                checked={selectedRank === "All"}
                                onChange={handleChange}
                            />
                            <span className={`cursor-pointer ${selectedRank === "All" ? "text-teal-700" : "text-black"}`}>
                                {t("all")}
                            </span>
                        </label>

                        {taxonomy.map((item) => (
                            <label key={item.id} className="flex items-center gap-x-2">
                                <input
                                    type="radio"
                                    name="rank"
                                    value={item.title}
                                    checked={selectedRank === item.title}
                                    onChange={handleChange}
                                    disabled={!uniqueRanks.includes(item.title)}
                                />
                                <span
                                    className={`cursor-pointer ${selectedRank === item.title ? "text-teal-700" : "text-black dark:text-gray-100"} 
                                    ${!uniqueRanks.includes(item.title) ? "opacity-50 cursor-not-allowed" : ""}`}
                                >
                                    {item.title}
                                </span>
                            </label>
                        ))}
                    </div>

                </div>

                <div className="col-span-4">

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {data && data.length !== 0 && [...data]
                            .sort((a, b) => a.title.localeCompare(b.title))
                            .map((item) => (
                                <div key={item.id} className="col-span-1 border rounded-md">
                                    <div className="flex gap-2">
                                        {t("english_name")}: <h2 className="font-lg font-medium">{item.title}</h2>
                                    </div>
                                    <div className="flex gap-2">
                                        <p>{t("scientific_name_id")}: {item.scienttificId}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <p>{t("taxon_rank")}: {item.rank}</p>
                                    </div>

                                    <div className="flex items-center gap-x-4">
                                        <Link href={item.url} className="button">{t("view")}</Link>
                                        <button
                                            onClick={() => handleRemoveBookmark(item.id)}
                                            className="button-danger !flex"
                                        >
                                            <RemoFromFolderIcon width="20" height="20" />
                                            <span className="pl-2">{t("remove")}</span>
                                        </button>
                                    </div>

                                </div>
                            ))
                        }
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Bookmarked