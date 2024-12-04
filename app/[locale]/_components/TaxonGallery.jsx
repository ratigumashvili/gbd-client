"use client"

import { useTranslations } from "next-intl"

function TaxonGallery({ data }) {

    const t = useTranslations("Species")

    return (
        <div>
            <h2 className='mt-8 mb-2 block-title'>{t("gallery")}</h2>
            <pre>
            {JSON.stringify(data, null, 2)}
            </pre>
        </div>
    )
}

export default TaxonGallery