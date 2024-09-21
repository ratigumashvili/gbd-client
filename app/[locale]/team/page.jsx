import Link from "next/link"
import Image from "next/image"

import { AuthorsTranslate, ContributorsTranslate, EditorsTranslate } from "./Translations"

import { getData } from "../_lib/apiCalls"
import { detectLocale, sortPosition } from "../_lib/helpers"
import { useTranslations } from "next-intl"

const Blocks = ({ data = [] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {data.length !== 0 && data?.map((item) => (
        <div key={item.id} className="flex flex-col sm:flex-row gap-4 mb-6">
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
            <h2 className="font-medium text-xl mb-1">{item.title}</h2>
            <Link href={item.researchgate} target="blank" className="block mb-3 text-teal-600 transition hover:text-teal-600/75">ResearchGate</Link>
            <div
              dangerouslySetInnerHTML={{ __html: item.biography }}
              className="[&>p]:mb-3 font-firaGo text-sm"
            />
          </div>
        </div>))}
    </div>
  )
}

const PageTitle = ({ locale }) => {
  const t = useTranslations("Team")
  return <h2 className={`text-2xl font-medium mb-4 ${detectLocale(locale)}`}>{t("pageTitle")}</h2>
}

const Team = async ({ params }) => {

  const { data: researchers } = await getData('researcher', params.locale)
  const { data: teamAppreciation } = await getData('static-page/researcher', params.locale)

  const editors = sortPosition(researchers, "editor")
  const authors = sortPosition(researchers, "author")
  const contributors = sortPosition(researchers, "contributor")

  return (
    <div className="py-4">

      <PageTitle locale={params.locale} />

      {editors && editors?.length !== 0 && <EditorsTranslate />}

      <Blocks data={editors?.sort((a, b) => a.sort_weight - b.sort_weight)} />

      {authors && authors?.length !== 0 && <AuthorsTranslate />}

      <Blocks data={authors?.sort((a, b) => a.sort_weight - b.sort_weight)} />

      {contributors && contributors?.length !== 0 && <ContributorsTranslate />}

      <Blocks data={contributors?.sort((a, b) => a.sort_weight - b.sort_weight)} />

      <div className="[&>p]:mb-3 [&>ul]:mb-3 [&>ul]:list-disc [&>ul]:ml-4 p-4 bg-slate-50 dark:bg-slate-600 rounded-md mt-8"
        dangerouslySetInnerHTML={{ __html: teamAppreciation?.meta_data_localized?.text }}
      />

    </div>

  )
}

export default Team