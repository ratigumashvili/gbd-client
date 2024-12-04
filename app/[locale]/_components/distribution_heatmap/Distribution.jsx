'use client'

import { TileLayer, MapContainer } from "react-leaflet";
import { useTranslations } from "next-intl";

import { HeatmapLayer } from "react-leaflet-heatmap-layer-v3";

import "leaflet/dist/leaflet.css";

import { FullscreenControl } from "react-leaflet-fullscreen";
import "react-leaflet-fullscreen/styles.css";

export default function Distribution({ data }) {

    const t = useTranslations("Species")

    const heatmapOptions = {
        radius: 20,
        blur: 20,
        maxZoom: 18,
        minOpacity: 0.5,
        maxOpacity: 1
    };

    return (
        <div className="my-4">
            <h2 className='mt-8 mb-2 block-title'>{t("map")}</h2>
            <MapContainer
                center={[18.54181410564795, 73.79118672935255]}
                zoom={12}
                style={{ height: "350px", width: "100%", zIndex: '10' }}
            >
                <HeatmapLayer
                    fitBoundsOnLoad
                    fitBoundsOnUpdate
                    points={data}
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
        </div>
    )
}
