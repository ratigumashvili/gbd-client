'use client'

import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useTranslations } from 'next-intl';
import { v4 as uuidv4 } from 'uuid';

import SingleTaxonConservation from "@/src/app/[locale]/_components/singleTaxon/SingleTaxonConservation"
import SingleTaxonMeta from "@/src/app/[locale]/_components/singleTaxon/SingleTaxonMeta"
import ActionsDropdown from "@/src/app/[locale]/_components/ActionsDropdown"
import Map from "@/src/app/[locale]/_components/distribution_map"
import Cite from '@/src/app/[locale]/_components/Cite';
import TaxonomyParentGallery from '@/src/app/[locale]/_components/TaxonomyParentGallery';
import TaxonHeading from '@/src/app/[locale]/_components/TaxonHeading';

import { useFullUrl } from '@/src/app/[locale]/_hooks/useFullUrl';
import TaxonomyParentNodes from '../TaxonomyParentNodes';

export default function SingleRecord({ data, heatMapCoordinates, pinMapCoordinates, reversedParent }) {

    const printContent = useRef();

    const handlePrint = useReactToPrint({
        content: () => printContent.current,
        documentTitle: `GBD - ${data?.metadata?.scientific_name}`,
        pageStyle: 'p-8'
    });

    const fullUrl = useFullUrl()

    // const taxon = {
    //     name: data?.metadata?.name,
    //     path: fullUrl
    // }

    const t = useTranslations("Species")

    const headingData = {
        id: data?.metadata?.scientific_name_id || uuidv4(),
        title: data?.metadata?.name,
        scienttificId: data?.metadata?.scientific_name_id,
        rank: data?.metadata?.taxon_rank || "Species",
        url: fullUrl,
        isSpecie: true,
        status: data?.metadata?.conversation_status,
        evaluatedBy: data?.metadata?.evaluated_by,
    }

    // Single Specie page

    return (
        <div className="py-4" ref={printContent}>
            <pre>{JSON.stringify(data.metadata, null, 2)}</pre>
            <div className="flex items-center justify-between mb-6">
                <TaxonHeading headingData={headingData} />
                <ActionsDropdown
                    handlePrint={handlePrint}
                    data={data}
                    heatMapCoordinates={heatMapCoordinates}
                    pinMapCoordinates={pinMapCoordinates}
                    isSpecie={true}
                    downloadContent={true}
                />
            </div>

            <div className="flex flex-col gap-4">
                {data?.files?.length !== 0 &&
                    <>
                        <TaxonomyParentGallery
                            photos={data?.files}
                            componentTitle={t("gallery")}
                        // taxon={taxon} 
                        />
                    </>
                }
                <div className='flex flex-col md:flex-row gap-4'>
                    <SingleTaxonMeta
                        data={data}
                        rank={"https://dwc.tdwg.org/list/#dwc_taxonRank"}
                        accordingTo={`https://dwc.tdwg.org/list/#dwc_nameAccordingTo`}
                        sna={`https://dwc.tdwg.org/list/#dwc_scientificNameAuthorship`}
                        vernakularName={``}
                    />
                    <SingleTaxonConservation data={data} />
                </div>
            </div>

            <TaxonomyParentNodes data={reversedParent} />

            {heatMapCoordinates !== 0 && <Map heatMapCoordinates={heatMapCoordinates} pinMapCoordinates={pinMapCoordinates} className="-z-0" />}

            <div className='mt-8 mb-4'>
                <Cite name={data?.metadata?.name} />
            </div>

        </div>
    )
}
