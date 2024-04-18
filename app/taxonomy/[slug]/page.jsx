import { redirect } from 'next/navigation'

import TaxonomyParent from '@/app/_components/TaxonomyParent'
import { taxonomy } from '@/app/_lib/data'


export default function page({ params }) {

    const data = taxonomy.filter((item) => item.slug === params.slug)

    if (data.length === 0) {
        redirect('/taxonomy')
    }

    return (
        <>

            <TaxonomyParent
                name={data[0]?.name}
                description={data[0]?.description}
                photos={data[0]?.photos}
            />

        </>
    )
}
