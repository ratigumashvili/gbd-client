import NothingFound from "@/app/[locale]/_components/NothingFound";
import TaxonomyParent from "@/app/[locale]/_components/TaxonomyParent"
import TaxonomyChildNodes from "@/app/[locale]/_components/TaxonomyChildNodes";
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
        species={species.data}
      // description={data[0]?.description}
      />
      <TaxonomyChildNodes
        data={species?.data}
        recordsTotal={species?.recordsTotal}
        locale={params.locale}
        taxonName={data?.metadata?.name}
        pathToChildren="species"
      />
      {species?.recordsTotal > SPECIES_PER_PAGE && (
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