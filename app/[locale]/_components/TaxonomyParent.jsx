'use client'

import { useRef } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { useTranslations } from 'next-intl'

import { useReactToPrint } from 'react-to-print'

import { checkLink, separator } from "@/app/[locale]/_lib/helpers"

import { taxonomyParentInterface } from '../_lib/constants'

import TaxonomyParentImage from './TaxonomyParentImage'
import DynamicTaxonomyOrder from './taxonomyOrder'

import { fungiTree } from '../_lib/data'

import ActionsDropdown from './ActionsDropdown'
import Cite from './Cite'
import TaxonomyChildNodes from './TaxonomyChildNodes'
import GoBack from './icons/GoBack'


export default function TaxonomyParent({ name, description, photos, child, locale }) {

    const router = useRouter()

    const t = useTranslations("Common")

    const {
        scientificNameId,
        nameAccordingTo,
        namePublishedInYear,
        species,
        infraspecificEpithet,
        taxonRank,
        scientificNameAuthorship,
        vernacularName,
        georgianName,
        taxonomicStatus,
        taxonRemarks,
        GBDRemarks,
        pageAuthors,
    } = description || taxonomyParentInterface

    const printContent = useRef();

    const handlePrint = useReactToPrint({
        content: () => printContent.current,
        documentTitle: `GBD - ${name}`,
        pageStyle: 'p-8'
    });

    return (
        <div className='py-4' ref={printContent}>
            <div className="flex items-center justify-between  mb-6">
                <h2 className="text-2xl font-medium">{name}</h2>
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
                        {scientificNameId && (
                            <>
                                <dt>Scientific Name ID:</dt>
                                <dd>{scientificNameId}</dd>
                            </>
                        )}
                        {nameAccordingTo && (
                            <>
                                <dt>Name According to:</dt>
                                <dd><Link href={checkLink(nameAccordingTo.url)} target="blank">{nameAccordingTo.title}</Link></dd>
                            </>
                        )}
                        {namePublishedInYear && (
                            <>
                                <dt>Name Published in Year:</dt>
                                <dd>{namePublishedInYear}</dd>
                            </>
                        )}
                        {taxonRank && (
                            <>
                                <dt>Taxon Rank:</dt>
                                <dd><Link href={checkLink(taxonRank.url)} target="blank">{taxonRank.title}</Link></dd>
                            </>
                        )}
                        {scientificNameAuthorship && (
                            <>
                                <dt>Scientific Name Authorship:</dt>
                                <dd><Link href={checkLink(scientificNameAuthorship.url)} target="blank">{scientificNameAuthorship.title}</Link></dd>
                            </>
                        )}
                        {vernacularName && (
                            <>
                                <dt>English Name:</dt>
                                <dd><Link href={checkLink(vernacularName.url)} target="blank">{vernacularName.title}</Link></dd>
                            </>
                        )}
                        {georgianName && (
                            <>
                                <dt>Gerogian Name:</dt>
                                <dd>{georgianName}</dd>
                            </>
                        )}
                        {GBDRemarks && (
                            <>
                                <dt>GBD Remarks:</dt>
                                <dd>
                                    <div
                                        dangerouslySetInnerHTML={{ __html: GBDRemarks }}
                                    />
                                </dd>
                            </>
                        )}
                        {pageAuthors?.length !== 0 && (
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
                        )}

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

            <div className="col-span-1 mt-8 mb-4">
                <h2 className='font-medium text-md my-4'>{locale === 'ka' ? `${name} - ${t("taxonomyOfThe")}` : `${t("taxonomyOfThe")} ${name}`}</h2>
                <TaxonomyChildNodes data={child} />
            </div>

            <div className="col-span-2 my-4 border rounded-md print:hidden">
                <h2 className='font-medium text-md my-4 px-4'>{locale === 'ka' ? `${name} - ${t("visualRepresentation")}` : `${t("visualRepresentation")} ${name}`}</h2>
                <hr className='shadow-sm' />
                <DynamicTaxonomyOrder treeContent={fungiTree} />
            </div>
            <Cite name={name} />
        </div>
    )
}
