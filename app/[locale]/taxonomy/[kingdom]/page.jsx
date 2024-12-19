import NothingFound from '@/app/[locale]/_components/NothingFound'
import TaxonomyParent from '@/app/[locale]/_components/TaxonomyParent'
import TaxonomyChildNodes from '@/app/[locale]/_components/TaxonomyChildNodes';
import Cite from "@/app/[locale]/_components/Cite";

import { getData } from '@/app/[locale]/_lib/apiCalls'
import { htmlToPlainText, sortChildren } from '@/app/[locale]/_lib/helpers';

export async function generateMetadata({ params, searchParams }) {
    const { data } = await getData(`taxonomy/${searchParams.id}?type=Kingdom`, params.locale)

    return {
        title: data?.metadata?.seo?.title,
        keywords: htmlToPlainText(data?.metadata?.seo?.keywords),
        description: htmlToPlainText(data?.metadata?.seo?.description),
        robots: htmlToPlainText(data?.metadata?.seo?.robots),
    }
}

export default async function Kingdom({ params, searchParams }) {

    const { data } = await getData(`taxonomy/${searchParams.id}?type=Kingdom`, params.locale)
    const { data: child } = await getData(`taxonomy?type=Phylum&parent_id=${searchParams.id}`, params.locale)

    if (!data) {
        return <NothingFound />
    }

    const sortedChildren = sortChildren(child)

    return (
        <>
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
            <Cite name={data?.metadata?.name} />
        </>
    )
}
