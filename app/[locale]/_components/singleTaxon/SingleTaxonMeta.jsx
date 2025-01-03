import { Link } from "@/navigation"

import { useTranslations } from "next-intl"

export default function SingleTaxonMeta({ data }) {

  const t = useTranslations("Species")

  return (
    <div className="flex-1">

      <h2 className='mt-8 mb-2 block-title'>{t("metadata")}</h2>
      <dl className="data-list">

        {data?.metadata?.scientific_name_id && (
          <>
            <dt>{t("scientific_name_id")}:</dt>
            <dd>{data?.metadata?.scientific_name_id}</dd>
          </>
        )}

        {data?.metadata?.scientific_name && (
          <>
            <dt>{t("scientific_name")}:</dt>
            <dd><em>{data?.metadata?.scientific_name}</em></dd>
          </>
        )}

        {data?.metadata?.according_title && (
          <>
            <dt>{t("name_according_to")}:</dt>
            <dd>{data?.metadata?.according_title}</dd>
          </>
        )}

        {data?.metadata?.georgian_name && (
          <>
            <dt>{t("georgian_name")}:</dt>
            <dd>{data?.metadata?.georgian_name}</dd>
          </>
        )}

        {data?.metadata?.english_name && (
          <>
            <dt>{t("english_name")}:</dt>
            <dd>
              <Link href={'#'}>
                {data?.metadata?.english_name}
              </Link>
            </dd>
          </>
        )}

        {data?.metadata?.synonyms && (
          <>
            <dt>{t("synonyms")}:</dt>
            <dd>{data?.metadata?.synonyms}</dd>
          </>
        )}

        {data?.metadata?.subspecies && (
          <>
            <dt>{t("subspecies")}:</dt>
            <dd><em>{data?.metadata?.subspecies}</em></dd>
          </>
        )}

        {data?.metadata?.taxonomy_source_name && (
          <>
            <dt>{t("taxonomy_source")}:</dt>
            <dd>
              <Link href={data?.metadata?.taxonomy_source_url}>
                {data?.metadata?.taxonomy_source_name}
              </Link>
            </dd>
          </>
        )}

        {data?.metadata?.origin && (
          <>
            <dt>{t("native_introduced")}:</dt>
            <dd>{data?.metadata?.origin === "native" ? t("native") : t("introduced")}</dd>
          </>
        )}

        {data?.metadata?.comment && (
          <>
            <dt>{t("comment")}:</dt>
            <dd>
              <div dangerouslySetInnerHTML={{ __html: data?.metadata?.comment }} />
            </dd>
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
            <dt>{t("reference_of_occurrence")}:</dt>
            <dd>{data?.metadata?.reference_in_georgia}</dd>
          </>
        )}

        <>
          <dt>{t("editor")}:</dt>
          <dd>name, surname, email</dd>
        </>

        <>
          <dt>{t("contributors")}:</dt>
          <dd>persons list</dd>
        </>

        {data?.metadata?.references_list && (
          <>
            <dt>{t("references_list")}:</dt>
            <dd>
              <div dangerouslySetInnerHTML={{ __html: data?.metadata?.references_list }} />
            </dd>
          </>
        )}

      </dl>
    </div>
  )
}
