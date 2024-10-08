import { useTranslations } from "next-intl"
import { getData } from "../_lib/apiCalls"
import { detectLocale } from "../_lib/helpers"

const PageTitle = ({locale}) => {
  const t = useTranslations("About")
  return <h2 className={`text-2xl font-medium mb-4 ${detectLocale(locale)}`}>{t("pageTitle")}</h2>
}

async function About({params}) {

const {data} = await getData('static-page/about', params.locale)

  return (
    <div className="py-4">
      <PageTitle locale={params.locale} />
      <div className="[&>p]:mb-3 font-firaGo"
        dangerouslySetInnerHTML={{ __html: data?.meta_data_localized?.text }}
      />
    </div>
  )
}

export default About