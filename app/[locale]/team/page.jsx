import Link from "next/link"
import Image from "next/image"

import { AuthorsTranslate, ContributorsTranslate, EditorsTranslate } from "./Translations"

import { team, teamAppreciation } from "../_lib/data"
import { getData } from "../_lib/apiCalls"
import { sortTeam } from "../_lib/helpers"

const Blocks = ({ data = [] }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {data.length !== 0 && data?.map((item) => (
        <div key={item.id} className="flex gap-4">
          <Image
            src={`${item.image_url}`}
            width={150}
            height={150}
            alt={item.title}
            className="object-cover overflow-hidden self-start flex-nowrap min-w-36 min-h-min-w-36"
          />
          <div>
            <h2 className="font-medium text-xl mb-1">{item.title}</h2>
            <Link href="/" target="blank" className="block mb-3">ResearchGate</Link>
            <div
              dangerouslySetInnerHTML={{ __html: item.biography }}
              className="[&>p]:mb-3 font-firaGo text-base"
            />
          </div>
        </div>))}
    </div>
  )
}

const Team = async ({ params }) => {

  const { data: researchers } = await getData('researcher', params.locale)

  const editors = sortTeam(researchers, "Editor")
  const authors = sortTeam(researchers, "Author")
  const contributors = sortTeam(researchers, "Contributor")

  return (
    <div className="py-4">

      {editors.length !== 0 && <EditorsTranslate />}

      <Blocks data={editors} />

      {authors.length !== 0 && <AuthorsTranslate />}

      <Blocks data={authors} />

      {contributors.length !== 0 && <ContributorsTranslate />}

      <Blocks data={contributors} />

      <div className="[&>p]:mb-3 [&>ul]:mb-3 [&>ul]:list-disc [&>ul]:ml-4 p-4 bg-slate-50 dark:bg-slate-600 rounded-md mt-8"
        dangerouslySetInnerHTML={{ __html: teamAppreciation }}
      />

    </div>

  )
}

export default Team