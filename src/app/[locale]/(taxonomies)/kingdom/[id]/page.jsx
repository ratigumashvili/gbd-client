import NothingFound from '@/src/app/[locale]/_components/NothingFound'
import TaxonomyParent from '@/src/app/[locale]/_components/TaxonomyParent'
import TaxonomyChildNodes from '@/src/app/[locale]/_components/TaxonomyChildNodes';
import TaxonomyConservationStatus from '@/src/app/[locale]/_components/TaxonomyConservationStatus';
import Pagination from '@/src/app/[locale]/_components/Pagination';
import Cite from "@/src/app/[locale]/_components/Cite";

import { getData, getPaginatedData } from '@/src/app/[locale]/_lib/apiCalls'
import { formatCodes, formatCodesTotal } from '@/src/app/[locale]/_lib/helpers';
import { TAXON_PER_PAGE } from '@/src/app/[locale]/_lib/constants';

export default async function Kingdom({ params, searchParams }) {

    const currentPage = searchParams.page || 1

    const { data } = await getData(`taxonomy/${searchParams.id}?type=Kingdom`, params.locale)
    const child = await getPaginatedData(`taxonomy?type=Phylum&parent_id=${searchParams.id}`, params.locale, currentPage, TAXON_PER_PAGE)

    const codesObject = data?.national_red_list_status_counts
    
    const formattedCodes = formatCodes(codesObject)
    const codesCountTotal = formatCodesTotal(formattedCodes)

    if (!data) {
        return <NothingFound />
    }

    return (
        <>
            <TaxonomyParent
                data={data}
                photos={data?.files}
                species={child}
                locale={params.locale}
                rank={`https://dwc.tdwg.org/list/#dwc_taxonRank`}
                accordingTo={`https://dwc.tdwg.org/list/#dwc_nameAccordingTo`}
                sna={`https://dwc.tdwg.org/list/#dwc_scientificNameAuthorship`}
                vernakularName={`https://dwc.tdwg.org/list/#dwc_vernacularName`}
            // description={data?.metadata}
            />

            <TaxonomyConservationStatus
                taxonName={data?.metadata?.name}
                totalCount={codesCountTotal}
                codes={formattedCodes}
            />

            <TaxonomyChildNodes
                data={child?.data}
                recordsTotal={data?.species_count}
                locale={params.locale}
                taxonName={data?.metadata?.name}
                pathToChildren="phylum"
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

