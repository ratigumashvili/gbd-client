import { useTranslations } from 'next-intl'

import BrowseByTaxonomy from "@/app/[locale]/_components/BrowseByTaxonomy"

function Taxonomy({params}) {
  
const t = useTranslations("Taxonomy")

  return <BrowseByTaxonomy locale={params.locale} title={t("pageTitle")} />
}

export default Taxonomy