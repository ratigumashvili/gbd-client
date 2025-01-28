'use client'

import { Fragment } from 'react'
import { useTranslations } from "next-intl";
import { Icon } from 'leaflet';
import { TileLayer, MapContainer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from 'react-leaflet-cluster';
import { HeatmapLayer } from "react-leaflet-heatmap-layer-v3";
import { Tab } from '@headlessui/react'

import "leaflet/dist/leaflet.css";

import { FullscreenControl } from "react-leaflet-fullscreen";
import "react-leaflet-fullscreen/styles.css";

export default function Distribution({ heatMapCoordinates, pinMapCoordinates }) {

    const t = useTranslations("Species")

    if (!heatMapCoordinates) return

    const heatmapOptions = {
        radius: 20,
        blur: 20,
        maxZoom: 18,
        minOpacity: 0.5,
        maxOpacity: 1
    };

    const customIcon = new Icon({
        iconUrl: "/pin.svg",
        iconSize: [38, 38]
    })

    const key = process.env.REACT_APP_STADIA_API_KEY

    return (
        <div className="my-12">

            <Tab.Group>
                <div className='flex sm:flex-row flex-col gap-4 items-center justify-between mt-8 mb-6'>
                    <h2 className='block-title !translate-y-[0%]'>{t("species_distribution")}</h2>
                    <Tab.List className="flex gap-2 font-firaGo">
                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button
                                    className={
                                        selected ? 'bg-teal-700 text-white px-2 py-1 rounded-sm focus:outline-none' : 'px-2 py-1 border border-teal-700 rounded-sm'
                                    }
                                >
                                    {t("pinmap")}
                                </button>
                            )}
                        </Tab>
                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button
                                    className={
                                        selected ? 'bg-teal-700 text-white px-2 py-1 rounded-sm focus:outline-none' : 'px-2 py-1 border border-teal-700 rounded-sm'
                                    }
                                >
                                    {t("heatmap")}
                                </button>
                            )}
                        </Tab>
                    </Tab.List>
                </div>
                <Tab.Panels>
                    <Tab.Panel>

                        <MapContainer
                            center={[41.945963247270214, 43.87883890700455]}
                            zoom={7}
                            style={{ height: "450px", width: "100%", zIndex: '10' }}
                        >
                            <TileLayer
                                // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url={`https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}{r}.{ext}?key=${key}`}
                                ext="png"
                            />
                            <MarkerClusterGroup chunkedLoading>
                                {pinMapCoordinates?.map((marker, index) => (
                                    <Marker
                                        key={index}
                                        position={marker.geocode}
                                        icon={customIcon}
                                    >
                                        <Popup>
                                            <h3 className='text-base mb-2'>
                                                <span className='font-medium'>{t("place")}</span>: {marker?.popup?.place}
                                            </h3>
                                            <div>
                                            <p className='!my-1'><span>{t("latitude")}</span>: {marker.geocode[0]}</p>
                                            <p className='!my-1'><span>{t("longitude")}</span>: {marker.geocode[1]}</p>
                                            </div>
                                            {marker?.popup?.recorded_by && (
                                                <p><span className='font-medium'>{t("recorded_by")}:</span> {recorded_by}</p>
                                            )}
                                        </Popup>
                                    </Marker>
                                ))}
                            </MarkerClusterGroup>
                            <FullscreenControl position="topright" title="Toggle fulscreen" forceSeparateButton={true} />
                        </MapContainer>

                    </Tab.Panel>
                    <Tab.Panel>

                    <MapContainer
                            center={[41.99515909778738, 43.8193140872058]}
                            zoom={8}
                            style={{ height: "450px", width: "100%", zIndex: '10' }}
                        >
                            <HeatmapLayer
                                fitBoundsOnLoad
                                fitBoundsOnUpdate
                                points={heatMapCoordinates}
                                longitudeExtractor={(point) => point[1]}
                                latitudeExtractor={(point) => point[0]}
                                intensityExtractor={(point) => parseFloat(point[2])}
                                {...heatmapOptions}
                            />
                            <TileLayer
                                // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url={`https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}{r}.{ext}?key=${key}`}
                                ext="png"
                            />

                            <FullscreenControl position="topright" title="Toggle fulscreen" forceSeparateButton={true} />
                        </MapContainer>

                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>

            {/* <MapContainer
                center={[18.54181410564795, 73.79118672935255]}
                zoom={12}
                style={{ height: "350px", width: "100%", zIndex: '10' }}
            >
                <HeatmapLayer
                    fitBoundsOnLoad
                    fitBoundsOnUpdate
                    points={heatMapCoordinates}
                    longitudeExtractor={(point) => point[1]}
                    latitudeExtractor={(point) => point[0]}
                    intensityExtractor={(point) => parseFloat(point[2])}
                    {...heatmapOptions}
                />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <FullscreenControl position="topright" title="Toggle fulscreen" forceSeparateButton={true} />
            </MapContainer> */}
        </div>
    )
}
