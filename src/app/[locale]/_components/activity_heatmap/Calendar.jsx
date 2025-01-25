'use client'

import { useState } from "react";
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { useTranslations } from "next-intl";

const activityChartData = [
    { date: '2024-04-01', count: 1 },
    { date: '2024-05-22', count: 22 },
    { date: '2024-06-01', count: 6 },
    { date: '2024-06-27', count: 11 },
    { date: '2024-06-28', count: 3 },
    { date: '2025-06-29', count: 8 },
    { date: '2025-11-03', count: 2 },
    { date: '2025-11-04', count: 3 },
    { date: '2024-12-28', count: 6 },
    { date: '2025-01-01', count: 12 },
    { date: '2025-01-02', count: 30 },
    { date: '2025-01-05', count: 5 },
    { date: '2025-01-12', count: 10 },
    { date: '2025-01-20', count: 8 },
    { date: '2025-01-22', count: 20 },
];

export default function Calendar() {
    const [count, setCount] = useState('');
    const today = new Date();
    const startDate = new Date(today);
    startDate.setFullYear(today.getFullYear() - 1);

    const t = useTranslations("Index");

    return (
        <div className="p-4 my-4 bg-slate-50 dark:bg-slate-600 rounded-md">
            <h2 className='text-2xl font-medium mb-4'>
                {t("GBDActivityCalendar")} ({`${startDate.toDateString()} - ${today.toDateString()}`})
            </h2>
            <CalendarHeatmap
                horizontal={true}
                classForValue={(value) => {
                    if (!value) {
                        return 'color-empty';
                    }
                    if (value.count >= 30) return `color-scale-30`
                    return `color-scale-${value.count}`;
                }}
                onClick={(value) => setCount(value || '')}
                startDate={startDate}
                endDate={today}
                values={activityChartData}
            />
            <div className='flex items-center justify-between my-2'>
                <div>
                    {count !== '' && (
                        <span className="font-firaGo">{t("date")}: {count?.date}. {t("recordsRegistered")}: {count?.count}</span>
                    )}
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-firaGo">{t("legend")}: </span>
                    <div className="legend-box" style={{ backgroundColor: "#d6e685", color: "black" }}>1-5</div>
                    <div className="legend-box" style={{ backgroundColor: "#8cc665", color: "black" }}>5-10</div>
                    <div className="legend-box" style={{ backgroundColor: "#44a340", color: "white" }}>10-20</div>
                    <div className="legend-box" style={{ backgroundColor: "#1e6823", color: "white" }}>20-30</div>
                    <div className="legend-box" style={{ backgroundColor: "#0a4a16", color: "white" }}>50+</div>
                </div>
            </div>
        </div>
    );
}

