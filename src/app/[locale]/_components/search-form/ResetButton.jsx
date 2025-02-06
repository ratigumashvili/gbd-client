"use client"

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "@/src/i18n/routing";
import { useTranslations } from "next-intl";

export default function ResetButton({ handleReset, formData, classNames }) {
    const [disabled, setDisabled] = useState(true)

    const pathname = usePathname();
    const router = useRouter();
    const t = useTranslations("Common");

    const handleClick = () => {
        handleReset()

        if (pathname === "/") {
            router.push("/", { scroll: false });
        }

        if (pathname === "/search") {
            router.push("/search", { scroll: false });
        }
    };

    useEffect(() => {
        const allFieldsEmpty = formData && Object.entries(formData)
            .filter(([key]) => key !== name)
            .every(([_, value]) => value?.trim() === "");

        if (allFieldsEmpty) {
            setDisabled(true)
        } else {
            setDisabled(false)
        }

        if(pathname === "/search") {
            setDisabled(false)
        }
    }, [formData])

    return (
        <button
            type="button"
            disabled={disabled}
            onClick={handleClick}
            className={`button-danger !py-[10px] disabled:opacity-50 disabled:cursor-not-allowed ${classNames}`}
        >
            {t("reset")}
        </button>
    );
}
