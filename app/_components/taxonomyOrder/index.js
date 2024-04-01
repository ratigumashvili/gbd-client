import dynamic from "next/dynamic";

const DynamicTaxonomyOrder = dynamic(() => import('./TaxonomyOrderTree'), {
    ssr: false
})

export default DynamicTaxonomyOrder