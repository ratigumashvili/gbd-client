import ImageGallery from '../_components/ImageGallery'
import {imageGalleryData} from "../_lib/data"

import { useTranslations } from "next-intl"
import Pagination from '@/src/app/[locale]/_components/PaginationNumbers'
import TaxonomyParentGallery from '@/src/app/[locale]/_components/TaxonomyParentGallery'

import { getPaginatedData } from '@/src/app/[locale]/_lib/apiCalls'
import { detectLocale } from "@/src/app/[locale]/_lib/helpers"
import { GALLERY_IMAGE_PER_PAGE } from '@/src/app/[locale]/_lib/constants'

const PageTitle = ({locale}) => {
  const t = useTranslations("Gallery")
  return <h2 className={`text-2xl font-medium mb-4 ${detectLocale(locale)}`}>{t("pageTitle")}</h2>
}

export default async function Gallery({params, searchParams}) {

  const currentPage = searchParams.page || 1

  const data = await getPaginatedData(`files?`, params.locale, currentPage, GALLERY_IMAGE_PER_PAGE )

  return (
    <section className='py-4'>
      <PageTitle locale={params.locale} />

      <TaxonomyParentGallery photos={data?.data} />

      {data?.recordsTotal > GALLERY_IMAGE_PER_PAGE && (
        <Pagination
          path={`?files`}
          searchParams={searchParams}
          currentPage={currentPage}
          total={data?.total_page}
        />)
      }
    </section>
  )
}
