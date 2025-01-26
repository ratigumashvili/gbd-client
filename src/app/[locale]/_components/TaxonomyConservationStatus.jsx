"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { useLocale, useTranslations } from "next-intl";

import { getChartColors } from "@/src/app/[locale]/_lib/helpers";
import useIsMounted from "../_hooks/useIsMounted";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const codes = [
    { id: 1, code: "EX", count: 4 },
    { id: 2, code: "CR", count: 7 },
    { id: 3, code: "EN", count: 49 },
    { id: 4, code: "VU", count: 89 },
    { id: 5, code: "NT", count: 78 },
    { id: 6, code: "LC", count: 1177 },
    { id: 7, code: "NE", count: 611 },
    { id: 8, code: "DD", count: 608 },
    { id: 9, code: "RE", count: 4 },
];

const series = codes.map((item) => item.count);
const labels = codes.map((item) => item.code);

const ComponentTitle = ({ taxonName, totalCount }) => {
    const locale = useLocale();
    const t = useTranslations("Species");

    return (
        <div className="text-center mb-6">
            <h2 className="text-xl font-medium mb-2">
                {t("conservation_status_for")} {taxonName}
            </h2>
            {locale === "ka" ? (
                <p className="text-base text-gray-600 italic">
                    {taxonName}-ში შეფასებულია{" "}
                    <span className="text-medium text-teal-700">{totalCount}</span> სახეობა
                </p>
            ) : (
                <p className="text-base text-gray-600 italic">
                    <span className="text-medium text-teal-700">{totalCount}</span> Species are evaluated within {taxonName}
                </p>
            )}
        </div>
    );
};

const StatusCodes = ({ active }) => {
    const t = useTranslations("Species");

    return codes.map((item) => (
        <div key={item.id} className={`grid grid-cols-6 hover:bg-gray-100 ${item.code === active && "bg-gray-200"}`}>
            <span className="col-span-1 px-3 py-2">{item.code}</span>
            <span className="col-span-4 px-3 py-2">{t(item.code)}</span>
            <span className="col-span-1 px-3 py-2">{item.count}</span>
        </div>
    ));
};

const TaxonomyConservationStatus = ({ taxonName, totalCount }) => {
 
    const { isMounted } = useIsMounted()

    const [selectedLabel, setSelectedLabel] = useState(null);

    if (!isMounted) {
        return null
    }

    const options = {
        chart: {
            type: "pie",
            events: {
                dataPointSelection: function (event, chartContext, config) {
                    setSelectedLabel(config.w.globals.labels[config.dataPointIndex])
                }
            },
        },
        labels: labels,
        colors: codes.map((item) => getChartColors(item.code)),
        states: {
            hover: {
                filter: {
                    type: "darken",
                    value: 0.15,
                },
            },
        },
        responsive: [
            {
                breakpoint: 1200,
                options: {
                    chart: {
                        width: "100%",
                    },
                    legend: {
                        position: "bottom",
                    },
                },
            },
            {
                breakpoint: 820,
                options: {
                    chart: {
                        width: "100%",
                    },
                    legend: {
                        position: "bottom",
                    },
                },
            },
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: "100%",
                    },
                    legend: {
                        position: "bottom",
                    },
                },
            },
        ],
    };

    if (!isMounted) {
        return null;
    }

    return (
        <section className="border bg-slate-50/50 dark:bg-slate-600 rounded-md my-8 p-6">
            <ComponentTitle taxonName={taxonName} totalCount={totalCount} />
            <div className="flex flex-col gap-8 lg:grid lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <div className="overflow-x-auto border border-slate-100 bg-white rounded-md">
                        <StatusCodes active={selectedLabel} />
                    </div>
                </div>
                <div className="flex items-center justify-center w-full lg:col-span-1">
                    <div className="chart-container">
                        <ApexCharts options={options} series={series} type="pie" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TaxonomyConservationStatus;
