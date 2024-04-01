import TaxonomyParent from "@/app/_components/TaxonomyParent";

import { taxonomy } from "@/app/_lib/data"

export default function Animalia() {
    return (
        <TaxonomyParent
            title={"Kingdom Animalia"}
            description={taxonomy[0].description}
            photos={taxonomy[0].photos} />
    )
}
