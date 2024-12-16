import NothingFound from "@/app/[locale]/_components/NothingFound";
import TaxonomyParent from "@/app/[locale]/_components/TaxonomyParent"
import TaxonomyChildSpecies from "@/app/[locale]/_components/TaxonomyChildSpecies";
import Cite from "@/app/[locale]/_components/Cite";
import Pagination from "@/app/[locale]/_components/Pagination";

import { getData, getPaginatedData } from "@/app/[locale]/_lib/apiCalls";
import { SPECIES_PER_PAGE } from "@/app/[locale]/_lib/constants";

export default async function Genus({ params, searchParams }) {

  const currentPage = searchParams.page || 1

  const { data } = await getData(`taxonomy/${searchParams.id}?type=Genus`, params.locale)
  const species = await getPaginatedData(`taxonomy?type=Specie&parent_id=${searchParams.id}`, params.locale, currentPage, SPECIES_PER_PAGE)

  if (!data) {
    return <NothingFound />
  }

  return (
    <>
      <TaxonomyParent
        data={data}
        photos={data.files}
        // description={data[0]?.description}
      />
      <TaxonomyChildSpecies
        data={species}
        locale={params.locale}
        taxonName={data?.metadata?.name}
      />
      {data?.metadata?.name && species?.recordsTotal > SPECIES_PER_PAGE && (
        <Pagination
          path={null}
          searchParams={searchParams}
          currentPage={currentPage}
          total={species?.total_page}
        />)
      }
      <Cite name={data?.metadata?.name} />
    </>
  )
}