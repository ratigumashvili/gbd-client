import qs from 'qs';
import { useTranslations } from "next-intl"

import SearchParameters from "@/src/app/[locale]/_components/SearchParameters"
import AdvancedSearch from "@/src/app/[locale]/_components/search-form/AdvancedSearch"

import { capitalizeFirstLetter, detectLocale } from "@/src/app/[locale]/_lib/helpers"
import { getData, getPaginatedData } from "../_lib/apiCalls"

const PageTitle = ({locale}) => {
  const t = useTranslations("Search")
  return (
    <h2 className={`text-2xl font-medium mb-4 ${detectLocale(locale)}`}>{t("pageTitle")}</h2>
  )
}


async function SearchPage({ params, searchParams }) {

  const search_in = searchParams.search_in
  const level = capitalizeFirstLetter(searchParams?.taxonomy_level)
  const latinName = searchParams.name
  const englishName = searchParams.english_name
  const georgianName = searchParams.georgian_name
  const iucn = searchParams.iucn_status

  let queryParams = {
    taxonomy_level: searchParams?.taxonomy_level || undefined,
    name: searchParams.name || undefined,
    georgian_name: searchParams.georgian_name || undefined,
    english_name: searchParams.english_name || undefined,
    iucn_status: searchParams.iucn_status || undefined
  }

  //   --url 'https://test-api.biodiversity.iliauni.edu.ge/api/1.0/taxonomy/search?search_in=specie&iucn_status=CR' \




   const result = qs.stringify(queryParams, {
      skipNulls: true,
      skipEmptyStrings: true
    })

const data = await getPaginatedData(`taxonomy/search?search_in=${search_in}&${result}`, params.locale, 1, 5)
  const check = searchParams && Object.keys(searchParams).length
  
  return (
    <section className="py-4">
      <PageTitle locale={params.locale} />
      <AdvancedSearch />
      {check !== 0 && <SearchParameters length={data?.data?.length} />}
      <pre>SEARCH PARAMS: {JSON.stringify(searchParams, null, 2)}</pre> <br />
      <pre>{JSON.stringify(search_in, null, 2)}</pre>
      <pre>DATA: {JSON.stringify(data, null, 2)}</pre>
    </section>
  )
}

export default SearchPage