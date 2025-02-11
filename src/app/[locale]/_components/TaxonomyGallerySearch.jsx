"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/src/i18n/routing";

function TaxonomyGallerySearch() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    const t = useTranslations("Common");

    const initialSearchValue = searchParams.get("q") || "";
    const [searchValue, setSearchValue] = useState(initialSearchValue);

    const handleFormSubmit = useCallback(
        (e) => {
            e.preventDefault();

            if (!searchValue.trim()) return;

            const newParams = new URLSearchParams(searchParams);
            newParams.set("page", "1");
            newParams.set("q", searchValue.trim());

            router.replace(`${pathname}?${newParams.toString()}`);
        },
        [searchValue, router, pathname, searchParams]
    );

    useEffect(() => {
        setSearchValue(initialSearchValue);
    }, [initialSearchValue]);

    return (
        <div>
            <form onSubmit={handleFormSubmit} className="flex gap-2">
                <input
                    type="text"
                    name="latinName"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="px-3 py-2 border rounded-sm"
                    placeholder={t("latin_name")}
                />
                <button
                    type="submit"
                    className="button-secondary disabled:opacity-50 disabled:pointer-events-none"
                    disabled={searchValue.trim() === "" || searchValue.trim() === initialSearchValue}
                >
                    {t("submit")}
                </button>
                <button
                    type="button"
                    onClick={() => {
                        setSearchValue("");
                        router.push("/gallery");
                    }}
                    className="button-danger"
                >
                    {t("reset")}
                </button>
            </form>
        </div>
    );
}

export default TaxonomyGallerySearch;
