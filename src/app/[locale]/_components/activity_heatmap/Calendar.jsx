"use client";

import { useEffect, useState } from "react";
import ActivityCalendar from "react-activity-calendar";
import { Tooltip } from "react-tooltip";
import { isMobile } from "react-device-detect";
import { useTranslations } from "next-intl";

import { getValue } from "@/src/app/[locale]/_lib/helpers"
import useDates from "@/src/app/[locale]/_hooks/useDates"

const activityChartData = [
    { date: "2022-12-01", count: 0 },
    { date: "2023-12-01", count: 0 },
    { date: "2024-04-01", count: 0 },
    { date: "2024-05-22", count: 1 },
    { date: "2024-06-01", count: 2 },
    { date: "2024-06-27", count: 3 },
    { date: "2024-06-28", count: 4 },
    { date: "2024-07-28", count: 5 },
    { date: "2024-08-01", count: 0 },
    { date: "2024-09-02", count: 4 },
    { date: "2024-09-05", count: 7 },
    { date: "2024-09-12", count: 1 },
    { date: "2024-09-20", count: 2 },
    { date: "2024-11-22", count: 10 },
    { date: "2024-11-29", count: 11 },
    { date: "2025-01-03", count: 2 },
    { date: "2025-01-04", count: 3 },
];

export default function Calendar() {
    const [selectedData, setSelectedData] = useState(null);

    const { formattedStartDate, endDate } = useDates()

    const data = activityChartData.map((item) => {
        return {
            count: item.count,
            date: item.date,
            level: getValue(item.count)
        }
    }).filter(d => d.date >= formattedStartDate && d.date <= endDate)

    const explicitTheme = {
        light: ['#f2f2f2', '#8cc665', '#44a340', '#1e6823', '#0a4a16'],
        dark: ['#f2f2f2', '#8cc665', '#44a340', '#1e6823', '#0a4a16'],
    };

    const t = useTranslations("Index");

    useEffect(() => {
        const scrollable = document.querySelector('.react-activity-calendar__scroll-container');
        if (scrollable) {
            scrollable.scrollLeft = scrollable.scrollWidth;
        }
    }, [data]);

    return (
        <div className="p-4 my-4 bg-slate-50 dark:bg-slate-600 rounded-md">
            <h2 className="text-xl font-medium mb-4">
                {t("GBDActivityCalendar")} ({formattedStartDate} - {endDate})
            </h2>

            {data && data.length !== 0 && (
                <ActivityCalendar
                    data={data}
                    blockSize={20}
                    blockGap={3}
                    theme={explicitTheme}
                    fontSize={16}
                    eventHandlers={{
                        onClick: (event) => (activity) => setSelectedData(activity)
                    }}
                    renderColorLegend={(block, level) => (
                        <button
                            title={`${t("level")}: ${level}`}
                            data-tooltip-id="nrls-check-tooltip"
                            data-tooltip-content={`${t("level")}: ${level}`}
                        >
                            {block}
                        </button>
                    )}
                    labels={{
                        legend: {
                            less: t("less"),
                            more: t("more"),
                        },
                        months: [
                            t("jan"),
                            t("feb"),
                            t("mar"),
                            t("apr"),
                            t("may"),
                            t("jun"),
                            t("jul"),
                            t("aug"),
                            t("sep"),
                            t("oct"),
                            t("nov"),
                            t("dec")
                        ],
                        totalCount: `{{count}} ${t("total")}`,
                    }}
                />
            )}

            <div className="flex items-center justify-between my-2">
                {selectedData && selectedData?.count !== 0 && (
                    <div>
                        <span className="font-firaGo">
                            {t("date")}: {selectedData?.date}. {t("recordsRegistered")}:{" "}
                            {selectedData?.count}
                        </span>
                    </div>
                )}

                <Tooltip
                    id="nrls-check-tooltip"
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
            </div>
        </div>
    );
}
