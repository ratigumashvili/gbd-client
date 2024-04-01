import TaxonomyParent from '@/app/_components/TaxonomyParent'

import { taxonomy } from "@/app/_lib/data"

export default function Plantae() {
    return (
        <TaxonomyParent
            title={"Kingdom Plantae"}
            description={taxonomy[2].description}
            photos={taxonomy[2].photos}
        />
    )
}
