'use client'

import { Fragment } from 'react'
import { TileLayer, MapContainer, Marker, Popup } from "react-leaflet";
import { Icon } from 'leaflet';
import { useTranslations } from "next-intl";
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

    return (
        <div className="my-12">

            <Tab.Group>
                <div className='flex items-center justify-between'>
                    <h2 className='mt-8 mb-2 block-title'>{t("species_distribution")}</h2>
                    <Tab.List className="flex gap-2 font-firaGo">
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
                    </Tab.List>
                </div>
                <Tab.Panels>
                    <Tab.Panel>

                        <MapContainer
                            center={[41.99515909778738, 43.8193140872058]}
                            zoom={9}
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
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />

                            <FullscreenControl position="topright" title="Toggle fulscreen" forceSeparateButton={true} />
                        </MapContainer>

                    </Tab.Panel>
                    <Tab.Panel>

                        <MapContainer
                            center={[41.69529844295701, 44.64207321992462]}
                            zoom={8}
                            style={{ height: "450px", width: "100%", zIndex: '10' }}
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {pinMapCoordinates?.map((marker) => (
                                <Marker
                                    position={marker.geocode}
                                    icon={customIcon}
                                >
                                    <Popup>
                                        <h3 className='text-base'>
                                            <span className='font-medium'>{t("place")}</span>: {marker?.popup?.place}
                                        </h3>
                                        {marker?.popup?.recorded_by && (
                                            <p><span className='font-medium'>{t("recorded_by")}:</span> {recorded_by}</p>
                                        )}
                                    </Popup>
                                </Marker>
                            ))}
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
