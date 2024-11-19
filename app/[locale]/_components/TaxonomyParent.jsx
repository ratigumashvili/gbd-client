'use client'

import { useRef } from 'react'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useRouter } from '@/navigation'

import { useReactToPrint } from 'react-to-print'

import TaxonomyParentImage from './TaxonomyParentImage'
import DynamicTaxonomyOrder from './taxonomyOrder'
import ActionsDropdown from './ActionsDropdown'
import TaxonomyChildNodes from './TaxonomyChildNodes'
import GoBack from './icons/GoBack'

import { checkLink, separator } from "@/app/[locale]/_lib/helpers"
import { fungiTree } from '../_lib/data'


export default function TaxonomyParent({ data, photos }) {

    const router = useRouter()

    const t = useTranslations("Common")

    const printContent = useRef();

    const handlePrint = useReactToPrint({
        content: () => printContent.current,
        documentTitle: `GBD - ${data?.metadata?.name}`,
        pageStyle: 'p-8'
    });

    return (
        <div className='py-4' ref={printContent}>
            <div className="flex items-center justify-between  mb-6">
                <h2 className="text-2xl font-medium">{data?.metadata?.name}</h2>
                <div className='flex items-center gap-4'>
                    <button onClick={() => router.back()} title='Go back'>
                        <GoBack width="22" heigth="22" />
                    </button>
                    <ActionsDropdown
                        downloadContent={false}
                        handlePrint={handlePrint}
                    />
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">

                    <h2 className='font-medium my-2 block-title'>{t("desc")}</h2>

                    <dl className="data-list">
                        {data?.metadata?.scientific_name_id && (
                            <>
                                <dt>Scientific Name ID:</dt>
                                <dd>{data?.metadata?.scientific_name_id}</dd>
                            </>
                        )}
                        {data?.metadata?.according_title && (
                            <>
                                <dt>Name According to:</dt>
                                <dd><Link href={checkLink(data?.metadata?.url)} target="blank">{data?.metadata?.according_title}</Link></dd>
                            </>
                        )}
                        {data?.metadata?.published_in_year && (
                            <>
                                <dt>Name Published in Year:</dt>
                                <dd>{data?.metadata?.published_in_year}</dd>
                            </>
                        )}
                        {data?.metadata?.taxon_rank_title && (
                            <>
                                <dt>Taxon Rank:</dt>
                                <dd><Link href={checkLink(data?.metadata?.taxon_rank_url)} target="blank">{data?.metadata?.taxon_rank_title}</Link></dd>
                            </>
                        )}
                        {data?.metadata?.scientific_name_authorship_title && (
                            <>
                                <dt>Scientific Name Authorship:</dt>
                                <dd><Link href={checkLink(data?.metadata?.scientific_name_authorship_url)} target="blank">{data?.metadata?.scientific_name_authorship_title}</Link></dd>
                            </>
                        )}
                        <>
                            <dt>English Name:</dt>
                            <dd><Link href={checkLink('#')} target="blank">title</Link></dd>
                        </>
                        {data?.metadata?.georgian_name_title && (
                            <>
                                <dt>Gerogian Name:</dt>
                                <dd>{data?.metadata?.georgian_name_title}</dd>
                            </>
                        )}
                        <>
                            <dt>GBD Remarks:</dt>
                            <dd>
                                {/* <div
                                    dangerouslySetInnerHTML={{ __html: GBDRemarks }}
                                /> */}
                            </dd>
                        </>
                        {/* {pageAuthors?.length !== 0 && (
                            <>
                                <dt>{t("authors")}:</dt>
                                <dd>
                                    {pageAuthors?.map((author, index) => (
                                        <span key={author.id}>
                                            <Link href={checkLink(`/authors/${author?.id?.toString()}`)}>
                                                {author.name}
                                            </Link>{separator(index, pageAuthors)}
                                        </span>
                                    ))}
                                </dd>
                            </>
                        )} */}
                        <dt>{t("authors")}:</dt>
                        <dd>authors list</dd>

                        <dt>Contributors:</dt>
                        <dd>persons list</dd>
                    </dl>
                </div>
                <div className="flex-1">

                    <h2 className='font-medium my-2 block-title'>{t("gallery")}</h2>

                    <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                        {photos?.map((image) => (
                            <TaxonomyParentImage key={image.id} {...image} />
                        ))}
                    </div>

                </div>
            </div>

            {/* <div className="col-span-2 my-4 border rounded-md print:hidden">
                <h2 className='font-medium text-md my-4 px-4'>{locale === 'ka' ? `${name} - ${t("visualRepresentation")}` : `${t("visualRepresentation")} ${name}`}</h2>
                <hr className='shadow-sm' />
                <DynamicTaxonomyOrder treeContent={fungiTree} />
            </div> */}
        </div>
    )
}
