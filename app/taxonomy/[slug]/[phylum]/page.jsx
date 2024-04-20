import TaxonomyParent from "@/app/_components/TaxonomyParent"
import { taxonomy } from "@/app/_lib/data"

function Phylum({params}) {
  
const data = taxonomy[0].phylum.filter((item) => item.slug === params.phylum)
const children = data[0]?.class?.map((item) => item)



  return (
    <>
        <TaxonomyParent
            name={`Phylum ${data[0]?.name}`}
            description={data[0]?.description}
            photos={data[0]?.photos}
            children={children}
        />
    </>
  )
}

export default Phylum