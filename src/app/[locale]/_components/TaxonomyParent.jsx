'use client'

import { useRef } from 'react'

import Link from 'next/link'
import { useReactToPrint } from 'react-to-print'
import { useTranslations } from 'next-intl'
import { v4 as uuidv4 } from 'uuid';

import ActionsDropdown from './ActionsDropdown'
import TaxonomyParentGallery from './TaxonomyParentGallery'
import TaxonHeading from './TaxonHeading'
import DynamicTaxonomyOrder from './taxonomyOrder'

import { checkLink, separator } from "@/src/app/[locale]/_lib/helpers"
import { fungiTree } from '../_lib/data'
import { sanitize } from '@/src/app/[locale]/_lib/helpers'
import { useFullUrl } from '@/src/app/[locale]/_hooks/useFullUrl'

export default function TaxonomyParent({ data, photos, species, rank, accordingTo, sna, vernakularName, locale }) {

    const fullUrl = useFullUrl()

    const t = useTranslations("Common")
    const s = useTranslations("Species")

    const printContent = useRef();

    const handlePrint = useReactToPrint({
        content: () => printContent.current,
        documentTitle: `GBD - ${data?.metadata?.name}`,
        pageStyle: 'p-8'
    });

    // Single Taxon page

    const headingData = {
        id: data?.metadata?.scientific_name_id || uuidv4(),
        title: data?.metadata?.name,
        scienttificId: data?.metadata?.scientific_name_id,
        rank: data?.metadata?.taxon_rank_title,
        taxonId: data?.metadata?.id,
        url: fullUrl,
        // orgChartData: [],
    }

    return (
        <section className='py-4' ref={printContent}>
            <div className="flex items-center justify-between mb-6">
                <TaxonHeading headingData={headingData} />
                <ActionsDropdown
                    handlePrint={handlePrint}
                    data={data}
                    species={species}
                    isSpecie={false}
                    downloadContent={true}
                    feedbackable_type={data?.metadata?.taxon_rank_title || taxon_rank}
                    feedbackable_id={data?.metadata?.id}
                />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">

                    <h2 className='font-medium my-2 block-title'>{t("desc")}</h2>

                    <dl className="data-list">
                        {data?.metadata?.scientific_name_id && (
                            <>
                                <dt>{s("scientific_name_id")}:</dt>
                                <dd>{data?.metadata?.scientific_name_id}</dd>
                            </>
                        )}
                        {data?.metadata?.scientific_name_authorship_title && (
                            <>
                                <dt><Link href={`${accordingTo ?? "#"}`} target='blank' className='text-teal-700'>{s("name_according_to")}</Link>:</dt>
                                <dd>
                                    {data?.metadata?.scientific_name_authorship_url
                                        ? <Link href={data?.metadata?.scientific_name_authorship_url} target="blank">{data?.metadata?.scientific_name_authorship_title}</Link>
                                        : <span>{data?.metadata?.scientific_name_authorship_title}</span>}
                                </dd>
                            </>
                        )}

                        {data?.metadata?.taxon_rank_title && (
                            <>
                                <dt>
                                    <Link href={`${rank ?? "#"}`} target='blank' className='text-teal-700'>{s("taxon_rank")}</Link>:
                                </dt>
                                <dd>
                                    {data?.metadata?.taxon_rank_url
                                        ? <Link href={data?.metadata?.taxon_rank_url} target="blank">{data?.metadata?.taxon_rank_title}</Link>
                                        : <span>{data?.metadata?.taxon_rank_title}</span>}
                                </dd>
                            </>
                        )}
                        {data?.metadata?.scientific_name_authorship_title && (
                            <>
                                <dt><Link href={`${sna ?? "#"}`} target='blank' className='text-teal-700'>{s("tax_source")}</Link>:</dt>
                                <dd>
                                    {
                                        data?.metadata?.according_title && data?.metadata?.according_title.startsWith('http') || data?.metadata?.according_title?.startsWith('https')
                                            ? <Link href={data?.metadata?.according_title}>{s("url")}</Link>
                                            : <span>{data?.metadata?.according_title}</span>
                                    }
                                </dd>
                            </>
                        )}
                        {data?.metadata?.english_name && (
                            <>
                                <dt><Link href={`${vernakularName ?? "#"}`} target='blank' className='text-teal-700'>{s("english_name")}</Link>:
                                </dt>
                                <dd>
                                    {data?.metadata?.english_url
                                        ? <Link href={data?.metadata?.english_url} target="blank">{data?.metadata?.english_name}</Link>
                                        : <span>{data?.metadata?.english_name}</span>}
                                </dd>
                            </>
                        )}
                        {data?.metadata?.georgian_name_title && (
                            <>
                                <dt>{s("georgian_name")}:</dt>
                                <dd>{data?.metadata?.georgian_name_title}</dd>
                            </>
                        )}

                        {data?.metadata?.gbd_remarks && (
                            <>
                                <dt>{s("gbd_remarks")}:</dt>
                                <dd>
                                    <div
                                        dangerouslySetInnerHTML={{ __html: sanitize(data?.metadata?.gbd_remarks) }}
                                    />
                                </dd>
                            </>
                        )}

                        {data?.editors?.length > 0 && (
                            <>
                                <dt>{s("editors")}:</dt>
                                <dd>{data?.editors?.map((editor, index) => <p key={index}>{editor.first_name} {editor.last_name}{separator(index, data?.editors)}</p>)}</dd>
                            </>
                        )}

                    </dl>

                </div>
                <div className="flex-1">
                    {photos && photos.length !== 0 && (
                        <>
                            <h2 className='font-medium my-2 block-title'>{t("gallery")}</h2>
                            <TaxonomyParentGallery photos={photos} />
                        </>
                    )}
                </div>
            </div>

            {/* <div className="col-span-2 my-4 border rounded-md print:hidden">
                <h2 className='font-medium text-md my-4 px-4'>{locale === 'ka' ? `${data?.metadata?.name} - ${t("visualRepresentation")}` : `${t("visualRepresentation")} ${data?.metadata?.name}`}</h2>
                <hr className='shadow-sm' />
                <DynamicTaxonomyOrder treeContent={fungiTree} />
            </div> */}
        </section>
    )
}
