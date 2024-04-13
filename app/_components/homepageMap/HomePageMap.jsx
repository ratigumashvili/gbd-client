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

import { mapOptions } from "@/app/_lib/constants"
import { places } from "@/app/_lib/data";

const { center, zoom } = mapOptions

function HomePageMap() {

    const [speciesData, setSpeciesData] = useState([])

    const customIcon = new Icon({
        iconUrl: "/pin.svg",
        iconSize: [38, 38]
    })

    const initialValue = 0

    let sum = 0

    let arr

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
                        {/* {places.map(({ id, geocode, popup, species }) => (
                            <Marker key={id} position={geocode} icon={customIcon}>
                                <Popup>
                                    <div className="flex flex-col gap-2">
                                        <h2>Place: {popup.placeName}</h2>
                                        <h3>Region: {popup.regionName}</h3>
                                        <h3>Records: {species.length}</h3>
                                        <button className="button text-sm mt-2 whitespace-nowrap" onClick={() => setSpeciesData(species)}>Load data</button>
                                    </div>
                                </Popup>
                            </Marker>
                        ))} */}

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

            <div className="flex-1 md:max-w-[320px] h-[400px] overflow-y-auto">{speciesData.length === 0 ? "Click on markers to load data" : (
                
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

            )}
            </div>

        </div>
    )
}

export default HomePageMap