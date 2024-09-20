import { useTranslations } from 'next-intl'
import BrowseByTaxonomy from '../_components/BrowseByTaxonomy'

function Taxonomy({params}) {

  const t = useTranslations("Taxonomy")
  
  return (
    <div>
      <BrowseByTaxonomy locale={params.locale} title={t("pageTitle")} />
    </div>
  )
}

export default Taxonomy