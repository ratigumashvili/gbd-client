"use client"

import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { useTranslations } from "next-intl";

import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { useRouter } from "@/src/i18n/routing";

function TaxonomyParentGallery({ photos, taxon }) {

    const [images, setImages] = useState([])
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const router = useRouter()

    useEffect(() => {
        setImages(transformImageData(photos))
    }, [photos])

    const transformImageData = (data) =>
        data.map((item) => {

            const defaultWidth = 100;
            const defaultHeight = 150;

            return {
                id: item.id,
                src: item.file_url,
                thumbnail: item.file_url,
                thumbnailWidth: defaultWidth,
                thumbnailHeight: defaultHeight,
                width: item.metadata?.width || defaultWidth,
                height: item.metadata?.height || defaultHeight,
                caption: item.name,
                place: item.location,
                date: item.date_meta,
                comments: item.comment,
                author: item.author_title,
                uploadedBy: item.uploadedBy || null,
                size: Number(item.metadata.size / 1000),
                extension: item.extension
            };
        });

    const lightboxSlides = images.map((img) => (
        {
            src: img.src,
            title: img.caption,
            place: img.place,
            date: img.date,
            comments: img.comments,
            author: img.author,
            uploadedBy: img.uploadedBy,
            size: img.size,
            extension: img.extension
        }
    ));

    const handleImageClick = (index) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    const handleNavigate = () => {
        setLightboxOpen(false);
        router.push(taxon.path, {
            scroll: false
        })
    }

    const customThumbnailStyle = {
        width: "100%",
        height: "100px",
        objectFit: "cover",
        cursor: "pointer",
    };

    const t = useTranslations("Gallery")

    return (
        <section className="mb-4">
            <style>
                {`
                    .react-grid-gallery .ReactGridGallery_tile {
                        width: 100% !important; /* Match thumbnail width */
                        height: 100px !important; /* Match thumbnail height */
                    }
                    .ReactGridGallery_tile-viewport {
                        height: 100px!important
                    }
                    .ReactGridGallery_tile-viewport img {
                        opacity: 0.8;
                        transition: opacity 0.3s;
                    }
                    .ReactGridGallery_tile-viewport img:hover {
                        opacity: 1;
                    }
                `}
            </style>

            <Gallery
                images={images}
                thumbnailStyle={customThumbnailStyle}
                enableImageSelection={false}
                onClick={(index, e) => handleImageClick(index, e)}
            />

            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                slides={lightboxSlides}
                index={currentIndex}
                render={{
                    slide: ({ slide }) => (
                        <div className="relative text-center text-white">
                            <Image
                                src={slide.src}
                                alt={slide.title}
                                width={1000}
                                height={500}
                                style={{ maxWidth: '100%', height: '65vh', objectFit: 'contain' }}
                            />

                            <h2 className="text-3xl italic py-[5px] px-[10px] mb-1">{slide.title}</h2>

                            {taxon?.path && (
                                <div className="flex items-center justify-center gap-x-2 mb-3 text-lg">
                                    <span>{t("taxon")}:</span>
                                    <button onClick={handleNavigate}>
                                        {taxon.name}
                                    </button>
                                </div>
                            )}

                            <div className="flex flex-col gap-y-2 text-xs py-[5px] px-[10px]">
                                <div className="flex justify-center gap-2">
                                    {slide.author !== null && <p>{t("author")}: {slide.author}</p>}
                                    {slide.uploadedBy !== null && <p>{t("uploadedBy")}: {slide.uploadedBy}</p>}
                                </div>
                                <div className="flex justify-center gap-2">
                                    {slide.place !== null && <p>{t("place")}: {slide.place}</p>}
                                    {slide.date !== null && <p>{t("date")}: {slide.date}</p>}
                                </div>
                                {slide.comments && (
                                    <p>{t("comment")}: {slide.comments}</p>
                                )}
                                <Link href={slide.src} target="blank">
                                    {t("download")} {slide.size !== 0 && slide.size + " MB"} | {t("type")}: {slide.extension}
                                </Link>
                            </div>
                        </div>
                    ),
                }}
            />

        </section>
    )
}

export default TaxonomyParentGallery
