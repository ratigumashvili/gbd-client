"use client";

import { createContext, useState, useEffect, useCallback } from "react";

import { useTranslations } from "next-intl";
import { toast } from "react-toastify";

import { BOKMARK_LIMIT } from "@/src/app/[locale]/_lib/constants";

export const BookmarksContext = createContext(null);

export default function BookmarksProvider({ children }) {
  const t = useTranslations("Common");

  const isClient = typeof window !== "undefined";

  const getStoredData = (key, fallback) => {
    if (!isClient) return fallback;
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch (error) {
      console.error(`Error parsing localStorage data for ${key}:`, error);
      return fallback;
    }
  };

  const [bookmarks, setBookmarks] = useState(() => getStoredData("gbd-bookmarked", []));
  const [isBookmarked, setIsBookmarked] = useState(() => getStoredData("gbd-isBookmarked", []));


  const handleAddBookmark = useCallback((record) => {
    if (isBookmarked.includes(record.id)) return;

    if (bookmarks.length >= BOKMARK_LIMIT) {
      toast.error(t("maximum_items"));
      return;
    }

    setBookmarks((prev) => [...prev, record]);
    setIsBookmarked((prev) => [...prev, record.id]);

    toast.success(t("bookmark_added"));
  }, [isBookmarked, bookmarks.length, t]);

  const handleRemoveBookmark = useCallback((idToDelete) => {
    setBookmarks((prev) => prev.filter((item) => item.id !== idToDelete));
    setIsBookmarked((prev) => prev.filter((item) => item !== idToDelete));

    toast.success(t("bookmark_removed"));
  }, [t]);

  const clearAllItems = () => {
    localStorage.setItem("gbd-bookmarked", JSON.stringify([]));
    localStorage.setItem("gbd-isBookmarked", JSON.stringify([]));
    setBookmarks([])
    setIsBookmarked([])
    toast.success(t("all_bookmarks_removed"));
  };

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("gbd-bookmarked", JSON.stringify(bookmarks));
      localStorage.setItem("gbd-isBookmarked", JSON.stringify(isBookmarked));
    }
  }, [bookmarks, isBookmarked, isClient]);

  return (
    <BookmarksContext.Provider value={{ bookmarks, isBookmarked, handleAddBookmark, handleRemoveBookmark, clearAllItems }}>
      {children}
    </BookmarksContext.Provider>
  );
}
