import { useTranslations } from "next-intl"

import { getRecentSpecies, getPaginatedData } from "@/src/app/[locale]/_lib/apiCalls"
import { iucnCategory } from "@/src/app/[locale]/_lib/data"

import HomePageChart from "./HomePageChart"
import HomePageSlider from "./HomePageSlider"

const SliderTitle = () => {
  const t = useTranslations("Index")
  return <h2 className='text-xl font-medium mb-4'>{t("latestUploads")}</h2>
}

const ChartTitle = () => {
  const t = useTranslations("Index")
  return <h2 className='text-xl font-medium mb-4 line-clamp-1'>{t("regionalIucnDist")}</h2>
}

async function ChartWithSlider({ locale }) {

  const { data } = await getRecentSpecies(locale, 10)

  const formattedCategory = iucnCategory.map((item) => item.value)

  const results = await Promise.all(
    formattedCategory.map(status =>
      getPaginatedData(`taxonomy/search?search_in=specie&iucn_status=${status}`, locale, 1, 1)
    )
  );

  const formattedResults = formattedCategory.map((status, index) => ({
    status,
    value: results[index].recordsTotal
  }));

  return (
    <section className="grid grid-cols-6 gap-4">
      <div className="col-span-6 md:col-span-3 bg-slate-50 dark:bg-slate-600 rounded-md p-4">
        <SliderTitle />
        <HomePageSlider data={data} />
      </div>
      <div className="col-span-6 md:col-span-3 bg-slate-50 dark:bg-slate-600 rounded-md p-4">
        <ChartTitle />
        <HomePageChart data={formattedResults} />
      </div>
    </section>
  )
}

export default ChartWithSlider