"use client"

import { useTranslations } from "next-intl"

export const legendItems = [
    {
        id: 1,
        label: "0",
        bg: "#f2f2f2"
    },
    {
        id: 2,
        label: "1-2",
        bg: "#8cc665"
    },
    {
        id: 3,
        label: "3-5",
        bg: "#44a340"
    },
    {
        id: 4,
        label: "5-7",
        bg: "#1e6823"
    },
    {
        id: 5,
        label: "7 >",
        bg: "#0a4a16"
    }
]

function CustomLegend() {
    const t = useTranslations("Index")

    return (
        <div className="absolute -bottom-8 sm:-bottom-[6px] right-0">
            <div className="flex items-center gap-1">
                <p>{t("legend")}</p>
                    <div className="flex items-center gap-1">
                        {legendItems.map(({ id, label, bg }, index) => (
                            <div key={id}
                                className="w-[30px] h-[30px] flex items-center justify-center rounded-sm text-xs"
                                style={{ backgroundColor: bg }}
                            >
                                <span className={index !== 0 ? "text-white" : "text-black"}>{label}</span>
                            </div>
                        ))}
                    </div>
            </div>
        </div>
    )
}

export default CustomLegend