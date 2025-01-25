import SingleRecord from "@/src/app/[locale]/_components/singleTaxon/SingleRecord"
import NothingFound from "@/src/app/[locale]/_components/NothingFound";

import { getData } from "@/src/app/[locale]/_lib/apiCalls";

export default async function SingleSpecies({ params }) {

  const { data } = await getData(`taxonomy/${params.id}/?type=Specie`, params.locale)

  const heatMapCoordinates = data?.metadata?.coordinates?.map?.length &&
  data?.metadata?.coordinates?.map?.map((coord) => [coord.latitude, coord.longitude])
  .filter((coord) => !(coord[0] === "" && coord[1] === ""));

  const pinMapCoordinates = data?.metadata?.coordinates?.map?.length && data?.metadata?.coordinates?.map?.map(item => ({
    geocode: [parseFloat(item.latitude), parseFloat(item.longitude)],
    popup: {
      place: item.locality,
      recorded_by: item.recorded_by
    }
  }))
  .filter(item => !(item.geocode[0] === null || isNaN(item.geocode[0]) || item.geocode[1] === null || isNaN(item.geocode[1])));

  if (!data) {
    return <NothingFound />
  }

  return (
    <>
    <SingleRecord
      data={data}
      heatMapCoordinates={heatMapCoordinates}
      pinMapCoordinates={pinMapCoordinates}
    />
    </>
  )
}