import { useTranslations } from 'next-intl'
import BrowseByTaxonomy from '../_components/BrowseByTaxonomy'

function Taxonomy() {

  const t = useTranslations("Taxonomy")
  
  return (
    <div>
      <BrowseByTaxonomy title={t("pageTitle")} />
    </div>
  )
}

export default Taxonomy