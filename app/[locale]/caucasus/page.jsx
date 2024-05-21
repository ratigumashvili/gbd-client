import { useTranslations } from 'next-intl'
import { caucasus } from '../_lib/data'

function Caucasus() {

  const t = useTranslations("Caucasus")

  return (
    <div className="py-4">
      <h2 className="text-2xl font-medium mb-4">{t("pageTitle")}</h2>
      <div className="text-content font-firaGo"
        dangerouslySetInnerHTML={{ __html: caucasus.data }}
      />
    </div>
  )
}

export default Caucasus