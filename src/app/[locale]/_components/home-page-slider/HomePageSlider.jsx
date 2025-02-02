import { getRecentSpecies } from "@/src/app/[locale]/_lib/apiCalls"

import Slider from "./Slider"

async function HomePageSlider({ locale }) {

  const { data } = await getRecentSpecies(locale, 10)

  return (
    <section className="grid grid-cols-6 p-4 bg-slate-50 dark:bg-slate-600 rounded-md">
      <div className="col-span-6 md:col-span-3">
      <Slider data={data} />
      </div>
    </section>
  )
}

export default HomePageSlider