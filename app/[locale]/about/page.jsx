import { useTranslations } from "next-intl"
import { about } from "../_lib/data"

function About() {

const t = useTranslations("About")

  return (
    <div className="py-4">
      <h2 className="text-2xl font-medium mb-4">{t("pageTitle")}</h2>
      <div className="[&>p]:mb-3 font-firaGo"
        dangerouslySetInnerHTML={{ __html: about.data.text }}
      />
    </div>
  )
}

export default About