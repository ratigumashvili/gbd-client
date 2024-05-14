import { conservationStatusInterface } from "@/app/_lib/constants"
import { separator } from "../../_lib/helpers"

export default function SingleTaxonConservation({ record }) {

    const {
        nationalRedLisStatus,
        IUCNRedListStatus,
        protectionStatus,
        reason,
        trend,
        native_introduced,
        comment,
        georgianName,
        englishName,
        subSpecies,
        synonyms,
        taxonomyAccordingTo,
        referencies,
        evaluatedBy,
        dateEvaluated
    } = record[0]?.conservationStatus || conservationStatusInterface
    return (
        <div className="flex-1 bg-slate-50 dark:bg-slate-700 rounded-md px-6 pb-6">
            <h2 className='mt-8 mb-2 block-title'>Conservation Status</h2>
            <dl className="data-list">

                {nationalRedLisStatus && (
                    <>
                        <dt>National Red Lis Status:</dt>
                        <dd>{nationalRedLisStatus}</dd>
                    </>
                )}

                {IUCNRedListStatus && (
                    <>
                        <dt>IUCN Red List Status:</dt>
                        <dd>{IUCNRedListStatus}</dd>
                    </>
                )}

                {protectionStatus && (
                    <>
                        <dt>Protection status:</dt>
                        <dd>{protectionStatus}</dd>
                    </>
                )}

                {reason && (
                    <>
                        <dt>Reason:</dt>
                        <dd>{reason}</dd>
                    </>
                )}

                {trend && (
                    <>
                        <dt>Trend:</dt>
                        <dd>{trend}</dd>
                    </>
                )}

                {native_introduced && (
                    <>
                        <dt>Native/introduced:</dt>
                        <dd>{native_introduced}</dd>
                    </>
                )}

                {comment && (
                    <>
                        <dt>Comment:</dt>
                        <dd>{comment}</dd>
                    </>
                )}

                {georgianName && (
                    <>
                        <dt>Georgian Name:</dt>
                        <dd>{georgianName}</dd>
                    </>
                )}

                {englishName && (
                    <>
                        <dt>English Name:</dt>
                        <dd>{englishName}</dd>
                    </>
                )}

                {subSpecies && (
                    <>
                        <dt>SubSpecies:</dt>
                        <dd>{subSpecies}</dd>
                    </>
                )}

                {synonyms && (
                    <>
                        <dt>Synonyms:</dt>
                        <dd>{synonyms}</dd>
                    </>
                )}

                {taxonomyAccordingTo && (
                    <>
                        <dt>Taxonomy according to:</dt>
                        <dd>{taxonomyAccordingTo}</dd>
                    </>
                )}

                {referencies?.length !== 0 && (
                    <>
                        <dt>References:</dt>
                        <dd>
                            {referencies?.map((reference, index) => (
                                <div key={reference.id}>
                                    <span>{reference.title}</span>{separator(index, referencies, "; ")}
                                </div>
                            ))}
                        </dd>
                    </>
                )}

                {evaluatedBy?.length !== 0 && (
                    <>
                        <dt>Evaluated by:</dt>
                        <dd>{evaluatedBy?.map((evaluator, index) => (
                            <div key={evaluator.id}>
                                <span>{evaluator.name}</span>{separator(index, evaluatedBy)}
                            </div>
                        ))}</dd>
                    </>
                )}

                {dateEvaluated && (
                    <>
                        <dt>Date evaluated:</dt>
                        <dd>{dateEvaluated}</dd>
                    </>
                )}


            </dl>
        </div>
    )
}
