import { species } from "@/app/[locale]/_lib/data"

import SingleRecord from "@/app/[locale]/_components/singleTaxon/SingleRecord"
import NothingFound from "@/app/[locale]/_components/NothingFound";

import { getData } from "@/app/[locale]/_lib/apiCalls";

export default async function SingleSpecies({ params }) {

  const { data } = await getData(`taxonomy/${params.id}/?type=Specie`, params.locale)

  const record = species.filter((item) => item.id === params.id)

  if (!data) {
    return <NothingFound />
  }

  return (
    <>
      {/* {JSON.stringify(data, null, 2)} */}
      <SingleRecord record={record} data={data} />
    </>
  )
}