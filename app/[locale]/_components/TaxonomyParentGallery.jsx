"use client"

import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { useTranslations } from "next-intl";

import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

function TaxonomyParentGallery({ photos }) {

    const [images, setImages] = useState([])
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setImages(transformImageData(photos))
    }, [])

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
                comments: item.comments || "Lorem ipsum dolor",
                author: item.author || "Author name",
                uploadedBy: item.uploadedBy || "Uploaded by"
            };
        });

    const lightboxSlides = images.map((img) => (
        {
            src: img.src,
            title: img.caption,
            comments: img.comments,
            author: img.author,
            uploadedBy: img.uploadedBy
        }
    ));

    const handleImageClick = (index) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    const customThumbnailStyle = {
        width: "100%",
        height: "100px",
        objectFit: "cover",
        cursor: "pointer",
    };

    const t = useTranslations("Gallery")

    return (
        <section>

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
                                style={{ maxWidth: '100%', height: '80vh', objectFit: 'contain' }}
                            />

                            <h2 className="text-2xl italic py-[5px] px-[10px]">{slide.title}</h2>

                            <div className="flex flex-col gap-y-1 text-xs py-[5px] px-[10px]">
                                <div className="flex justify-center gap-2">
                                    <p>{t("author")}: {slide.author}</p>
                                    <p>{t("uploadedBy")}: {slide.uploadedBy}</p>
                                </div>
                                <p>{t("comment")}: {slide.comments}</p>
                                <Link href={slide.src} target="blank">
                                    {t("download")}
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
