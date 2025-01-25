'use client'

import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useTranslations } from 'next-intl';

import SingleTaxonConservation from "@/src/app/[locale]/_components/singleTaxon/SingleTaxonConservation"
import SingleTaxonMeta from "@/src/app/[locale]/_components/singleTaxon/SingleTaxonMeta"
import ActionsDropdown from "@/src/app/[locale]/_components/ActionsDropdown"
import Map from "@/src/app/[locale]/_components/distribution_heatmap"
import Cite from '@/src/app/[locale]/_components/Cite';
import TaxonomyParentGallery from '@/src/app/[locale]/_components/TaxonomyParentGallery';
import { Check } from '@/src/app/[locale]/_components/Check';
 
export default function SingleRecord({ data, heatMapCoordinates, pinMapCoordinates }) {

    const printContent = useRef();

    const handlePrint = useReactToPrint({
        content: () => printContent.current,
        documentTitle: `GBD - ${data?.metadata?.scientific_name}`,
        pageStyle: 'p-8'
    });

    const t = useTranslations("Species")

    // Single Specie page

    return (
        <div className="py-4" ref={printContent}>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-medium">{data?.metadata?.name} 
                    <Check status={data?.metadata?.conversation_status} evaluated={data?.metadata?.evaluated_by} />
                </h2>
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
                        <h2 className='mt-8 mb-0 font-medium block-title'>{t("gallery")}</h2>
                        <TaxonomyParentGallery photos={data?.files} />
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

            {heatMapCoordinates !== 0 && <Map heatMapCoordinates={heatMapCoordinates} pinMapCoordinates={pinMapCoordinates} className="-z-0" />}

            <div className='mt-8 mb-4'>
                <Cite name={data?.metadata?.name} />
            </div>

        </div>
    )
}
