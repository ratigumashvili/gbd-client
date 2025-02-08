"use client"

import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

function HomePageChart({ data }) {

    const t = useTranslations("Index")

    const dataValues = data && data.length !== 0 && data?.map((item) => item.value)
    const labels = data && data.length !== 0 && data?.map((item) => item.status)

    const options = {
        chart: {
            type: "bar",
            toolbar: { show: false },
        },
        xaxis: {
            categories: labels,
            title: false,
        },
        yaxis: {
            title: { text: t("count") },
        },
        plotOptions: {
            bar: {
                horizontal: true,
                columnWidth: "50%",
            },
        },
        colors: [
            "#00897B"
        ],
        dataLabels: {
            enabled: false,
        },
        tooltip: {
            enabled: true,
            theme: "light",
            y: {
                formatter: (val) => `${val} ${t("species")}`,
                title: {
                    formatter: (seriesName) => `${"iucn"}:`,
                },
            },
            style: {
                fontSize: "14px",
            },
            marker: {
                show: false,
            },
        },
    };

    const series = [
        {
            name: false,
            data: dataValues,
        },
    ];

    return (
        <div className='p-4 border bg-white rounded-md min-h-[300px] flex flex-col justify-between relative'>
            <Chart options={options} series={series} type="bar" height={245} />
        </div>
    )
}

export default HomePageChart