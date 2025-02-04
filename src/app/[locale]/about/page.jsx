import { useTranslations } from "next-intl"

import {getData} from "@/src/app/[locale]/_lib/apiCalls"
import { detectLocale, sanitize } from "@/src/app/[locale]/_lib/helpers"

const PageTitle = ({locale}) => {
  const t = useTranslations("About")
  return <h2 className={`text-2xl font-medium mb-4 ${detectLocale(locale)}`}>{t("pageTitle")}</h2>
}

async function About({params}) {

const {data} = await getData('static-page/about', params.locale)

  return (
    <section className="py-4">
      <PageTitle locale={params.locale} />
      <div className="[&>p]:mb-3 font-firaGo"
        dangerouslySetInnerHTML={{ __html: sanitize(data?.meta_data_localized?.text) }}
      />
    </section>
  )
}

export default About