import { useTranslations } from "next-intl"

import TaxonomyParentGallery from '@/src/app/[locale]/_components/TaxonomyParentGallery'
import TaxonomyGallerySearch from "@/src/app/[locale]/_components/TaxonomyGallerySearch"
import PaginationNumbers from "@/src/app/[locale]/_components/PaginationNumbers"
import SearchNotFound from "@/src/app/[locale]/_components/SearchNotFound"

import { getGalleryData } from '@/src/app/[locale]/_lib/apiCalls'
import { detectLocale } from "@/src/app/[locale]/_lib/helpers"
import { GALLERY_IMAGE_PER_PAGE } from '@/src/app/[locale]/_lib/constants'

const PageTitle = ({ locale }) => {
  const t = useTranslations("Gallery")
  return <div className="flex items-center justify-center md:justify-start">
    <h2 className={`text-2xl font-medium ${detectLocale(locale)}`}>{t("pageTitle")}</h2>
  </div>
}

export default async function Gallery({ params, searchParams }) {

  const currentPage = searchParams.page || 1
  const query = searchParams.q || ""

  const data = await getGalleryData(`files?`, params.locale, currentPage, query ? query : "", GALLERY_IMAGE_PER_PAGE)

  return (
    <section className='py-4'>
      <div className="flex flex-col gap-y-4 md:flex-row md:gap-y-0 md:items-center md:justify-between mb-8">
        <PageTitle locale={params.locale} />
        <TaxonomyGallerySearch />
      </div>

      <TaxonomyParentGallery photos={data?.data} />

      {data && data?.data?.length === 0 && (
        <SearchNotFound />
      )}

      {data?.data?.length !== 0 && (
        <PaginationNumbers
          path={`?files`}
          searchParams={searchParams}
          currentPage={currentPage}
          total={data?.total_page}
        />)
      }

    </section>
  )
}
