import NothingFound from "@/app/[locale]/_components/NothingFound";
import TaxonomyParent from "@/app/[locale]/_components/TaxonomyParent";
import TaxonomyChildNodes from "@/app/[locale]/_components/TaxonomyChildNodes";
import Cite from "@/app/[locale]/_components/Cite";

import { getData } from "@/app/[locale]/_lib/apiCalls";
import { sortChildren } from "@/app/[locale]/_lib/helpers";

export default async function Family({ params, searchParams }) {

  const { data } = await getData(`taxonomy/${searchParams.id}?type=Family`, params.locale)
  const { data: child } = await getData(`taxonomy?type=Genus&parent_id=${searchParams.id}`, params.locale)

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
        pathToChildren="genus"
      />
      <Cite name={data?.metadata?.name} />
    </>
  )
}