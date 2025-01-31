"use client";

import { useEffect, useState } from "react";
import ActivityCalendar from "react-activity-calendar";
import { Tooltip } from "react-tooltip";
import { isMobile } from "react-device-detect";
import { useLocale, useTranslations } from "next-intl";

import { getValue } from "@/src/app/[locale]/_lib/helpers"
import useDates from "@/src/app/[locale]/_hooks/useDates"

import CustomLegend from "./Features";
import { legendItems } from "./Features";

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
    { date: "2025-01-08", count: 1 },
    { date: "2025-01-10", count: 10 },
    { date: "2025-01-16", count: 2 },
    { date: "2025-01-17", count: 3 },
    { date: "2025-01-20", count: 1 },
    { date: "2025-01-23", count: 3 },
    { date: "2025-01-29", count: 1 },
    { date: "2025-01-31", count: 6 },
];

export default function Calendar() {
    const [selectedData, setSelectedData] = useState(null);

    const { formattedStartDate, endDate } = useDates()

    const locale = useLocale()

    const data = activityChartData.map((item) => {
        return {
            count: item.count,
            date: item.date,
            level: getValue(item.count),
        }
    }).filter(d => d.date >= formattedStartDate && d.date <= endDate)

    const explicitTheme = {
        light: legendItems.map((item) => (item.bg)),
        dark: legendItems.map((item) => item.bg)
    };

    useEffect(() => {
        const scrollable = document.querySelector('.react-activity-calendar__scroll-container');
        if (scrollable) {
            scrollable.scrollLeft = scrollable.scrollWidth;
        }
    }, [data]);

    const t = useTranslations("Index");

    return (
        <div className="p-4 my-4 min-h-[400px] bg-slate-50 dark:bg-slate-600 rounded-md">
            <h2 className="text-xl font-medium mb-4">
                {t("GBDActivityCalendar")} ({formattedStartDate} - {endDate})
            </h2>

            <div className="relative">
                {data && data.length !== 0 && (
                    <ActivityCalendar
                        data={data}
                        blockSize={20}
                        blockGap={3}
                        theme={explicitTheme}
                        fontSize={16}
                        hideColorLegend={true}
                        hideTotalCount={false}
                        eventHandlers={{
                            onClick: (event) => (activity) => setSelectedData(activity)
                        }}
                        labels={{
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
                            totalCount: locale === "ka" ? `${t("total")} {{count}} ${t("record")}` : `{{count}} ${t("total")}`,
                        }}
                    />
                )}
                <CustomLegend />
            </div>

            <div className="flex items-center justify-between mt-10 sm:my-4">
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
                    opacity={100}
                    style={{
                        zIndex: 999,
                        width: isMobile ? "200px" : "auto",
                        padding: "2px 6px",
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
