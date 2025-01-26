import NothingFound from '@/src/app/[locale]/_components/NothingFound'
import TaxonomyParent from '@/src/app/[locale]/_components/TaxonomyParent'
import TaxonomyChildNodes from '@/src/app/[locale]/_components/TaxonomyChildNodes';
import TaxonomyConservationStatus from '@/src/app/[locale]/_components/TaxonomyConservationStatus';
import Pagination from '@/src/app/[locale]/_components/Pagination';
import Cite from "@/src/app/[locale]/_components/Cite";

import { getData, getPaginatedData } from '@/src/app/[locale]/_lib/apiCalls'

import { TAXON_PER_PAGE } from '@/src/app/[locale]/_lib/constants';

export default async function Kingdom({ params, searchParams }) {

    const currentPage = searchParams.page || 1

    const { data } = await getData(`taxonomy/${searchParams.id}?type=Kingdom`, params.locale)
    const child = await getPaginatedData(`taxonomy?type=Phylum&parent_id=${searchParams.id}`, params.locale, currentPage, TAXON_PER_PAGE)

    // temporary data

    const codes = [
        { id: 1, code: "EX", count: 4 },
        { id: 2, code: "CR", count: 7 },
        { id: 3, code: "EN", count: 49 },
        { id: 4, code: "VU", count: 89 },
        { id: 5, code: "NT", count: 78 },
        { id: 6, code: "LC", count: 1177 },
        { id: 7, code: "NE", count: 611 },
        { id: 8, code: "DD", count: 608 },
        { id: 9, code: "RE", count: 4 },
      ];

    // end temporary data

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
                totalCount={2637}
                codes={codes}

            />

            <TaxonomyChildNodes
                data={child?.data}
                recordsTotal={child?.recordsTotal}
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

