import NothingFound from "@/app/[locale]/_components/NothingFound";
import TaxonomyParent from "@/app/[locale]/_components/TaxonomyParent";
import TaxonomyChildNodes from "@/app/[locale]/_components/TaxonomyChildNodes";
import Pagination from "@/app/[locale]/_components/Pagination";
import Cite from "@/app/[locale]/_components/Cite";

import { getData, getPaginatedData } from "@/app/[locale]/_lib/apiCalls";

import { TAXON_PER_PAGE } from "@/app/[locale]/_lib/constants";

export default async function Family({ params, searchParams }) {

  const currentPage = searchParams.page || 1

  const { data } = await getData(`taxonomy/${searchParams.id}?type=Family`, params.locale)
  const child = await getPaginatedData(`taxonomy?type=Genus&parent_id=${searchParams.id}`, params.locale, currentPage, TAXON_PER_PAGE)

  if (!data) {
    return <NothingFound />
  }

  return (
    <>
      <TaxonomyParent
        data={data}
        photos={data.files}
        species={child}
      // description={data[0]?.description}
      />
      <TaxonomyChildNodes
        data={child?.data}
        recordsTotal={child?.recordsTotal}
        locale={params.locale}
        taxonName={data?.metadata?.name}
        pathToChildren="genus"
      />
      {child?.recordsTotal > TAXON_PER_PAGE && (
        <Pagination
          path={null}
          searchParams={searchParams}
          currentPage={currentPage}
          total={child?.total_page}
        />)
      }
      <Cite name={data?.metadata?.name} />
    </>
  )
}
