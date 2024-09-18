import TaxonomyParent from "@/app/[locale]/_components/TaxonomyParent"
import { taxonomy } from "@/app/[locale]/_lib/data"

function Phylum({params}) {
  
const data = taxonomy[0].phylum.filter((item) => item.slug === params.phylum)
const child = data[0]?.class?.map((item) => item)

  return (
    <>
        <TaxonomyParent
            name={`Phylum ${data[0]?.name}`}
            description={data[0]?.description}
            photos={data[0]?.photos}
            child={child}
            locale={params.locale}
        />
    </>
  )
}

export default Phylum