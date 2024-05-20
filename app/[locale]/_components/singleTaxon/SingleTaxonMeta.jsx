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

        {checkObject(nameAccordingTo) && (
          <>
            <dt>Name According to:</dt>
            <dd>
              <Link href={nameAccordingTo.url} target="blank">
                {nameAccordingTo.title}
              </Link>
            </dd>
          </>
        )}

        {species && (
          <>
            <dt>Species:</dt>
            <dd>{species}</dd>
          </>
        )}

        {checkObject(taxonRank) && (
          <>
            <dt>Taxon Rank:</dt>
            <dd>
              <Link href={taxonRank.url}>
                {taxonRank.title}
              </Link>
            </dd>
          </>
        )}

        {checkObject(scientificNameAuthorship) && (
          <>
            <dt>Scientific Name Authorship:</dt>
            <dd>
              <Link href={scientificNameAuthorship.url}>
                {scientificNameAuthorship.title}
              </Link>
            </dd>
          </>
        )}

        {checkObject(vernacularName) && (
          <>
            <dt>Vernacular Name:</dt>
            <dd>
              <Link href={record[0].vernacularName.url}>
                {record[0].vernacularName.title}
              </Link>
            </dd>
          </>
        )}

        {georgianName && (
          <>
            <dt>Georgian Name:</dt>
            <dd>{georgianName}</dd>
          </>
        )}

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
      </dl>
    </div>
  )
}
