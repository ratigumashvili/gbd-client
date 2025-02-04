import { useTranslations } from "next-intl"

import SearchParameters from "@/src/app/[locale]/_components/SearchParameters"
import { detectLocale } from "@/src/app/[locale]/_lib/helpers"
import { redirect } from "next/navigation"

const PageTitle = ({locale}) => {
  const t = useTranslations("Search")
  return (
    <h2 className={`text-2xl font-medium mb-4 ${detectLocale(locale)}`}>{t("pageTitle")}</h2>
  )
}


async function SearchResults({ params, searchParams }) {

  const data = []

  const rank = searchParams.rank
  const latinName = searchParams.taxonLatinName
  const iucn = searchParams.iucn

  const check = Object.keys(searchParams)

  if(Object.keys(searchParams).length === 0) {
    return redirect('/')
  }
  

  return (
    <section className="py-4">
      <PageTitle locale={params.locale} />
      <SearchParameters length={data.length} />
      {JSON.stringify(check, null, 2)}
    </section>
  )
}

export default SearchResults