"use client"

import Image from 'next/image'
import React from 'react'

function CustomThumbnail({ image, index, onClick }) {

    if(!image) return null

    return (
        <div
            style={{
                width: "100%",
                height: "100px",
                overflow: "hidden",
                cursor: "pointer",
                position: "relative",
            }}
            onClick={() => onClick(index)}
        >
            <Image
                src={image.thumbnail}
                alt={image.caption}
                width={image.thumbnailWidth}
                height={image.thumbnailHeight}
                priority={image.priority} // ✅ Apply priority
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
        </div>
    )
}

export default CustomThumbnail