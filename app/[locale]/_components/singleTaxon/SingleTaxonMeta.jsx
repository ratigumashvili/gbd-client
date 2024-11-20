import { Link } from "@/navigation"

export default function SingleTaxonMeta({ data }) {

  return (
    <div className="flex-1">
      <h2 className='mt-8 mb-2 block-title'>Metadata</h2>
      <dl className="data-list">

        {data?.metadata?.scientific_name_id && (
          <>
            <dt>Scientific Name ID:</dt>
            <dd>{data?.metadata?.scientific_name_id}</dd>
          </>
        )}

        {data?.metadata?.scientific_name && (
          <>
            <dt>Scientific name:</dt>
            <dd><em>{data?.metadata?.scientific_name}</em></dd>
          </>
        )}

        {data?.metadata?.according_title && (
          <>
            <dt>Name according to:</dt>
            <dd>{data?.metadata?.according_title}</dd>
          </>
        )}

        {data?.metadata?.georgian_name && (
          <>
            <dt>Georgian Name:</dt>
            <dd>{data?.metadata?.georgian_name}</dd>
          </>
        )}

        {data?.metadata?.english_name && (
          <>
            <dt>English Name:</dt>
            <dd>
              <Link href={'#'}>
                {data?.metadata?.english_name}
              </Link>
            </dd>
          </>
        )}

        {data?.metadata?.synonyms && (
          <>
            <dt>Synonyms:</dt>
            <dd>{data?.metadata?.synonyms}</dd>
          </>
        )}

        {data?.metadata?.subspecies && (
          <>
            <dt>SubSpecies:</dt>
            <dd><em>{data?.metadata?.subspecies}</em></dd>
          </>
        )}

        {data?.metadata?.taxonomy_source_name && (
          <>
            <dt>Taxonomy source:</dt>
            <dd>
              <Link href={data?.metadata?.taxonomy_source_url}>
                {data?.metadata?.taxonomy_source_name}
              </Link>
            </dd>
          </>
        )}

        {data?.metadata?.origin && (
          <>
            <dt>Native/Introduced:</dt>
            <dd>{data?.metadata?.origin}</dd>
          </>
        )}

        {data?.metadata?.comment && (
          <>
            <dt>Comment:</dt>
            <dd>{data?.metadata?.comment}</dd>
          </>
        )}

        {/* {referenceOfOccurrenceInGeorgia?.length !== 0 && (
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
        )} */}

        {data?.metadata?.reference_in_georgia && (
          <>
            <dt>Reference of Occurrence in Georgia:</dt>
            <dd>{data?.metadata?.reference_in_georgia}</dd>
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
