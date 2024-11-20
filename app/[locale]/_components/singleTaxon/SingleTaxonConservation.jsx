import { separator } from "../../_lib/helpers"

export default function SingleTaxonConservation({ data }) {
    return (
        <div className="flex-1 bg-slate-50 dark:bg-slate-700 rounded-md px-6 pb-6">
            <h2 className='mt-8 mb-2 block-title'>Conservation Status</h2>
            <dl className="data-list">

                {data?.metadata?.national_red_list_status && (
                    <>
                        <dt>National Red List Status:</dt>
                        <dd>{data?.metadata?.national_red_list_status}</dd>
                    </>
                )}

                {data?.metadata?.iucn_red_list_status && (
                    <>
                        <dt>IUCN Red List Status:</dt>
                        <dd>{data?.metadata?.iucn_red_list_status}</dd>
                    </>
                )}

                {data?.metadata?.protection_status && (
                    <>
                        <dt>Protection status:</dt>
                        <dd>{data?.metadata?.protection_status}</dd>
                    </>
                )}

                {data?.metadata?.reason && (
                    <>
                        <dt>Reason:</dt>
                        <dd>{data?.metadata?.reason}</dd>
                    </>
                )}

                {data?.metadata?.trend && (
                    <>
                        <dt>Trend:</dt>
                        <dd>{data?.metadata?.trend}</dd>
                    </>
                )}

                {data?.metadata?.conversion_status_comment && (
                    <>
                        <dt>Comment:</dt>
                        <dd>{data?.metadata?.conversion_status_comment}</dd>
                    </>
                )}

                {data?.metadata?.conversion_status_references && (
                    <>
                        <dt>References:</dt>
                        <dd>{data?.metadata?.conversion_status_references}</dd>
                    </>
                )}

                {data?.metadata?.evaluated_by && (
                    <>
                        <dt>Evaluated by:</dt>
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
                        <dt>Date evaluated:</dt>
                        <dd>{data?.metadata?.date_evaluated}</dd>
                    </>
                )}

            </dl>
        </div>
    )
}
