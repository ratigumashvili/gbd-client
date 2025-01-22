"use client"

import { Tooltip } from 'react-tooltip'
import { useTranslations } from "next-intl"

export const Check = ({checked}) => {
    const t = useTranslations("Species")
    return (
        <>
            <p className='inline' data-tooltip-id="my-tooltip" data-tooltip-content={checked ? t("cheked") : t("not_cheked")}>
                {checked ? <span className='text-teal-700'>&#10003;</span> : <span className='text-red-700'>&#10007;</span>}
            </p>
            <Tooltip 
            id="my-tooltip" 
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