import { useTranslations } from "next-intl"

import TaxonomyParentGallery from '@/src/app/[locale]/_components/TaxonomyParentGallery'
import Pagination from '@/src/app/[locale]/_components/PaginationNumbers'

import { getPaginatedData } from '@/src/app/[locale]/_lib/apiCalls'
import { detectLocale } from "@/src/app/[locale]/_lib/helpers"
import { GALLERY_IMAGE_PER_PAGE } from '@/src/app/[locale]/_lib/constants'
import { Link } from "@/src/i18n/routing"

const PageTitle = ({ locale }) => {
  const t = useTranslations("Gallery")
  return <h2 className={`text-2xl font-medium ${detectLocale(locale)}`}>{t("pageTitle")}</h2>
}

export default async function Gallery({ params, searchParams }) {

  const currentPage = searchParams.page || 1
  const query = searchParams.q || ""

  const handleFormSubmit = async (formData) => {
    "use server"
    const latinName = formData.get("latinName")
    console.log("latinName: ", latinName)
    
  };

  const data = await getPaginatedData(`files?`, params.locale, currentPage, query ? query : "", GALLERY_IMAGE_PER_PAGE )

  return (
    <section className='py-4'>
      <div className="flex items-center justify-center mb-4">
        <div className="flex-1"><PageTitle locale={params.locale} /></div>
        <div>
          <form action={handleFormSubmit} className="flex gap-2">
            <input type="text" name="latinName" className="px-3 py-2 border rounded-sm" placeholder="Latin name" />
            <button type="submit" className="button-secondary">Submit</button>
            <Link href={"/gallery"} className="button-danger">Reset</Link>
          </form>
        </div>
      </div>


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
