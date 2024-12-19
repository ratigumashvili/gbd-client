import NothingFound from '@/app/[locale]/_components/NothingFound'
import TaxonomyParent from '@/app/[locale]/_components/TaxonomyParent'
import TaxonomyChildNodes from '@/app/[locale]/_components/TaxonomyChildNodes';
import Cite from "@/app/[locale]/_components/Cite";

import { getData } from '@/app/[locale]/_lib/apiCalls'
import { htmlToPlainText, sortChildren } from '@/app/[locale]/_lib/helpers';

export default async function TestKingdom({ params, searchParams }) {
    const { data } = await getData(`taxonomy/${searchParams.id}?type=Kingdom`, params.locale)
    const { data: child } = await getData(`taxonomy?type=Phylum&parent_id=${searchParams.id}`, params.locale)

    const sortedChildren = sortChildren(child)

    if (!data) {
        return <NothingFound />
    }

    return (
        <>
            {/* {JSON.stringify(data, null, 2)} */}

            <TaxonomyParent
                data={data}
                photos={data?.files}
                species={child}
            // description={data?.metadata}
            />

            <TaxonomyChildNodes
                data={sortedChildren}
                locale={params.locale}
                taxonName={data?.metadata?.name}
                pathToChildren="phylum"
            />

            <Cite name={data?.metadata?.name} />
        </>
    )
}

