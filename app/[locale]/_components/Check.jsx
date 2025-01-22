"use client"

import { Tooltip } from 'react-tooltip'
import { useTranslations } from "next-intl"

export const Check = ({ status, evaluated }) => {
    const t = useTranslations("Species")

    const tooltipContent = status === 1 ? ` ${t("cheked")} ${evaluated}` : `${t("not_cheked")}`

    return (
        <>
            <p
                className='inline cursor-pointer ml-2'
                data-tooltip-id="species-check-tooltip"
                data-tooltip-content={tooltipContent}
            >
                {status === 1 ? <sup className='text-teal-700 text-sm'>&#10003;</sup> : <sup className='text-red-700 text-sm'>&#10007;</sup>}
            </p>
            <Tooltip
                id="species-check-tooltip"
                style={{
                    bopacity: 100,
                    fontSize: "14px",
                    backgroundColor: "black",
                    color: "white",
                    zIndex: 999,
                    padding: "2px 6px"
                }}
            />
        </>
    )
}