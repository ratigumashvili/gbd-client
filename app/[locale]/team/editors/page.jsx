import { getData, getPaginatedData } from "@/app/[locale]/_lib/apiCalls"
import { detectLocale, sortPosition } from "@/app/[locale]/_lib/helpers"

import Pagination from "@/app/[locale]/_components/Pagination"

import { RESEARCHERS_PER_PAGE } from "@/app/[locale]/_lib/constants"
import { Blocks, PageTitle, RoleTranslate } from "@/app/[locale]/team/Features"

const Team = async ({ params, searchParams }) => {

  const currentPage = searchParams.page || 1

  // const response = await getPaginatedData('researcher', params.locale, currentPage, RESEARCHERS_PER_PAGE)
  const { data: researchers } = await getData('researcher', params.locale)
  // const { data: teamAppreciation } = await getData('static-page/researcher', params.locale)

  const editors = sortPosition(researchers, "editor")

  const authors = sortPosition(researchers, "author")
  const contributors = sortPosition(researchers, "contributor")

  return (
    <div className="py-4">

      {/* <PageTitle locale={params.locale} /> */}
      {/* <PageTitle /> */}

      {/* <pre>{JSON.stringify(response?.data?.sort((a, b) => a.sort_weight - b.sort_weight), null, 2)}</pre> */}

      {/* {response?.recordsTotal > RESEARCHERS_PER_PAGE && (
        <Pagination
          path={`team?page=`}
          searchParams={null}
          currentPage={currentPage}
          total={response?.total_page}
        />)
      } */}

      {/* {editors && editors?.length !== 0 && <EditorsTranslate />} */}
      {/* <div className="flex gap-x-2 mb-12">
        {routes.map((item) => (
          <RoleTranslate key={item.id} {...item} />
        ))}
      </div> */}

      <Blocks data={editors} />

      {/* <div className="[&>p]:mb-3 [&>ul]:mb-3 [&>ul]:list-disc [&>ul]:ml-4 p-4 bg-slate-50 dark:bg-slate-600 rounded-md mt-8"
        dangerouslySetInnerHTML={{ __html: teamAppreciation?.meta_data_localized?.text }}
      /> */}

    </div>

  )
}

export default Team