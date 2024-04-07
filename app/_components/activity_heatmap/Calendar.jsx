'use client'

import { useState } from "react"

import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

import { activityChartData } from "@/app/_lib/data";

export default function Calendar() {
    const [count, setCount] = useState('')

    const d = new Date()

    const startDate = new Date(`${(d.getFullYear() - 1)}-${d.getMonth()}-${d.getDate()}`)
    const endDate = new Date(`${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`)

    return (
        <div className="p-4 my-4 bg-slate-50 rounded-md">
            <h2 className='text-2xl font-medium mb-4'>GBD activity calendar ({`${d.getFullYear() - 1} - ${d.getFullYear()}`})</h2>
            <CalendarHeatmap
                horizontal={true}
                classForValue={(value) => {
                    if (!value) {
                        return 'color-empty';
                    }
                    return `color-scale-${value.count}`;
                }}
                onClick={(value) => setCount(value ? value : '')}
                startDate={startDate}
                endDate={endDate}
                values={activityChartData}
            />
            <div className='flex items-center justify-between my-2'>
                <div>
                    {count !== '' && (<>Date: {count?.date}. Record(s) registered: {count?.count}</>)}
                </div>
                <div className="flex items-center gap-2">
                    <span>Legend: </span>
                    <div className="legend-box" style={{ backgroundColor: "#d6e685" }}>1-5</div>
                    <div className="legend-box" style={{ backgroundColor: "#8cc665" }}>5-10</div>
                    <div className="legend-box" style={{ backgroundColor: "#44a340", color: "white" }}>10-20</div>
                    <div className="legend-box" style={{ backgroundColor: "#1e6823", color: "white" }}>20 &#62;</div>
                </div>
            </div>
        </div>
    )
}
