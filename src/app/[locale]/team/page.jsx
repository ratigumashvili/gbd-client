import { getPaginatedData } from "@/src/app/[locale]/_lib/apiCalls"

import Pagination from "@/src/app/[locale]/_components/Pagination"

import { RESEARCHERS_PER_PAGE } from "@/src/app/[locale]/_lib/constants"
import { Blocks} from "@/src/app/[locale]/team/Features"

const Team = async ({ params, searchParams }) => {

  const currentPage = searchParams.page || 1

  const response = await getPaginatedData('researcher', params.locale, currentPage, RESEARCHERS_PER_PAGE)

  return (
    <div className="py-4">

      <Blocks data={response.data} />

      {response?.recordsTotal > RESEARCHERS_PER_PAGE && (
        <Pagination
          path={null}
          searchParams={null}
          currentPage={currentPage}
          total={response?.total_page}
        />)
      }

    </div>

  )
}

export default Team