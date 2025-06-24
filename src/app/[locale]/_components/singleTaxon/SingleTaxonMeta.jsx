import { Link } from "@/src/i18n/routing"
import { useTranslations } from "next-intl"

import { sanitize, separator } from "@/src/app/[locale]/_lib/helpers"

export default function SingleTaxonMeta({ data, rank, accordingTo, sna, taxon_rank }) {

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

        {data?.metadata?.according_title && (
          <>
            <dt>{t("tax_source")}:</dt>
            <dd>
              {data?.metadata?.according_title && data?.metadata?.according_title.startsWith('http') || data?.metadata?.according_title?.startsWith('https')
                ? <Link href={data?.metadata?.according_title} target="blank">{t("url")}</Link>
                : <span>{data?.metadata?.according_title}</span>}
            </dd>
          </>
        )}

        {data?.metadata?.scientific_name && (
          <>
            <dt><Link href={`${accordingTo}`} target="blank" className="text-teal-700">{t("according_title")}</Link>:</dt>
            <dd>{data?.metadata.scientific_name}</dd>
          </>
        )}

        <dt>
          <Link href={`${rank}`} target='blank' className='text-teal-700'>{t("taxon_rank")}</Link>:
        </dt>
        <dd>{data?.metadata?.taxon_rank || t(`${taxon_rank}`)}</dd>

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
            <dd><em>{data?.metadata?.synonyms}</em></dd>
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
              {data?.metadata?.taxonomy_source_name && data?.metadata?.taxonomy_source_name.startsWith('http') || data?.metadata?.taxonomy_source_name?.startsWith('https')
                ? <Link href={data?.metadata?.taxonomy_source_name} target="blank">{t("url")}</Link>
                : <span>{data?.metadata?.taxonomy_source_name}</span>}
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
              <div dangerouslySetInnerHTML={{ __html: sanitize(data?.metadata?.comment) }} />
            </dd>
          </>
        )}

        {data?.metadata?.reference_in_georgia && (
          <>
            <dt>{t("reference_of_occurrence")}:</dt>
            <dd>{data?.metadata?.reference_in_georgia && data?.metadata?.reference_in_georgia.startsWith('http') || data?.metadata?.reference_in_georgia?.startsWith('https')
              ? <Link href={data?.metadata?.reference_in_georgia} target="blank">{t("url")}</Link>
              : <span>{data?.metadata?.reference_in_georgia}</span>}</dd>
          </>
        )}

        {data?.metadata?.references_list && (
          <>
            <dt>{t("references_list")}</dt>
            <dd>
              <div dangerouslySetInnerHTML={{ __html: sanitize(data?.metadata?.references_list) }} />
            </dd>
          </>
        )}

        {data?.editors?.length > 0 && (
          <>
            <dt>{t("editor")}:</dt>
            <dd>
              {data?.editors?.map((editor, index) =>
                <p key={index} className="inline">{editor.first_name} {editor.last_name}{separator(index, data?.editors)}</p>
              )}
            </dd>
          </>
        )}

        {data?.contributors?.length > 0 && (
          <>
            <dt>{t("contributors")}:</dt>
            <dd>
              {data?.contributors?.map((contributor, index) =>
                <p key={index}>{contributor.first_name} {contributor.last_name}{separator(index, data?.contributors)}</p>
              )}
            </dd>
          </>
        )}

      </dl>
    </div>
  )
}
