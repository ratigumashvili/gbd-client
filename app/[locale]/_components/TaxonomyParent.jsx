'use client'

import { useRef, Suspense } from 'react'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useRouter } from '@/navigation'

import { useReactToPrint } from 'react-to-print'

import TaxonomyParentGallery from './TaxonomyParentGallery'
import DynamicTaxonomyOrder from './taxonomyOrder'
import ActionsDropdown from './ActionsDropdown'
import GoBack from './icons/GoBack'

import { checkLink, separator } from "@/app/[locale]/_lib/helpers"
import { fungiTree } from '../_lib/data'

export default function TaxonomyParent({ data, photos, species }) {
    return (
        <Suspense fallback={<div>Loading post...</div>}>
            <TaxonomyParentBackup
                data={data}
                photos={photos}
                species={species}
            />
        </Suspense>
    )
}


function TaxonomyParentBackup({ data, photos, species }) {

    const router = useRouter()

    const t = useTranslations("Common")
    const s = useTranslations("Species")

    const printContent = useRef();

    const handlePrint = useReactToPrint({
        content: () => printContent.current,
        documentTitle: `GBD - ${data?.metadata?.name}`,
        pageStyle: 'p-8'
    });

    // Single Taxon page

    return (
        <div className='py-4' ref={printContent}>
            <div className="flex items-center justify-between  mb-6">
                <h2 className="text-2xl font-medium">{data?.metadata?.name}</h2>
                <div className='flex items-center gap-4'>
                    <button onClick={() => router.back()} title='Go back'>
                        <GoBack width="22" heigth="22" />
                    </button>
                    <ActionsDropdown
                        handlePrint={handlePrint}
                        data={data}
                        species={species}
                        isSpecie={false}
                        downloadContent={true}
                    />
                </div>
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
                        {data?.metadata?.according_title && (
                            <>
                                <dt>{s("name_according_to")}:</dt>
                                <dd><Link href={checkLink(data?.metadata?.according_url)} target="blank">{data?.metadata?.according_title}</Link></dd>
                            </>
                        )}
                        {data?.metadata?.published_in_year && (
                            <>
                                <dt>{s("name_published_in_year")}:</dt>
                                <dd>{data?.metadata?.published_in_year}</dd>
                            </>
                        )}
                        {data?.metadata?.taxon_rank_title && (
                            <>
                                <dt>{s("taxon_rank")}:</dt>
                                <dd><Link href={checkLink(data?.metadata?.taxon_rank_url)} target="blank">{data?.metadata?.taxon_rank_title}</Link></dd>
                            </>
                        )}
                        {data?.metadata?.scientific_name_authorship_title && (
                            <>
                                <dt>{s("scientific_name_authorship")}:</dt>
                                <dd><Link href={checkLink(data?.metadata?.scientific_name_authorship_url)} target="blank">{data?.metadata?.scientific_name_authorship_title}</Link></dd>
                            </>
                        )}
                        {data?.metadata?.english_name && (
                            <>
                                <dt>{s("english_name")}:</dt>
                                <dd><Link href={checkLink(data?.metadata?.english_url)} target="blank">{data?.metadata?.english_name}</Link></dd>
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
                                        dangerouslySetInnerHTML={{ __html: data?.metadata?.gbd_remarks }}
                                    />
                                </dd>
                            </>
                        )}

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
                        <dt>{s("authors")}:</dt>
                        <dd>authors list</dd>

                        <dt>{s("contributors")}:</dt>
                        <dd>persons list</dd>
                    </dl>
                </div>
                <div className="flex-1">
                    {photos && photos.length !== 0 && (
                        <>
                            <h2 className='font-medium my-2 block-title'>{t("gallery")} ({photos?.length})</h2>
                            <TaxonomyParentGallery photos={photos} />
                        </>
                    )}
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
