"use client"

import { useTranslations } from "next-intl"

import TaxonomyParentImage from "./TaxonomyParentImage"

function TaxonGallery({ photos }) {

    const t = useTranslations("Species")

    return (
        <>
            <h2 className='mt-8 mb-2 block-title'>{t("gallery")}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
                {photos?.map((image) => (
                    <TaxonomyParentImage
                        key={image.id}
                        {...image}
                        title={null}
                    />
                ))}
            </div>
        </>
    )
}

export default TaxonGallery