import { isMobile } from "react-device-detect"
import { Tooltip } from "react-tooltip"
import { useTranslations } from "next-intl"

import { getStatus, isEmptyObj, separator } from "@/app/[locale]/_lib/helpers"

export default function SingleTaxonConservation({ data }) {

    const status = {
        national_red_list_status: data?.metadata?.national_red_list_status,
        iucn_red_list_status: data?.metadata?.iucn_red_list_status,
        protection_status: data?.metadata?.protection_status,
        reason: data?.metadata?.reason,
        trend: data?.metadata?.trend,
        trend: data?.metadata?.eoo,
        trend: data?.metadata?.aoo,
        conversion_status_comment: data?.metadata?.conversion_status_comment,
        conversion_status_references: data?.metadata?.conversion_status_references,
        evaluated_by: data?.metadata?.evaluated_by,
        date_evaluated: data?.metadata?.date_evaluated,
        endemism: data?.metadata?.endemism
    }

    const t = useTranslations("Species")

    if(isEmptyObj(status)) return <div className="flex-1"></div>
    
    const iucnTooltipContent = data?.metadata?.iucn_red_list_status !== null && t(data?.metadata?.iucn_red_list_status)
    const redListTooltipContent = data?.metadata?.national_red_list_status !== null && t(data?.metadata?.national_red_list_status)

    return (
        <div className="flex-1 bg-slate-50 dark:bg-slate-700 rounded-md px-6 pb-6">
            {/* <pre>
                {JSON.stringify(status, null, 2)}
            </pre> */}
            <h2 className='mt-8 mb-2 font-medium block-title'>{t("conservation_status")}</h2>
            <dl className="data-list">

                {data?.metadata?.national_red_list_status && (
                    <>
                        <dt>{t("red_list_status")}:</dt>
                        <dd className="flex gap-1 items-center">
                            {data?.metadata?.national_red_list_status}
                            <button
                                data-tooltip-id="nrls-check-tooltip"
                                data-tooltip-content={redListTooltipContent}
                                className="mb-3"
                            >
                               <span>*</span>
                            </button>
                        </dd>
                        <Tooltip
                            id="nrls-check-tooltip"
                            style={{
                                zIndex: 999,
                                width: isMobile ? "200px" : "auto",
                                padding: "2px 6px",
                                opacity: 100,
                                backgroundColor: "black",
                                color: "white",
                                fontSize: "14px",
                                textAlign: "center"
                            }}
                        />
                    </>
                )}

                {data?.metadata?.iucn_red_list_status && (
                    <>
                        <dt>{t("iucn")}:</dt>
                        <dd className="flex gap-1 items-center">
                            {data?.metadata?.iucn_red_list_status}
                            <button
                                data-tooltip-id="iucn-status-check-tooltip"
                                data-tooltip-content={iucnTooltipContent}
                                className="mb-3"
                            >
                                <span>*</span>
                            </button>
                        </dd>
                        <Tooltip
                            id="iucn-status-check-tooltip"
                            style={{
                                zIndex: 999,
                                width: isMobile ? "200px" : "auto",
                                padding: "2px 6px",
                                opacity: 100,
                                backgroundColor: "black",
                                color: "white",
                                fontSize: "14px",
                                textAlign: "center"
                            }}
                        />
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

                {data?.metadata?.eoo && (
                    <>
                        <dt>EOO:</dt>
                        <dd>{data?.metadata?.eoo}</dd>
                    </>
                )}

                {data?.metadata?.aoo && (
                    <>
                        <dt>AOO:</dt>
                        <dd>{data?.metadata?.aoo}</dd>
                    </>
                )}

                {data?.metadata?.endemism && (
                    <>
                        <dt>{t("endemism")}:</dt>
                        <dd>{data?.metadata?.endemism}</dd>
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
