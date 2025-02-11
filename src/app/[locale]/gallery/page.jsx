import { useTranslations } from "next-intl"

import TaxonomyParentGallery from '@/src/app/[locale]/_components/TaxonomyParentGallery'
import TaxonomyGallerySearch from "@/src/app/[locale]/_components/TaxonomyGallerySearch"
import PaginationNumbers from "@/src/app/[locale]/_components/PaginationNumbers"

import { getGalleryData } from '@/src/app/[locale]/_lib/apiCalls'
import { detectLocale } from "@/src/app/[locale]/_lib/helpers"
import { GALLERY_IMAGE_PER_PAGE } from '@/src/app/[locale]/_lib/constants'

const PageTitle = ({ locale }) => {
  const t = useTranslations("Gallery")
  return <h2 className={`text-2xl font-medium ${detectLocale(locale)}`}>{t("pageTitle")}</h2>
}

export default async function Gallery({ params, searchParams }) {

  const currentPage = searchParams.page || 1
  const query = searchParams.q || ""

  const data = await getGalleryData(`files?`, params.locale, currentPage, query ? query : "", GALLERY_IMAGE_PER_PAGE)

  return (
    <section className='py-4'>
      <div className="flex items-center justify-center mb-4 border">
        <div className="flex-1"><PageTitle locale={params.locale} /></div>
        <TaxonomyGallerySearch />
      </div>

      <TaxonomyParentGallery photos={data?.data} />

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
