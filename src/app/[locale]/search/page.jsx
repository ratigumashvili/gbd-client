import { useTranslations } from "next-intl"

import SearchParameters from "@/src/app/[locale]/_components/SearchParameters"
import AdvancedSearch from "@/src/app/[locale]/_components/search-form/AdvancedSearch"

import { detectLocale } from "@/src/app/[locale]/_lib/helpers"

const PageTitle = ({locale}) => {
  const t = useTranslations("Search")
  return (
    <h2 className={`text-2xl font-medium mb-4 ${detectLocale(locale)}`}>{t("pageTitle")}</h2>
  )
}


async function SearchPage({ params, searchParams }) {

  const data = []

  const check = searchParams && Object.keys(searchParams).length

  const rank = searchParams.rank
  const latinName = searchParams.taxonLatinName
  const iucn = searchParams.iucn
  

  return (
    <section className="py-4">
      <PageTitle locale={params.locale} />
      <AdvancedSearch />
      {check !== 0 && <SearchParameters length={data.length} />}
    </section>
  )
}

export default SearchPage