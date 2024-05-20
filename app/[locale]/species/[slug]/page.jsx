import { species } from "@/app/[locale]/_lib/data"

import SingleRecord from "@/app/[locale]/_components/singleTaxon/SingleRecord"

export default function SingleSpecies({ params }) {

  const record = species.filter((item) => item.slug === params.slug)

  return <SingleRecord record={record} />
}