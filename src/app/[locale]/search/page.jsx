import qs from 'qs';
import { useTranslations } from "next-intl"

import SearchParameters from "@/src/app/[locale]/_components/SearchParameters"
import AdvancedSearch from "@/src/app/[locale]/_components/search-form/AdvancedSearch"
import SearchResultsDisplay from '@/src/app/[locale]/_components/SearchResultsDisplay';
import Pagination from '@/src/app/[locale]/_components/Pagination';

import { detectLocale } from "@/src/app/[locale]/_lib/helpers"
import { getPaginatedData } from "@/src/app/[locale]/_lib/apiCalls"

import { SEARCH_RESULTS_PER_PAGE } from '@/src/app/[locale]/_lib/constants';

const PageTitle = ({ locale }) => {
  const t = useTranslations("Search")
  return (
    <h2 className={`text-2xl font-medium mb-4 ${detectLocale(locale)}`}>{t("pageTitle")}</h2>
  )
}

const NothingFound = () => {
  const t = useTranslations("Search")
  return (
    <p className='text-xl font-medium my-4'>{t("nothing_found")}</p>
  )
}


async function SearchPage({ params, searchParams }) {

  const currentPage = searchParams.page || 1

  const search_in = searchParams.search_in

  let queryParams = {
    taxonomy_level: searchParams?.taxonomy_level || undefined,
    name: searchParams.name || undefined,
    georgian_name: searchParams.georgian_name || undefined,
    english_name: searchParams.english_name || undefined,
    iucn_status: searchParams.iucn_status || undefined
  }

  const result = qs.stringify(queryParams, {
    skipNulls: true,
    skipEmptyStrings: true
  })

  const data = await getPaginatedData(`taxonomy/search?search_in=${search_in}&${result}`, params.locale, currentPage, SEARCH_RESULTS_PER_PAGE)
  const check = searchParams && Object.keys(searchParams).length

  return (
    <section className="py-4">
      <PageTitle locale={params.locale} />
      <AdvancedSearch />

      {check !== 0 && <SearchParameters length={data?.recordsTotal} />}

      {check !== 0 && data?.data?.length === 0 && (
        <NothingFound />
      )}

      {data.data && data?.data?.length !== 0 && (
        <SearchResultsDisplay data={data.data} />
      )}

      {data?.recordsTotal > SEARCH_RESULTS_PER_PAGE && (
        <Pagination
          path={`/search?&search_in=${search_in}&${result}`}
          searchParams={searchParams}
          currentPage={currentPage}
          total={data?.total_page}
        />)
      }
    </section>
  )
}

export default SearchPage