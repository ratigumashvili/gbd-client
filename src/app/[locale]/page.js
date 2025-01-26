import HomePageAbout from "./_components/HomePageAbout"
import PopularMenu from "./_components/PopularMenu"
import BrowseByTaxonomy from "./_components/browseTaxonomy/BrowseByTaxonomy"
import HomePageSearch from "./_components/HomePageSearch"
import HomePageSlider from "./_components/HomePageSlider"
import Calendar from "./_components/activity_heatmap"

import {useTranslations} from 'next-intl';
import {detectLocale} from "@/src/app/[locale]/_lib/helpers"

export default function Home({params}) {

  const t = useTranslations('Index');

  return (
    <div className="py-4">
      <h1 className={`main-title ${detectLocale(params.locale)}`}>{t('title')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <HomePageAbout locale={params.locale} />
        <PopularMenu locale={params.locale} />
      </div>
      <BrowseByTaxonomy title={t("BrowseByTaxonomy")} locale={params.locale} />
      <HomePageSearch />
      <HomePageSlider />
      <Calendar />
    </div>
  )
}
