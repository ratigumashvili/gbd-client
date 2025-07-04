import NothingFound from "@/src/app/[locale]/_components/NothingFound";
import TaxonomyParent from "@/src/app/[locale]/_components/TaxonomyParent"
import TaxonomyParentNodes from "@/src/app/[locale]/_components/TaxonomyParentNodes"
import TaxonomyChildNodes from "@/src/app/[locale]/_components/TaxonomyChildNodes";
import TaxonomyConservationStatus from '@/src/app/[locale]/_components/TaxonomyConservationStatus'
import Cite from "@/src/app/[locale]/_components/Cite";
import Pagination from "@/src/app/[locale]/_components/Pagination";

import { getData, getPaginatedData } from "@/src/app/[locale]/_lib/apiCalls";
import { formatCodes, formatCodesTotal } from '@/src/app/[locale]/_lib/helpers'
import { SPECIES_PER_PAGE } from "@/src/app/[locale]/_lib/constants";

export default async function Genus({ params, searchParams }) {

  const currentPage = searchParams.page || 1

  const { data } = await getData(`taxonomy/${params.slug}?type=Genus`, params.locale)
  const species = await getPaginatedData(`taxonomy?type=Specie&parent_id=${data?.metadata?.id}`, params.locale, currentPage, SPECIES_PER_PAGE)

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
        species={species.data}
        rank={`https://dwc.tdwg.org/list/#dwc_taxonRank`}
        accordingTo={`https://dwc.tdwg.org/list/#dwc_nameAccordingTo`}
        sna={`https://dwc.tdwg.org/list/#dwc_scientificNameAuthorship`}
        vernakularName={`https://dwc.tdwg.org/list/#dwc_vernacularName`}
        taxon_rank="Genus"
      />

      <TaxonomyConservationStatus
        taxonName={data?.metadata?.name}
        totalCount={codesCountTotal}
        codes={formattedCodes}
      />

      <TaxonomyParentNodes data={reversedParent} />

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
          currentPage={currentPage}
          total={species?.total_page}
        />)
      }
      
      <Cite
        name={data?.metadata?.name}
        editors={data?.editors}
        contributors={data?.contributors}
        isSpecie={false}
      />
    </>
  )
}