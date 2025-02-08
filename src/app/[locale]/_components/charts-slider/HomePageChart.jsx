"use client"

import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

function HomePageChart({ data, locale }) {

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
            custom: function ({ series, seriesIndex, dataPointIndex }) {
                return `
                  <div style="padding: 8px; background: #00564d; color: #fff; border-radius: 5px">
                    <span>${series[seriesIndex][dataPointIndex]}</span> ${locale === "ka" ? "სახეობა კოდით" : "species are in category"} 
                    <strong>${options.xaxis.categories[dataPointIndex]}</strong>
                  </div>
                `;
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