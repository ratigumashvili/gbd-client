"use client"

import { useState, useEffect } from "react"
import { Link, usePathname, useRouter } from "@/src/i18n/routing"
import { useSearchParams } from "next/navigation"
import { useLocale, useTranslations } from "next-intl"
import qs from 'qs';

import { detectLocale } from "@/src/app/[locale]/_lib/helpers"
import { useBookmarks } from "@/src/app/[locale]/_hooks/useBookmarks"

import useIsMounted from "@/src/app/[locale]/_hooks/useIsMounted"
import RemoveFromFolderIcon from "@/src/app/[locale]/_components/icons/RemoFromFolderIcon"
import BookmarksModal from "@/src/app/[locale]/_components/BookmarksModal"
import BookmarksDeleteAll from "@/src/app/[locale]/_components/BookmarksDeleteAll"
import SearchParameters from "@/src/app/[locale]/_components/SearchParameters"

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

    const {
        bookmarks,
        handleRemoveBookmark,
    } = useBookmarks()

    const locale = useLocale()

    const searchParams = useSearchParams()

    const router = useRouter()
    const pathname = usePathname()
    const t = useTranslations("Common")
    const { isMounted } = useIsMounted()

    const [data, setData] = useState(bookmarks)

    const uniqueRanks = [... new Set(bookmarks.map((item) => item.rank))]

    useEffect(() => {
        const rankFilter = searchParams.get("rank");
        const titleFilter = searchParams.get("title");

        let filteredData = [...bookmarks];

        if (rankFilter) {
            filteredData = filteredData.filter((item) =>
                item.rank.trim().toLowerCase() === rankFilter.trim().toLowerCase()
            );
        }

        if (titleFilter) {
            filteredData = filteredData.filter((item) =>
                item.title.toLowerCase().includes(titleFilter.toLowerCase())
            );
        }

        setData(filteredData);
    }, [searchParams, bookmarks]);

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target)

        const title = formData.get("title")?.trim() || null
        const rank = formData.get("rank") || null

        const queryParams = {
            title: title || undefined,
            rank: rank || undefined
        }

        const result = qs.stringify(queryParams, {
            skipNulls: true,
            skipEmptyStrings: true
        })

        router.push(pathname + "?" + result, { scroll: false })

        event.target.reset()
    }

    if (!isMounted) {
        return
    }

    return (
        <section className="py-4">
            <div className="mb-6 sm:mb-4 flex flex-col sm:flex-row items-center justify-between">
                <h2 className={`text-2xl font-medium ${detectLocale(locale)}`}>{t("bookmarkedPageTitle")}</h2>
                <div className="flex items-center gap-3 my-4 sm:my-0">
                    <BookmarksDeleteAll />
                    <BookmarksModal />
                </div>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-6 gap-4">
                <div className="col-span-2">
                    <div className="flex flex-col gap-4">
                        <form onSubmit={handleFormSubmit}>
                            <div className="flex flex-col md:flex-col gap-4 bg-slate-50 dark:bg-slate-600 rounded-md p-4">
                                <p className="text-lg font-medium">{t("filter_title")}</p>
                                <div className="flex flex-row flex-wrap gap-4 mb-2">

                                    {taxonomy.map((item) => (
                                        <label key={item.id} className={`flex items-center gap-x-2 ${!uniqueRanks.includes(item.title) ? "opacity-50 cursor-not-allowed" : ""}`}>
                                            <input
                                                type="radio"
                                                name="rank"
                                                value={item.title}
                                                disabled={!uniqueRanks.includes(item.title)}
                                                className="accent-teal-600"
                                            />
                                            <span>{item.title}</span>
                                        </label>
                                    ))}
                                </div>
                                <input
                                    type="text"
                                    name="title"
                                    placeholder={t("english_name")}
                                    className="border w-full rounded-sm px-3 py-2 focus:ring-0 focus:outline-teal-600"
                                />
                                <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 mt-2">
                                    <button
                                        type="submit"
                                        className="button w-full disabled:opacity-65 disabled:pointer-events-none"
                                    >
                                        {t("search_btn")}
                                    </button>
                                    <Link
                                        href={'/bookmarked'}
                                        className="button-secondary w-full whitespace-nowrap disabled:opacity-65 disabled:pointer-events-none"
                                    >
                                        {t("search_reset_btn")}
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-span-4">

                    {searchParams?.size !== 0 && (
                        <div className="col-span-4 mb-4">
                            <SearchParameters length={data?.length} />
                        </div>
                    )}

                    <div className="col-span-4">
                        {bookmarks?.length === 0 && (
                            <p className="font-medium">{t("no_bookmarks")}</p>
                        )}
                        {data?.length === 0 && (
                            <p className={`${!bookmarks.length && "hidden"} font-medium`}>
                                {t("nothing_found")}
                            </p>
                        )}
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {data && data.length !== 0 && [...data]
                            .sort((a, b) => a?.title?.localeCompare(b?.title))
                            .map((item) => (
                                <article key={item.id} className="col-span-1 border rounded-md">
                                    <div className="p-3 flex flex-col gap-y-3">
                                        <div className="flex gap-2">
                                            {t("english_name")}: <span className="font-medium">{item.title}</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <p>{t("scientific_name_id")}: <span className="font-medium">{item.scienttificId}</span></p>
                                        </div>
                                        <div className="flex gap-2">
                                            <p>{t("taxon_rank")}: <span className="font-medium">{item.rank}</span></p>
                                        </div>
                                    </div>
                                    <div className="flex gap-x-2 items-center justify-end border-t p-3">
                                        <Link href={item.url} className="button">{t("view")}</Link>
                                        <button
                                            onClick={() => handleRemoveBookmark(item.id)}
                                            className="button-danger !flex"
                                            title={t("remove")}
                                        >
                                            <RemoveFromFolderIcon width="20" height="20" />
                                        </button>
                                    </div>
                                </article>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Bookmarked

