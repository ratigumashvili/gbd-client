"use client"

import { Link } from "@/src/i18n/routing"
import { useTranslations } from "next-intl"

import { useBookmarks } from "@/src/app/[locale]/_hooks/useBookmarks"
import useIsMounted from "@/src/app/[locale]/_hooks/useIsMounted"
import { BOKMARK_LIMIT } from "@/src/app/[locale]/_lib/constants"

import FolderIcon from "./icons/FolderIcon"

function BookmarksCart() {
    const t = useTranslations("Common")
    const { isMounted } = useIsMounted()
    const { bookmarks } = useBookmarks()

    const cartColor = bookmarks && bookmarks.length === BOKMARK_LIMIT ? "bg-red-800" : "bg-teal-900"

    if (!isMounted) {
        return null
    }

    return (
        <div className="flex items-center gap-2 font-firaGo">
            <span className="relative">
                <FolderIcon width="20" height="20" />
                <span className={`absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${cartColor}`}>
                    {bookmarks.length}
                </span>
            </span>
            <Link href={'/bookmarked'}>{t("bookmark")} </Link>
        </div>
    )
}

export default BookmarksCart