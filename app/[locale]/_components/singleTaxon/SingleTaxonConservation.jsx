import { useTranslations } from "next-intl"
import { separator } from "../../_lib/helpers"

export default function SingleTaxonConservation({ data }) {

    const t = useTranslations("Species")

    return (
        <div className="flex-1 bg-slate-50 dark:bg-slate-700 rounded-md px-6 pb-6">
            <h2 className='mt-8 mb-2 block-title'>{t("conservation_status")}</h2>
            <dl className="data-list">

                {data?.metadata?.national_red_list_status && (
                    <>
                        <dt>{t("red_list_status")}:</dt>
                        <dd>{data?.metadata?.national_red_list_status}</dd>
                    </>
                )}

                {data?.metadata?.iucn_red_list_status && (
                    <>
                        <dt>{t("iucn")}:</dt>
                        <dd>{data?.metadata?.iucn_red_list_status}</dd>
                    </>
                )}

                {data?.metadata?.protection_status && (
                    <>
                        <dt>{t("protection_status")}:</dt>
                        <dd>{data?.metadata?.protection_status}</dd>
                    </>
                )}

                {data?.metadata?.reason && (
                    <>
                        <dt>{t("reason")}:</dt>
                        <dd>{data?.metadata?.reason}</dd>
                    </>
                )}

                {data?.metadata?.trend && (
                    <>
                        <dt>{t("trend")}:</dt>
                        <dd>{data?.metadata?.trend}</dd>
                    </>
                )}

                {data?.metadata?.conversion_status_comment && (
                    <>
                        <dt>{t("cs_comment")}:</dt>
                        <dd>
                            <div dangerouslySetInnerHTML={{ __html: data?.metadata?.conversion_status_comment }} />
                        </dd>
                    </>
                )}

                {data?.metadata?.conversion_status_references && (
                    <>
                        <dt>{t("references")}:</dt>
                        <dd>{data?.metadata?.conversion_status_references}</dd>
                    </>
                )}

                {data?.metadata?.evaluated_by && (
                    <>
                        <dt>{t("evaluated_by")}:</dt>
                        <dd>{data?.metadata?.evaluated_by}</dd>
                    </>
                )}

                {/* {evaluatedBy?.length !== 0 && (
                    <>
                        <dt>Evaluated by:</dt>
                        <dd>{evaluatedBy?.map((evaluator, index) => (
                            <div key={evaluator.id}>
                                <span>{evaluator.name}</span>{separator(index, evaluatedBy)}
                            </div>
                        ))}</dd>
                    </>
                )} */}

                {data?.metadata?.date_evaluated && (
                    <>
                        <dt>{t("date_evaluated")}:</dt>
                        <dd>{data?.metadata?.date_evaluated}</dd>
                    </>
                )}

            </dl>
        </div>
    )
}
