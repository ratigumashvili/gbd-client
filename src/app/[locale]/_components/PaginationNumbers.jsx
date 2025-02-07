"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "@/src/i18n/routing";
import { useTranslations } from "next-intl";

function Pagination({ path, searchParams, currentPage, total }) {
    const [current, setCurrent] = useState(+currentPage || 1);
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations("Common");

    const url = pathname + `?id=${searchParams?.id}&page=`;
    const searchPageUrl = path + "&page=";

    useEffect(() => {
        if (path !== null) {
            router.replace(searchPageUrl + current, { scroll: false });
        } else {
            router.replace(url + current, { scroll: false });
        }
    }, [current, path, router, url]);

    useEffect(() => {
        if (current > total) {
            setCurrent(total);
        }
    }, [current, total]);

    // ✅ Function to Handle Page Click
    const goToPage = (page) => {
        setCurrent(page);
    };

    // ✅ Create Page Numbers (Max 5 at a Time)
    const getPages = () => {
        let pages = [];
        const maxPages = 5; // Adjust max pages shown at a time

        let start = Math.max(1, current - Math.floor(maxPages / 2));
        let end = Math.min(total, start + maxPages - 1);

        if (end - start < maxPages - 1) {
            start = Math.max(1, end - maxPages + 1);
        }

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        return pages;
    };

    return (
        <div className="flex items-center justify-center gap-2 mt-4">
            {/* Prev Button */}
            <button
                onClick={() => goToPage(current - 1)}
                disabled={current === 1}
                className="button disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {t("prev")}
            </button>

            {/* First Page Button (Show if not in the visible range) */}
            {current > 3 && (
                <>
                    <button
                        onClick={() => goToPage(1)}
                        className="button"
                    >
                        1
                    </button>
                    <span className="px-2">...</span>
                </>
            )}

            {/* Page Numbers */}
            {getPages().map((page) => (
                <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`button ${current === page ? "!bg-teal-500 !border-none text-white" : ""}`}
                >
                    {page}
                </button>
            ))}

            {/* Last Page Button (Show if not in the visible range) */}
            {current < total - 2 && (
                <>
                    <span className="px-2">...</span>
                    <button
                        onClick={() => goToPage(total)}
                        className="button"
                    >
                        {total}
                    </button>
                </>
            )}

            {/* Next Button */}
            <button
                onClick={() => goToPage(current + 1)}
                disabled={current === total}
                className="button disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {t("next")}
            </button>
        </div>
    );
}

export default Pagination;
