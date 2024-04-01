'use client'

import { useState } from "react";

import { Gallery } from "react-grid-gallery";

import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";


export default function ImageGallery({photos}) {
    
    const slides = photos.map(({ src, author, taxon, title, comment }) => ({
        src,
        title: taxon + ". " + title,
        description: comment !== null ? (author + ". " + comment) : author
    }));
    
    const [index, setIndex] = useState(-1);

    const handleClick = (index, item) => setIndex(index);

    return (
        <div>
            <Gallery
                images={photos}
                onClick={handleClick}
                enableImageSelection={false}
            />
            <Lightbox
                plugins={[Captions]}
                slides={slides}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
            />
        </div>
    )
}
