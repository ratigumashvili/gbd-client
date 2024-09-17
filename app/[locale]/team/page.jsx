import Link from "next/link"
import { team, teamAppreciation } from "../_lib/data"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { getStaticData } from "../_lib/helpers"
import { AuthorsTranslate, ContributorsTranslate, EditorsTranslate } from "./Translations"

const Blocks = ({ data = [] }) => {

  const t = useTranslations("Team")

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 font-firaGo">
      {data.length && data.map(({ id, title, researchGate, text, photo }) => (
        <div key={id} className="flex flex-col md:flex-row gap-4 mb-6">
          {photo ? (
            <Image src={photo} width={150} height={150} className="w-full md:w-[150px] h-[350px] md:h-[150px] object-cover shrink-0" alt={title} />
          ) : (
            <Image src='/iliauni-logo_eng.png' width={150} height={150} className="w-full md:w-[150px] h-[350px] md:h-[150px] object-cover shrink-0 dark:brightness-0 dark:invert-[1]" alt="Logo" />
          )}
          <div>
            <h4 className="mb-3">{title}</h4>
            {researchGate && (<Link href={researchGate} target="blank" className="link inline-block mb-3">{t('profile')}</Link>)}
            {/* <div
              dangerouslySetInnerHTML={{ __html: text }}
              className="[&>p]:mb-3 text-sm"
            /> */}
          </div>
        </div>
      ))}
    </div>
  )
}

const Team = async () => {

  // const t = useTranslations("Team")
  const researchers = await getStaticData('researcher', 1, 10)

  return (
    <div className="py-4">
      <EditorsTranslate />

      <Blocks data={researchers.data} />
      
      <AuthorsTranslate />

      <ContributorsTranslate />

      {/* <h3 className="font-medium mb-4">{t("editors")}</h3> */}

      {/* <Blocks data={researchers.data} /> */}

      {/* <h3 className="font-medium mb-4">{t("authors")}</h3> */}

      {/* <Blocks data={team.data.authors} /> */}

      {/* <h3 className="font-medium mb-4">{t("contributors")}</h3> */}

      {/* <Blocks data={team.data.contributors} /> */}

      {/* <h3 className="font-medium mb-4">{t("thanks")}</h3> */}

      <div className="[&>p]:mb-3 [&>ul]:mb-3 [&>ul]:list-disc [&>ul]:ml-4 p-4 bg-slate-50 dark:bg-slate-600 rounded-md"
        dangerouslySetInnerHTML={{ __html: teamAppreciation }}
      />

    </div>

  )
}

export default Team