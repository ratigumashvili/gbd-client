import NothingFound from '@/app/[locale]/_components/NothingFound'
import TaxonomyParent from '@/app/[locale]/_components/TaxonomyParent'
import TaxonomyChildNodes from '@/app/[locale]/_components/TaxonomyChildNodes';
import Cite from "@/app/[locale]/_components/Cite";

import { getData } from '../../_lib/apiCalls'
import { sortChildren } from '../../_lib/helpers';

export default async function Kingdom({ params, searchParams }) {

    const { data } = await getData(`taxonomy/${searchParams.id}?type=Kingdom`, params.locale)
    const { data: child } = await getData(`taxonomy?type=Phylum&parent_id=${searchParams.id}`, params.locale)

    if (!data) {
        return <NothingFound />
    }

    const sortedChildren = sortChildren(child)

    return (
        <>
        {/* <pre>
        {JSON.stringify(data.files, null, 2)}
        <br />
        </pre> */}
            <TaxonomyParent
                data={data}
                photos={data?.files}
                // description={data?.metadata}
                // photos={data[0]?.photos}
            />
            <TaxonomyChildNodes
                data={sortedChildren}
                locale={params.locale}
                taxonName={data?.metadata?.name}
            />
            <Cite name={data?.metadata?.name} />
        </>
    )
}
