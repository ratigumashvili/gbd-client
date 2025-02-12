"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname, useRouter } from "@/src/i18n/routing";
import { useTranslations } from "next-intl";
import { useIsMobile } from "@/src/app/[locale]/_hooks/useIsMobile";

function PaginationNumbers({ path, searchParams, currentPage, total }) {
    const [current, setCurrent] = useState(Number(currentPage) || 1);
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations("Common");

    const isMobile = useIsMobile({
        width: 768,
        customAgent: navigator.userAgent,
    });

    useEffect(() => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set("page", current);
        router.replace(`${pathname}?${newParams.toString()}`, { scroll: false });
    }, [current, searchParams, pathname, router]);

    useEffect(() => {
        if (Number(searchParams.page)) {
            setCurrent(Number(searchParams.page));
        } else {
            setCurrent(1);
        }
    }, [searchParams.page]);

    useEffect(() => {
        if (current > total) {
            setCurrent(total);
        }
    }, [total]);

    const goToPage = useCallback((page) => {
        if (page >= 1 && page <= total) {
            setCurrent(page);
        }
    }, [total]);

    const getPages = useCallback(() => {
        const maxPages = isMobile ? 4 : 8;
        const half = Math.floor(maxPages / 2);

        let start = Math.max(1, current - half);
        let end = Math.min(total, start + maxPages - 1);

        if (end - start < maxPages - 1) {
            start = Math.max(1, end - maxPages + 1);
        }

        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    }, [current, total, isMobile]);

    return (
        <div className={`flex items-center gap-2 mt-8 ${isMobile ? "justify-center" : "justify-start"}`}>
            {!isMobile && (
                <button
                    onClick={() => goToPage(current - 1)}
                    disabled={current === 1}
                    className="button disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {t("prev")}
                </button>
            )}

            {current > 3 && (
                <>
                    <button onClick={() => goToPage(1)} className="button">1</button>
                    <span className="px-2">...</span>
                </>
            )}

            {getPages().map((page) => (
                <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`button ${current === page ? "!bg-teal-700 !text-white" : ""}`}
                >
                    {page}
                </button>
            ))}

            {current < total - 2 && (
                <>
                    <span className="px-2">...</span>
                    <button onClick={() => goToPage(total)} className="button">{total}</button>
                </>
            )}

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

export default PaginationNumbers;