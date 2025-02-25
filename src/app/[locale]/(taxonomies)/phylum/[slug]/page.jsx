import NothingFound from "@/src/app/[locale]/_components/NothingFound"
import TaxonomyParent from "@/src/app/[locale]/_components/TaxonomyParent"
import TaxonomyParentNodes from "@/src/app/[locale]/_components/TaxonomyParentNodes"
import TaxonomyChildNodes from "@/src/app/[locale]/_components/TaxonomyChildNodes"
import TaxonomyConservationStatus from "@/src/app/[locale]/_components/TaxonomyConservationStatus"
import Pagination from "@/src/app/[locale]/_components/Pagination"
import Cite from "@/src/app/[locale]/_components/Cite"

import { getData, getPaginatedData } from "@/src/app/[locale]/_lib/apiCalls"
import { formatCodes, formatCodesTotal } from "@/src/app/[locale]/_lib/helpers"
import { TAXON_PER_PAGE } from "@/src/app/[locale]/_lib/constants"

export default async function Phylum({ params, searchParams }) {

  const currentPage = searchParams.page || 1

  const { data } = await getData(`taxonomy/${params.slug}?type=Phylum`, params.locale)
  const child = await getPaginatedData(`taxonomy?type=TaxClass&parent_id=${data?.metadata?.id}`, params.locale, currentPage, TAXON_PER_PAGE)

  const codesObject = data?.national_red_list_status_counts

  const formattedCodes = formatCodes(codesObject)
  const codesCountTotal = formatCodesTotal(formattedCodes)

  const reversedParent = data?.parents?.length 
    ? [...data.parents].reverse() 
    : [];

  if (!data) {
    return <NothingFound />
  }

  return (
    <>
      <TaxonomyParent
        data={data}
        photos={data.files}
        species={child}
        rank={`https://dwc.tdwg.org/list/#dwc_taxonRank`}
        accordingTo={`https://dwc.tdwg.org/list/#dwc_nameAccordingTo`}
        sna={`https://dwc.tdwg.org/list/#dwc_scientificNameAuthorship`}
        vernakularName={`https://dwc.tdwg.org/list/#dwc_vernacularName`}
      // description={data[0]?.description}
      />

      <TaxonomyConservationStatus
        taxonName={data?.metadata?.name}
        totalCount={codesCountTotal}
        codes={formattedCodes}
      />

      <TaxonomyParentNodes data={reversedParent} />

      <TaxonomyChildNodes
        data={child?.data}
        recordsTotal={data?.species_count}
        locale={params.locale}
        taxonName={data?.metadata?.name}
        pathToChildren="class"
      />

      {child?.recordsTotal > TAXON_PER_PAGE && (
        <Pagination
          path={null}
          currentPage={currentPage}
          total={child?.total_page}
        />)
      }

      <Cite name={data?.metadata?.name} />
    </>
  )
}