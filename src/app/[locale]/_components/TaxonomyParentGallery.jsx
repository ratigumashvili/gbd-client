"use client"

import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import { useRouter } from "@/src/i18n/routing";

import SkeletonLoader from "@/src/app/[locale]/_components/SkeletonLoader";
import CustomThumbnail from "@/src/app/[locale]/_components/CustomThumbnail";
import LoadingIcon from "@/src/app/[locale]/_components/icons/LoadingIcon";

import { filterTaxonValue, generateUrl } from "@/src/app/[locale]/_lib/helpers";
import { ORDER } from "@/src/app/[locale]/_lib/constants";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

function TaxonomyParentGallery({ photos, componentTitle, taxon }) {

    const [images, setImages] = useState([])
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const router = useRouter()

    const transformImageData = (data) =>
        data && Array.isArray(data) && data.length !== 0
            ? data.map((item, index) => {
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
                    extension: item.extension,
                    priority: index < 3,
                    url: Array.isArray(item.related_items)
                        ? item.related_items.filter(Boolean).map(generateUrl)
                            .filter(item => ORDER.includes(item.type))
                            .sort((a, b) => ORDER.indexOf(a.type) - ORDER.indexOf(b.type))
                        : []
                };
            })
            : [];


    useEffect(() => {
        setImages(transformImageData(photos))
    }, [photos])


    const lightboxSlides = images && images.length !== 0 && images?.map((img, index) => (
        {
            src: img.src,
            title: img.caption,
            place: img.place,
            date: img.date,
            comments: img.comments,
            author: img.author,
            uploadedBy: img.uploadedBy,
            size: img.size,
            extension: img.extension,
            id: img.id,
            url: img.url
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

            {componentTitle && (<h2 className='mt-8 mb-0 font-medium block-title'>{componentTitle}</h2>)}

            {images?.length === 0 ? (
                <div className="flex flex-wrap gap-1">
                    {Array.from({ length: photos?.length }).map((_, idx) => (
                        <SkeletonLoader key={idx} classNames={"w-full max-w-[120px] h-[100px]"} />
                    ))}
                </div>
            ) : (
                <Gallery
                    images={images}
                    enableImageSelection={false}
                    thumbnailImageComponent={({ index }) => (
                        <CustomThumbnail
                            image={images[index]}
                            index={index}
                            onClick={(index) => handleImageClick(index)}
                        />
                    )}
                />
            )}

            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                slides={lightboxSlides}
                index={currentIndex}
                render={{
                    slide: ({ slide }) => (
                        <div className="text-center text-white w-full">
                            <div style={{ position: "relative", width: "100%", height: "65vh" }}>
                                <Image
                                    src={slide.src}
                                    alt={slide.title}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    className="z-10"
                                />
                                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <LoadingIcon width="30" height="30" className="animate-spin" />
                                </p>
                            </div>

                            <div className="mb-1 flex flex-col items-center justify-center gap-2 mx-auto">
                                <h2 className="text-3xl italic py-[5px] px-[10px] w-max">
                                    {slide.title}
                                </h2>
                                <div className="hidden md:flex flex-wrap gap-2 items-center justify-center">
                                    {slide.url.map((item, index) => (
                                        <div key={index}>
                                            <span className="capitalize">{filterTaxonValue(item.type)}</span>: <Link href={`${filterTaxonValue(item.url)}`} className="pl-2 text-teal-600 hover:underline">{item.name}</Link>
                                        </div>
                                    ))}
                                </div>
                            </div>

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
