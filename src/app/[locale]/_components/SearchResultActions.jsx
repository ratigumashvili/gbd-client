"use client"

import { useState, useEffect } from "react"
import { useLocale, useTranslations } from "next-intl"
import { toast } from "react-toastify"

import useIsMounted from "@/src/app/[locale]/_hooks/useIsMounted"
import { useBookmarks } from "@/src/app/[locale]/_hooks/useBookmarks"

import { checkTaxonValue, copyToClipboard, filterTaxonValue } from "@/src/app/[locale]/_lib/helpers"

import UrlIcon from "@/src/app/[locale]/_components/icons/UrlIcon"
import BookmarkMinus from "@/src/app/[locale]/_components/icons/BookmarkMinus"
import BookmarkPlus from "@/src/app/[locale]/_components/icons/BookmarkPlus"

function SearchResultActions({ item }) {
    const [origin, setOrigin] = useState("")

    const { handleAddBookmark, handleRemoveBookmark, isBookmarked } = useBookmarks()
    const { isMounted } = useIsMounted()

    const locale = useLocale()
    const t = useTranslations("Common")

    useEffect(() => {
        if(window && typeof window !== "undefined") {
            setOrigin(window.location.origin)
        }
    }, [item])

    const url = origin + "/" + locale + checkTaxonValue(item.type, item.slug, item.id)

    const storageInfo = {
        id: item.scientific_name_id,
        scienttificId: item.scientific_name_id,
        title: item.name,
        rank: filterTaxonValue(item.type).charAt(0).toUpperCase() + filterTaxonValue(item.type).slice(1),
        url: checkTaxonValue(item.type, item.slug, item.id)
    }

    const handleCopyUrl = async () => {
        await copyToClipboard(url)
        toast.success(t("url_copied"))
    }

    if (!isMounted) {
        return null
    }

    return (
        <div className="w-full flex items-center gap-x-3">
            <button
                className="button-secondary w-full !flex !items-center !justify-center"
                title={t("copyUrl")}
                onClick={handleCopyUrl}
            >
                <UrlIcon width="15" height="15" />
            </button>
            {isBookmarked.includes(storageInfo.id) ? (
                <button
                    className="button-danger w-full !flex !items-center !justify-center"
                    title={t("bookmarkRemove")}
                    onClick={() => handleRemoveBookmark(storageInfo.id)}
                >
                    <BookmarkMinus width="15" height="15" />
                </button>
            ) : (
                <button
                    className="button w-full !flex !items-center !justify-center"
                    title={t("bookmarkAdd")}
                    onClick={() => handleAddBookmark(storageInfo)}
                >
                    <BookmarkPlus width="15" height="15" />
                </button>
            )}
        </div>
    )
}

export default SearchResultActions