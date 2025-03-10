import { useTranslations } from 'next-intl';

import HomePageAbout from "@/src/app/[locale]/_components/HomePageAbout"
import PopularMenuByClass from "@/src/app/[locale]/_components/home-page-popula-classes/"
import BrowseByTaxonomy from "@/src/app/[locale]/_components/browseTaxonomy/BrowseByTaxonomy"
import AdvancedSearch from '@/src/app/[locale]/_components/search-form/AdvancedSearch';
import ChartWithSlider from '@/src/app/[locale]/_components/charts-slider/ChartWithSlider';
import Calendar from "@/src/app/[locale]/_components/activity_heatmap"

import { detectLocale } from "@/src/app/[locale]/_lib/helpers"

export default function Home({ params }) {

  const t = useTranslations('Index');

  return (
    <div className="py-4">
      <div className="flex items-start gap-2">
        <h1 className={`main-title ${detectLocale(params.locale)}`}>{t('title')}</h1>
        <sup className="text-xs">Vers. 2.0</sup>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-y-4 sm:gap-y-4 mb-4">
        <HomePageAbout locale={params.locale} />
        <PopularMenuByClass />
      </div>
      <div className="flex flex-col gap-y-5">
        <BrowseByTaxonomy title={t("BrowseByTaxonomy")} locale={params.locale} />
        <AdvancedSearch />
        <ChartWithSlider locale={params.locale} />
        <Calendar />
      </div>
    </div>
  )
}
