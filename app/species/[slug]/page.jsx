import Link from "next/link"

import { checkObject, separator } from "@/app/_lib/helpers"

import Map from "@/app/_components/distribution_heatmap"

import { species } from "@/app/_lib/data"

export default function SingleSpecies({ params }) {

  const record = species.filter((item) => item.slug === params.slug)

  return (
    <div className="py-4">
      <h2 className="text-2xl font-medium mb-4">{record[0]?.name}</h2>

      <dl className="data-list">

        {record[0]?.scientificNameID && (
          <>
            <dt>Scientific Name ID:</dt>
            <dd>{record[0]?.scientificNameID}</dd>
          </>
        )}

        {checkObject(record[0]?.nameAccordingTo) && (
          <>
            <dt>Name According to:</dt>
            <dd>
              <Link href={record[0].nameAccordingTo.url} target="blank">
                {record[0].nameAccordingTo.title}
              </Link>
            </dd>
          </>
        )}

        {record[0]?.species && (
          <>
            <dt>Species:</dt>
            <dd>{record[0]?.species}</dd>
          </>
        )}

        {checkObject(record[0]?.taxonRank) && (
          <>
            <dt>Taxon Rank:</dt>
            <dd>
              <Link href={record[0].taxonRank.url}>
                {record[0].taxonRank.title}
              </Link>
            </dd>
          </>
        )}

        {checkObject(record[0]?.scientificNameAuthorship) && (
          <>
            <dt>Scientific Name Authorship:</dt>
            <dd>
              <Link href={record[0].scientificNameAuthorship.url}>
                {record[0].scientificNameAuthorship.title}
              </Link>
            </dd>
          </>
        )}

        {checkObject(record[0]?.vernacularName) && (
          <>
            <dt>Vernacular Name:</dt>
            <dd>
              <Link href={record[0].vernacularName.url}>
                {record[0].vernacularName.title}
              </Link>
            </dd>
          </>
        )}

        {record[0]?.georgianName && (
          <>
            <dt>Georgian Name:</dt>
            <dd>{record[0]?.georgianName}</dd>
          </>
        )}

        {record[0]?.referenceOfOccurrenceInGeorgia && (
          <>
            <dt>Reference of Occurrence in Georgia:</dt>
            <dd>
              {record[0].referenceOfOccurrenceInGeorgia.map((occurence, index) => (
                <div key={occurence.id}>
                  <span>{occurence.title}</span>{separator(index, record[0].referenceOfOccurrenceInGeorgia)}
                </div>
              ))}
            </dd>
          </>
        )}

        <dt></dt>
        <dd></dd>
      </dl>

      {record.length !== 0 && (
        <>
          <h2 className='mt-8 mb-2 block-title'>Taxon distribution</h2>
          <Map data={record[0]?.speciesDistribution} className="-z-0" />
        </>
      )}

    </div>
  )
}