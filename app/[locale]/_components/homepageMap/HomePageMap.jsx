'use client'

import { useState } from "react";

import Link from "next/link";

import "leaflet/dist/leaflet.css";

import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";

import "leaflet-defaulticon-compatibility";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import { Icon } from "leaflet";

import MarkerClusterGroup from "react-leaflet-cluster";

import { FullscreenControl } from "react-leaflet-fullscreen";
import "react-leaflet-fullscreen/styles.css";

import ApexChart from "react-apexcharts"

import { mapOptions } from "@/app/[locale]/_lib/constants"
import { places } from "@/app/[locale]/_lib/data";

import Chart from "../icons/Chart";
import List from "../icons/List";
import ArrowLeft from "../icons/ArrowLeft";
import ArrowRight from "../icons/ArrowRight";

const { center, zoom } = mapOptions

function HomePageMap() {

    const [speciesData, setSpeciesData] = useState([])
    const [view, setView] = useState("list")
    const [expanded, setExpanded] = useState(false)

    const handleChangeView = () => {
        view === 'list' ? setView("statistics") : setView("list")
    }

    const genusNames = speciesData?.map(({ name }) => name)
    const genusCount = speciesData?.map(({ species }) => species.length)

    const customIcon = new Icon({
        iconUrl: "/pin.svg",
        iconSize: [38, 38]
    })

    const option = {
        chart: {
            id: 'apexchart'
        },
        xaxis: {
            categories: genusNames,
            labes: {
                rotate: -45
            }
        },
        colors: ["#00796B"],
        title: {
            text: "Distribution of species by rank Genus",
            style: {
                fontSize: '16px',
                fontWeight: 'normal'
            }
        }
    }

    const series = [{
        name: 'Species',
        data: genusCount
    }]

    return (
        <div className="flex flex-col md:flex-row gap-4">

            <div className="flex-1">
                <MapContainer
                    preferCanvas={true}
                    center={center}
                    zoom={zoom}
                    scrollWheelZoom={true}
                    style={{ height: "400px", width: "100%" }}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        // url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <FullscreenControl position="topright" title="Toggle fulscreen" forceSeparateButton={true} />

                    <MarkerClusterGroup>

                        {places.map(({ id, geocode, popup, genus }) => {
                            const speciesLength = genus.map((item) => item.species.length)
                            return <Marker key={id} position={geocode} icon={customIcon}>
                                <Popup>
                                    <div className="flex flex-col gap-2">
                                        <h2>Place: {popup.placeName}</h2>
                                        <h3>Region: {popup.regionName}</h3>
                                        <h3>Registered Genus: {genus.length}</h3>
                                        <h4>Species total: {speciesLength.reduce((accumulator, currentValue) => accumulator + currentValue, 0)}</h4>
                                        <button className="button text-sm mt-2 whitespace-nowrap" onClick={() => setSpeciesData(genus)}>Load data</button>
                                    </div>
                                </Popup>
                            </Marker>
                        })}
                    </MarkerClusterGroup>
                </MapContainer>
            </div>

            <div className={`flex-1 h-[400px] overflow-y-auto ${!expanded ? 'md:max-w-[320px]' : 'md:[max-w-[600px]]'}`}>{speciesData.length === 0 ? "Click on markers to load data" : (

                <>

                    <div className="sticky top-0 right-0 bg-white dark:bg-slate-800 shadow-sm">
                        <div className="flex justify-between">
                            <button
                                onClick={() => setExpanded((prev) => !prev)}
                                className="hidden px-3 py-2 md:inline-block mb-4"
                                title={!expanded ? "Expand" : "Collapse"}
                            >
                                {!expanded ? <ArrowLeft width="18" height="18" /> : <ArrowRight width="18" height="18" />}
                            </button>
                            <button
                                onClick={() => handleChangeView()}
                                className="border border-teal-700 hover:bg-teal-700 hover:text-white dark:bg-teal-700 px-3 py-2 rounded-md text-sm inline-block mb-4 transition-all ease-in"
                            >
                                {view === "list" ? (
                                    <p className="flex gap-2 items-center h-5 w-full"><span className="text-nowrap">Chart view</span> <Chart /></p>
                                ) : (
                                    <p className="flex gap-2 items-center h-5 w-full"><span className="text-nowrap">List view</span> <List /></p>
                                )}
                            </button>
                        </div>
                    </div>

                    {view === "list" ? (
                        <ul>
                            {speciesData.map((genus) => (
                                <li key={genus.id} className="flex flex-col gap-2 py-2">

                                    <h2 className="font-medium">{genus.name} ({genus.species.length})</h2>

                                    {genus.species.map(({ id, name, url }) => (
                                        <div className="pl-4 flex flex-col gap-3" key={id}>
                                            <span>Species: <Link href={url} className="text-teal-600 underline hover:text-teal-700"><em>{name}</em></Link></span>
                                            <hr />
                                        </div>
                                    ))}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <ApexChart className="" type='bar' options={option} series={series} height={330} width={!expanded ? 320 : 600} />
                    )}

                </>

            )}
            </div>

        </div>
    )
}

export default HomePageMap