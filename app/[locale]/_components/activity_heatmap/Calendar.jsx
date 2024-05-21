'use client'

import { useState } from "react"

import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

import { activityChartData } from "@/app/[locale]/_lib/data";
import { useTranslations } from "next-intl";

export default function Calendar() {
    const [count, setCount] = useState('')

    const d = new Date()

    const startDate = new Date(`${(d.getFullYear() - 1)}-${d.getMonth()}-${d.getDate()}`)
    const endDate = new Date(`${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`)

    const t = useTranslations("Index")

    return (
        <div className="p-4 my-4 bg-slate-50 dark:bg-slate-600 rounded-md">
            <h2 className='text-2xl font-medium mb-4'>{t("GBDActivityCalendar")} ({`${d.getFullYear() - 1} - ${d.getFullYear()}`})</h2>
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
                    {count !== '' && (<span className="font-firaGo">{t("date")}: {count?.date}. {t("recordsRegistered")}: {count?.count}</span>)}
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-firaGo">{t("legend")}: </span>
                    <div className="legend-box" style={{ backgroundColor: "#d6e685", color: "black" }}>1-5</div>
                    <div className="legend-box" style={{ backgroundColor: "#8cc665", color: "black" }}>5-10</div>
                    <div className="legend-box" style={{ backgroundColor: "#44a340", color: "white" }}>10-20</div>
                    <div className="legend-box" style={{ backgroundColor: "#1e6823", color: "white" }}>20 &#62;</div>
                </div>
            </div>
        </div>
    )
}
