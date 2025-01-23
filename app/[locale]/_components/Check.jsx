"use client"

import { Tooltip } from 'react-tooltip'
import {isMobile} from "react-device-detect"

import {useGetStatus} from "@/app/[locale]/_hooks/useGetStatus"

export const Check = ({ status, evaluated }) => {
    const tooltipContent = useGetStatus(status, evaluated)
    return (
        <>
            <button
                className='inline cursor-pointer ml-2 px-2 border'
                data-tooltip-id="species-check-tooltip"
                data-tooltip-content={tooltipContent}
            >
                {status === 1 ? <sup className='text-teal-700 text-sm'>&#10003;</sup> : <sup className='text-red-700 text-sm'>&#10007;</sup>}
            </button>
            <Tooltip
                id="species-check-tooltip"
                style={{
                    bopacity: 100,
                    fontSize: "14px",
                    backgroundColor: "black",
                    color: "white",
                    zIndex: 999,
                    padding: "2px 6px",
                    width: isMobile ? "200px" : "auto",
                    textAlign: "center"
                }}
            />
        </>
    )
}