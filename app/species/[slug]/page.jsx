import { species } from "@/app/_lib/data"

import SingleRecord from "@/app/_components/singleTaxon/SingleRecord"

export default function SingleSpecies({ params }) {

  const record = species.filter((item) => item.slug === params.slug)

  return <SingleRecord record={record} />
}