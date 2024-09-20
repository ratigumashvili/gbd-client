import { useTranslations } from "next-intl"
import { getData } from "../_lib/apiCalls"

const PageTitle = () => {
  const t = useTranslations("About")
  return <h2 className="text-2xl font-medium mb-4">{t("pageTitle")}</h2>
}

async function About({params}) {

const {data} = await getData('static-page/about', params.locale)

  return (
    <div className="py-4">
      <PageTitle />
      <div className="[&>p]:mb-3 font-firaGo"
        dangerouslySetInnerHTML={{ __html: data?.meta_data_localized?.text }}
      />
    </div>
  )
}

export default About