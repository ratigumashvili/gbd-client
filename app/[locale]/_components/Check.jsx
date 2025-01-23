"use client"

import { Tooltip } from 'react-tooltip'
import {isMobile} from "react-device-detect"

import {useGetStatus} from "@/app/[locale]/_hooks/useGetStatus"

export const Check = ({ status, evaluated }) => {
    const tooltipContent = useGetStatus(status, evaluated)
    return (
        <>
            <button
                className='inline cursor-pointer ml-2 px-2'
                data-tooltip-id="species-check-tooltip"
                data-tooltip-content={tooltipContent}
            >
                {status === 1 ? <sup className='text-teal-700 text-sm'>&#10003;</sup> : <sup className='text-red-700 text-sm'>&#10007;</sup>}
            </button>
            <Tooltip
                id="species-check-tooltip"
                style={{
                    zIndex: 999,
                    width: isMobile ? "200px" : "auto",
                    padding: "2px 6px",
                    opacity: 100,
                    backgroundColor: "black",
                    color: "white",
                    fontSize: "14px",
                    textAlign: "center"
                }}
            />
        </>
    )
}