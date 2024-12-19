import NothingFound from '@/app/[locale]/_components/NothingFound'
import TaxonomyParent from '@/app/[locale]/_components/TaxonomyParent'
import TaxonomyChildNodes from '@/app/[locale]/_components/TaxonomyChildNodes'
import Cite from '@/app/[locale]/_components/Cite'

import { getData } from '@/app/[locale]/_lib/apiCalls'
import { sortChildren } from '@/app/[locale]/_lib/helpers'


export default async function TaxonClass({ params, searchParams }) {

  const { data } = await getData(`taxonomy/${searchParams.id}?type=TaxClass`, params.locale)
  const { data: child } = await getData(`taxonomy?type=TaxOrder&parent_id=${searchParams.id}`, params.locale)

  if (!data) {
    return <NothingFound />
  }

  const sortedChildren = sortChildren(child)

  return (
    <>
      <TaxonomyParent
        data={data}
        photos={data.files}
        species={child}
        // description={data[0]?.description}
      />
      <TaxonomyChildNodes
        data={sortedChildren}
        locale={params.locale}
        taxonName={data?.metadata?.name}
        pathToChildren="order"
      />
      <Cite name={data?.metadata?.name} />
    </>
  )
}