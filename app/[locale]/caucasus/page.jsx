import { getData } from '../_lib/apiCalls'
import { detectLocale } from '../_lib/helpers'

import { useTranslations } from 'next-intl'

const PageTitle = ({locale}) => {
  const t = useTranslations("Caucasus")
  return (
    <h2 className={`text-2xl font-medium mb-4 ${detectLocale(locale)}`}>{t("pageTitle")}</h2>
  )
}

async function Caucasus({ params }) {

  const { data } = await getData('static-page/caucasian', params.locale)

  return (
    <div className="py-4">
      <PageTitle locale={params.locale} />
      <div className="text-content font-firaGo"
        dangerouslySetInnerHTML={{ __html: data?.meta_data_localized?.text }}
      />
    </div>
  )
}

export default Caucasus