'use client'

import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import ActionsDropdown from "../ActionsDropdown"
import SingleTaxonMeta from "./SingleTaxonMeta"
import SingleTaxonConservation from "./SingleTaxonConservation"
import Map from "../distribution_heatmap"
import TaxonGallery from '../TaxonGallery';
import Cite from '../Cite';

export default function SingleRecord({ record, data }) {

    const printContent = useRef();

    const handlePrint = useReactToPrint({
        content: () => printContent.current,
        documentTitle: `GBD - ${data?.metadata?.scientific_name}`,
        pageStyle: 'p-8'
    });

    return (
        <div className="py-4" ref={printContent}>

            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-medium">{data?.metadata?.scientific_name}</h2>
                <ActionsDropdown
                    handlePrint={handlePrint}
                    data={data}
                    downloadContent={true}
                />
            </div>

            <div className="flex flex-col gap-4">
                <TaxonGallery data={data?.files} />
                <div className='flex flex-col md:flex-row gap-4'>
                    <SingleTaxonMeta data={data} />
                    <SingleTaxonConservation data={data} />
                </div>
            </div>

            {record.length !== 0 && (
                <>
                    <h2 className='mt-8 mb-2 block-title'>Taxon distribution</h2>
                    <Map data={record[0]?.speciesDistribution} className="-z-0" />
                </>
            )}

            <div className='mt-8 mb-4'>
                <Cite name={data?.metadata?.scientific_name} />
            </div>

        </div>
    )
}
