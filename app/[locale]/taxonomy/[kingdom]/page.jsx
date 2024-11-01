import { taxonomy } from '@/app/[locale]/_lib/data'

import TaxonomyParent from '@/app/[locale]/_components/TaxonomyParent'

import NothingFound from '../../_components/NothingFound'

export default function page({ params }) {

    const data = taxonomy.filter((item) => item.slug === params.kingdom)
    const child = taxonomy[0].phylum.map((child) => child)

    if (data.length === 0) {
        return <NothingFound />
    }

    return (
        <>
        {/* {JSON.stringify(child, null, 2)} */}
            <TaxonomyParent
                name={`Kingdom ${data[0]?.name}`}
                description={data[0]?.description}
                photos={data[0]?.photos}
                child={child}
                locale={params.locale}
            />
        </>
    )
}
