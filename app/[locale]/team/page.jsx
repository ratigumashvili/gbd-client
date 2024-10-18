import Image from "next/image"

import { Link as InternalLink } from "@/navigation"

import { useTranslations } from "next-intl"
import { AuthorsTranslate, ContributorsTranslate, EditorsTranslate } from "./Translations"

import { getData, getPaginatedData } from "../_lib/apiCalls"
import { detectLocale, sortPosition } from "../_lib/helpers"

import Pagination from "../_components/Pagination"

import { RESEARCHERS_PER_PAGE } from "../_lib/constants"

const Blocks = ({ data = [] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {data.length !== 0 && data?.map((item) => (
        <article key={item.id} className="flex gap-4 mb-6">
          <div className="shrink-0">
            <Image
              src={`${item.image_url}`}
              width={150}
              height={150}
              alt={item.title}
              className="object-cover overflow-hidden self-start rounded-full w-28 h-28 mt-2"
            />
          </div>
          <div>
            <h2 className="font-medium text-xl mb-1">
              <InternalLink href={`/team/${item.id}`} className="block hover:text-teal-700 transition-all duration-150">{item.title}</InternalLink>
            </h2>
            <span className="inline-block mb-3 mt-2 text-sm py-1 px-2 bg-teal-600 text-white rounded-md">{item.position}</span>
            <div
              dangerouslySetInnerHTML={{ __html: item.biography }}
              className="[&>p]:mb-3 font-firaGo text-sm [&>a]:underline"
            />
          </div>
        </article>
      ))}
    </div>
  )
}

const PageTitle = ({ locale }) => {
  const t = useTranslations("Team")
  return <h2 className={`text-2xl font-medium mb-4 ${detectLocale(locale)}`}>{t("pageTitle")}</h2>
}

const Team = async ({ params, searchParams }) => {

  const currentPage = searchParams.page || 1
  
  const response = await getPaginatedData('researcher', params.locale, currentPage, RESEARCHERS_PER_PAGE)

  const { data: researchers } = await getData('researcher', params.locale)
  const { data: teamAppreciation } = await getData('static-page/researcher', params.locale)

  const editors = sortPosition(researchers, "editor")
  const authors = sortPosition(researchers, "author")
  const contributors = sortPosition(researchers, "contributor")

  return (
    <div className="py-4">

      <PageTitle locale={params.locale} />

      <pre>{JSON.stringify(response?.data?.sort((a, b) => a.sort_weight - b.sort_weight), null, 2)}</pre>

      {response?.recordsTotal > RESEARCHERS_PER_PAGE && (
        <Pagination
          path={`team?page=`}
          currentPage={currentPage}
          total={response?.total_page}
        />)
      }

      {editors && editors?.length !== 0 && <EditorsTranslate />}

      <Blocks data={editors} />

      {authors && authors?.length !== 0 && <AuthorsTranslate />}

      <Blocks data={authors} />

      {contributors && contributors?.length !== 0 && <ContributorsTranslate />}

      <Blocks data={contributors} />

      <div className="[&>p]:mb-3 [&>ul]:mb-3 [&>ul]:list-disc [&>ul]:ml-4 p-4 bg-slate-50 dark:bg-slate-600 rounded-md mt-8"
        dangerouslySetInnerHTML={{ __html: teamAppreciation?.meta_data_localized?.text }}
      />

    </div>

  )
}

export default Team