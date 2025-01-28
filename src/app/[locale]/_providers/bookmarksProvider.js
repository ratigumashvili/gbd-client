"use client";

import { createContext, useState, useEffect, useCallback } from "react";

import { useTranslations } from "next-intl";
import { toast } from "react-toastify";

export const BookmarksContext = createContext(null);

export default function BookmarksProvider({ children }) {
  const general = useTranslations("Common");

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

    setBookmarks((prev) => [...prev, record]);
    setIsBookmarked((prev) => [...prev, record.id]);

    toast.success(general("bookmark_added"));
  }, [isBookmarked, general]);

  const handleRemoveBookmark = useCallback((idToDelete) => {
    setBookmarks((prev) => prev.filter((item) => item.id !== idToDelete));
    setIsBookmarked((prev) => prev.filter((item) => item !== idToDelete));

    toast.success(general("bookmark_removed"));
  }, [general]);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("gbd-bookmarked", JSON.stringify(bookmarks));
      localStorage.setItem("gbd-isBookmarked", JSON.stringify(isBookmarked));
    }
  }, [bookmarks, isBookmarked]);

  return (
    <BookmarksContext.Provider value={{ bookmarks, isBookmarked, handleAddBookmark, handleRemoveBookmark }}>
      {children}
    </BookmarksContext.Provider>
  );
}
