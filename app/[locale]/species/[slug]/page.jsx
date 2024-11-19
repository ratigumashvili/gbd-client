import { species } from "@/app/[locale]/_lib/data"

import SingleRecord from "@/app/[locale]/_components/singleTaxon/SingleRecord"

export default async function SingleSpecies({ params }) {

  const record = species.filter((item) => item.slug === params.slug)

  return (
    <>
    {JSON.stringify(params, null, 2)}
    <SingleRecord record={record} />
    </>
  )
}