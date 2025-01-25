import SingleRecord from "@/src/app/[locale]/_components/singleTaxon/SingleRecord"
import NothingFound from "@/src/app/[locale]/_components/NothingFound";

import { getData } from "@/src/app/[locale]/_lib/apiCalls";

export default async function SingleSpecies({ params }) {

  const { data } = await getData(`taxonomy/${params.id}/?type=Specie`, params.locale)

  const coordinates = data?.metadata?.coordinates?.map?.length && data?.metadata?.coordinates?.map?.map((coord) => [coord.latitude, coord.longitude])

  if (!data) {
    return <NothingFound />
  }

  return (
    <SingleRecord
      data={data}
      coordinates={coordinates}
      
    />
  )
}