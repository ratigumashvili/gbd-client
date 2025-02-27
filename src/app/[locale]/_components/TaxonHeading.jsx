"use client"

import { useRouter } from "@/src/i18n/routing"
import { useTranslations } from "next-intl"

import { useBookmarks } from "@/src/app/[locale]/_hooks/useBookmarks"
import useIsMounted from "@/src/app/[locale]/_hooks/useIsMounted"

import GoBack from "./icons/GoBack"
import BookmarkMinus from "./icons/BookmarkMinus"
import BookmarkPlus from "./icons/BookmarkPlus"
import { Check } from "./Check"

import thumb from "@/public/logo.svg"
import OrgChartIcon from "./icons/OrgChartIcon"

function TaxonHeading({ headingData }) {

    const {
        id,
        title,
        scienttificId,
        rank,
        url,
        isSpecie = false,
        status = null,
        evaluatedBy = null,
        orgChartData,
    } = headingData

    const storageInfo = {
        id,
        scienttificId,
        title,
        rank,
        url
    }

    const { isMounted } = useIsMounted()

    const router = useRouter()
    const t = useTranslations("Common")

    const { handleAddBookmark, handleRemoveBookmark, isBookmarked } = useBookmarks()

    if (!isMounted) {
        return null
    }

    return (
        <div className='flex flex-1 items-center justify-between pr-4 gap-4'>
            {isSpecie ? (
                <h2 className="text-2xl font-medium"><em>{rank} {title}</em>
                    <Check status={status} evaluated={evaluatedBy} />
                </h2>
            ) : (
                <h2 className="text-2xl font-medium"><em>{rank} {title}</em></h2>
            )}
            <div className='flex items-center gap-4'>
                <button onClick={() => router.back()} title={t("goBack")}>
                    <GoBack width="22" heigth="22" />
                </button>

                {orgChartData && (
                    <button
                        onClick={() => { }}
                        className="disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled
                        title={t("taxOrder")}
                    >
                        <OrgChartIcon width="25" height="25" />
                    </button>
                )}

                {isBookmarked.includes(scienttificId) ? (
                    <button title={t("bookmarkRemove")} onClick={() => handleRemoveBookmark(storageInfo.id)}>
                        <BookmarkMinus />
                    </button>
                ) : (
                    <button title={t("bookmarkAdd")} onClick={() => handleAddBookmark(storageInfo)}>
                        <BookmarkPlus />
                    </button>
                )}
            </div>
        </div>
    )
}

export default TaxonHeading