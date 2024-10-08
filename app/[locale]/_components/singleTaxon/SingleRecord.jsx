'use client'

import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import ActionsDropdown from "../ActionsDropdown"
import SingleTaxonMeta from "./SingleTaxonMeta"
import SingleTaxonConservation from "./SingleTaxonConservation"
import Map from "../distribution_heatmap"
import Cite from '../Cite';

export default function SingleRecord({ record }) {

    const printContent = useRef();

    const handlePrint = useReactToPrint({
        content: () => printContent.current,
        documentTitle: `GBD - ${record[0]?.name}`,
        pageStyle: 'p-8'
    });

    return (
        <div className="py-4" ref={printContent}>

            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-medium">{record[0]?.name}</h2>
                <ActionsDropdown
                    handlePrint={handlePrint}
                    record={record}
                />
            </div>

            <div className="flex flex-col gap-4">
                GALLERY
                <div className='flex flex-col md:flex-row gap-4'>
                    <SingleTaxonMeta record={record} />
                    <SingleTaxonConservation record={record} />
                </div>
            </div>

            {record.length !== 0 && (
                <>
                    <h2 className='mt-8 mb-2 block-title'>Taxon distribution</h2>
                    <Map data={record[0]?.speciesDistribution} className="-z-0" />
                </>
            )}

            {record[0] !== undefined && (
                <Cite name={record[0]?.name} id={record[0]?.id} record={record[0]} />
            )}

        </div>
    )
}
