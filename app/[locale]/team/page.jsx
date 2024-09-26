import Link from "next/link"
import Image from "next/image"

import { Link as InternalLink } from "@/navigation"

import { useTranslations } from "next-intl"
import { AuthorsTranslate, ContributorsTranslate, EditorsTranslate } from "./Translations"

import { getData, getPaginatedData } from "../_lib/apiCalls"
import { detectLocale, sortPosition } from "../_lib/helpers"

import Pagination from "../_components/Pagination"

const Blocks = ({ data = [] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {data.length !== 0 && data?.map((item) => (
        <article key={item.id} className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="shrink-0">
            <Image
              src={`${item.image_url}`}
              width={150}
              height={150}
              alt={item.title}
              className="object-cover overflow-hidden self-start w-full sm:w-32 sm:h-32 mt-2"
            />
          </div>
          <div>
            <h2 className="font-medium text-xl mb-1">
              <InternalLink href={`/team/${item.id}`}>{item.title}</InternalLink>
            </h2>
            <Link href={item.researchgate} target="blank" className="block mb-3 text-teal-600 transition hover:text-teal-600/75">ResearchGate</Link>
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
  
  const response = await getPaginatedData('researcher', params.locale, currentPage, 4)

  const { data: researchers } = await getData('researcher', params.locale)
  const { data: teamAppreciation } = await getData('static-page/researcher', params.locale)

  const editors = sortPosition(researchers, "editor")
  const authors = sortPosition(researchers, "author")
  const contributors = sortPosition(researchers, "contributor")

  return (
    <div className="py-4">

      <PageTitle locale={params.locale} />

      <pre>{JSON.stringify(response, null, 2)}</pre>

      {response?.recordsTotal > 4 && (
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