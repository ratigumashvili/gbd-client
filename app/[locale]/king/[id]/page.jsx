import React from 'react'
import { getData } from '../../_lib/apiCalls'
import TaxonomyParent from '../../_components/TaxonomyParent'
import TaxonomyChildNodes from '../../_components/TaxonomyChildNodes'
import { sortChildren } from '../../_lib/helpers'

export default async function TestKingdom({ params, searchParams }) {
    const { data } = await getData(`taxonomy/${searchParams.id}?type=Kingdom`, params.locale)
    const { data: child } = await getData(`taxonomy?type=Phylum&parent_id=${searchParams.id}`, params.locale)

    const sortedChildren = sortChildren(child)

    return (
        <div>
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
            />
        </div>
    )
}

