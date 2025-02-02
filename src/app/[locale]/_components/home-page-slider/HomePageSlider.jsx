import { getRecentSpecies } from "@/src/app/[locale]/_lib/apiCalls"

import Slider from "./Slider"
import FeaturedSpecie from "./FeaturedSpecie"
import ComponentTitle from "./ComponentTitle"

async function HomePageSlider({ locale }) {

  const { data } = await getRecentSpecies(locale, 2)

  const test = data && data.length !== 0 && data.map((item) => (
    item.genus
  ))

  return (
    <>
    
    {/* <pre>
      {JSON.stringify(test, null, 2)}
    </pre> */}
    
    <section className=" p-4 bg-slate-50 dark:bg-slate-600 rounded-md">
      <ComponentTitle />
      <div className="grid grid-cols-6 gap-4 ">
        <div className="col-span-6 md:col-span-3">
          <Slider data={data} />
        </div>
        <div className="col-span-6 md:col-span-3">
          <FeaturedSpecie />
        </div>
      </div>
    </section>
    </>
  )
}

export default HomePageSlider