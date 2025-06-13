
import DynamicTaxonomyOrder from "@/src/app/[locale]/_components/taxonomyOrder"
import { getDynamicOrder } from "@/src/app/[locale]/_lib/apiCalls"

async function DynamicOrder({ params, searchParams }) {
  const { locale } = await params
  const rank = await searchParams.rank
  const taxonId = await searchParams.taxonId

  const filterTaxonomyValue = (value) => {
    let result

    switch (value) {
        case "Class":
            result = "TaxClass"
            break;
        case "Order":
            result = "TaxOrder"
            break;
        default: return value
    }

    return result
}

  const { data } = await getDynamicOrder(`taxonomy/children-hierarchy`, locale, taxonId, filterTaxonomyValue(rank))
  return (
    <>
      <section>
        <DynamicTaxonomyOrder treeContent={data} />
      </section>
    </>
  )
}

export default DynamicOrder