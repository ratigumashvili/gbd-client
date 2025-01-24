import { Link } from "@/navigation"

import { useTranslations } from "next-intl"

export default function SingleTaxonMeta({ data, rank, accordingTo, sna, vernakularName }) {

  const t = useTranslations("Species")

  return (
    <div className="flex-1">

      <h2 className='mt-8 mb-2 font-medium block-title'>{t("metadata")}</h2>
      <dl className="data-list">

        {data?.metadata?.scientific_name_id && (
          <>
            <dt>{t("scientific_name_id")}:</dt>
            <dd>{data?.metadata?.scientific_name_id}</dd>
          </>
        )}

        {data?.metadata?.scientific_name && (
          <>
            <dt><Link href={`${sna}`} target="blank" className="text-teal-700">{t("scientific_name")}</Link>:</dt>
            <dd><em>{data?.metadata?.scientific_name}</em></dd>
          </>
        )}

        {data?.metadata?.according_title && (
          <>
            <dt><Link href={`${accordingTo}`} target="blank" className="text-teal-700">{t("name_according_to")}</Link>:</dt>
            <dd>
              {data?.metadata?.according_title && data?.metadata?.according_title.startsWith('http') || data?.metadata?.according_title.startsWith('https')
                ? <Link href={data?.metadata?.according_title} target="blank">{t("url")}</Link>
                : <span>{data?.metadata?.according_title}</span>}
            </dd>
          </>
        )}

        <>
          <dt>
            <Link href={`${rank}`} target='blank' className='text-teal-700'>{t("taxon_rank")}</Link>:
          </dt>
          <dd>Species</dd>
        </>

        {data?.metadata?.georgian_name && (
          <>
            <dt>{t("georgian_name")}:</dt>
            <dd>{data?.metadata?.georgian_name}</dd>
          </>
        )}

        {data?.metadata?.english_name && (
          <>
            <dt>{t("english_name")}:</dt>
            <dd>{data?.metadata?.english_name}</dd>
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

        {data?.metadata?.specific_epithet && (
          <>
            <dt>{t("specific_epithet")}:</dt>
            <dd>{data?.metadata?.specific_epithet}</dd>
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

        {data?.metadata?.gbd_remarks && (
          <>
            <dt>{t("gbd_remarks")}:</dt>
            <dd>
              <div dangerouslySetInnerHTML={{ __html: data?.metadata?.gbd_remarks }} />
            </dd>
          </>
        )}

      </dl>
    </div>
  )
}
