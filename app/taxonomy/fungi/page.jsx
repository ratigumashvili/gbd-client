import TaxonomyParent from '@/app/_components/TaxonomyParent'

import { taxonomy } from "@/app/_lib/data"

export default function Fungi() {
  return (
    <TaxonomyParent
      title={"Kingdom Fungi"}
      description={taxonomy[1].description}
      photos={taxonomy[1].photos}
    />
  )
}
