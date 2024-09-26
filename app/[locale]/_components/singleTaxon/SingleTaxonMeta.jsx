import Link from "next/link"

import { separator, checkObject } from "../../_lib/helpers"
import { singleMetaInterface } from "@/app/[locale]/_lib/constants"

export default function SingleTaxonMeta({ record }) {

  const {
    scientificNameID,
    nameAccordingTo,
    species,
    taxonRank,
    scientificNameAuthorship,
    vernacularName,
    georgianName,
    referenceOfOccurrenceInGeorgia,
  } = record[0] || singleMetaInterface

  return (
    <div className="flex-1">
      <h2 className='mt-8 mb-2 block-title'>Metadata</h2>
      <dl className="data-list">

        {scientificNameID && (
          <>
            <dt>Scientific Name ID:</dt>
            <dd>{scientificNameID}</dd>
          </>
        )}

        <>
          <dt>Scientific name:</dt>
          <dd><em>title</em></dd>
        </>

        <>
          <dt>Name according to:</dt>
          <dd>Linnaeus 1958</dd>
        </>


        {georgianName && (
          <>
            <dt>Georgian Name:</dt>
            <dd>{georgianName}</dd>
          </>
        )}

        {checkObject(vernacularName) && (
          <>
            <dt>English Name:</dt>
            <dd>
              <Link href={record[0].vernacularName.url}>
                {record[0].vernacularName.title}
              </Link>
            </dd>
          </>
        )}

        <>
          <dt>Synonyms:</dt>
          <dd>text</dd>
        </>

        <>
          <dt>SubSpecies:</dt>
          <dd><em>text</em></dd>
        </>

        <>
          <dt>Taxonomy source:</dt>
          <dd>link</dd>
        </>

        <>
          <dt>Native/Introduced:</dt>
          <dd>Native (enum)</dd>
        </>

        <>
          <dt>Comment:</dt>
          <dd>text</dd>
        </>

        {referenceOfOccurrenceInGeorgia?.length !== 0 && (
          <>
            <dt>Reference of Occurrence in Georgia:</dt>
            <dd>
              {referenceOfOccurrenceInGeorgia.map((occurence, index) => (
                <div key={occurence.id}>
                  <span>{occurence.title}</span>{separator(index, referenceOfOccurrenceInGeorgia)}
                </div>
              ))}
            </dd>
          </>
        )}

<>
          <dt>Editor:</dt>
          <dd>name, surname, email</dd>
        </>

        <>
          <dt>Contributors:</dt>
          <dd>persons list</dd>
        </>

        <>
          <dt>References list:</dt>
          <dd>text</dd>
        </>

      </dl>
    </div>
  )
}
