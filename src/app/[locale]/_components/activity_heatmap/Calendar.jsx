"use client";

import { useEffect, useState } from "react";
import ActivityCalendar from "react-activity-calendar";
import { Tooltip } from "react-tooltip";
import { isMobile } from "react-device-detect";
import { useLocale, useTranslations } from "next-intl";

import useDates from "@/src/app/[locale]/_hooks/useDates"

import CustomLegend from "./Features";
import { legendItems } from "./Features";

export default function Calendar() {
    const [selectedData, setSelectedData] = useState(null);
    const [activityData, setActivityData] = useState([])

    useEffect(() => {
        async function getActivityData() {
            try {
                const request = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/activity-calendar`, {
                    headers: { Accept: "application/json" }
                });
                if (!request.ok) throw new Error("Network response was not ok");
                const response = await request.json();
                setActivityData(response);
            } catch (error) {
                console.error("Failed to fetch activity data:", error);
            }
        }

        getActivityData();
    }, []);

    const { formattedStartDate, endDate } = useDates()

    const locale = useLocale()

    const data = activityData?.data?.map((item) => {
        return {
            count: item.count,
            date: item.date,
            level: item.level
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
        <section className="p-4 my-4 min-h-[400px] bg-slate-50 dark:bg-slate-600 rounded-md">
            <h2 className="text-xl font-medium mb-4">
                {t("GBDActivityCalendar")} ({formattedStartDate} - {endDate})
            </h2>

            <div className="relative">
                {data && data.length !== 0 ? (
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
                ) : <h1>No data to display</h1>}
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
        </section>
    );
}
