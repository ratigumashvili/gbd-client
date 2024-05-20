import { redirect } from 'next/navigation'

import { taxonomy } from '@/app/[locale]/_lib/data'

import TaxonomyParent from '@/app/[locale]/_components/TaxonomyParent'

export default function page({ params }) {

    const data = taxonomy.filter((item) => item.slug === params.kingdom)
    const children = taxonomy[0].phylum.map((child) => child)

    if (data.length === 0) {
        redirect('/taxonomy')
    }

    return (
        <>
        {/* {JSON.stringify(children, null, 2)} */}
        <TaxonomyParent
            name={`Kingdom ${data[0]?.name}`}
            description={data[0]?.description}
            photos={data[0]?.photos}
            children={children}
        />
        
        </>
    )
}
