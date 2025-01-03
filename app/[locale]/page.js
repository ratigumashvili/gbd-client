import BrowseByGeography from "./_components/BrowseByGeography"
import BrowseByTaxonomy from "./_components/BrowseByTaxonomy"
import HomePageAbout from "./_components/HomePageAbout"
import HomePageSlider from "./_components/HomePageSlider"
import PopularMenu from "./_components/PopularMenu"
import Calendar from "./_components/activity_heatmap"

import {useTranslations} from 'next-intl';

export default function Home({params}) {

  const t = useTranslations('Index');

  return (
    <div className="py-4">
      {/* <h2 className="text-2xl font-medium mb-4">{t('title')}</h2> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <HomePageAbout locale={params.locale} />
        <PopularMenu locale={params.locale} />
      </div>
      <BrowseByTaxonomy title={t("BrowseByTaxonomy")} locale={params.locale} />
      <BrowseByGeography />
      <HomePageSlider />
      <Calendar />
    </div>
  )
}
