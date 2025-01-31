
import DynamicTaxonomyOrder from "@/src/app/[locale]/_components/taxonomyOrder"

import { fungiTree } from '@/src/app/[locale]/_lib/data'

function DynamicOrder() {
  return (
    <section>
        <DynamicTaxonomyOrder treeContent={fungiTree} />
    </section>
  )
}

export default DynamicOrder