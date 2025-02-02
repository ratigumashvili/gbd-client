import { getRecentSpecies } from "@/src/app/[locale]/_lib/apiCalls"

import Slider from "./Slider"
import FeaturedSpecie from "./FeaturedSpecie"
import ComponentTitle from "./ComponentTitle"

async function HomePageSlider({ locale }) {

  const { data } = await getRecentSpecies(locale, 20)

  const genusArray = data && data.length !== 0 && data.map((item) => (
    item.genus
  ))

  const nameCounts = genusArray && genusArray?.length !== 0 && genusArray.reduce((acc, item) => {
    acc[item.name] = (acc[item.name] || 0) + 1;
    return acc;
  }, {});

  const result = Object.entries(nameCounts).map(([name, count]) => ({
    name,
    count
  }));

  return (
    <>
    
    {/* <pre>
      {JSON.stringify(data[0], null, 2)}
    </pre> */}
    
    <section className="grid grid-cols-6 gap-4">
      {/* <div className="grid grid-cols-6 gap-4 ">
        <div className="col-span-6 md:col-span-3">
          <Slider data={data} />
        </div>
        <div className="col-span-6 md:col-span-3">
          <FeaturedSpecie />
        </div>
      </div> */}
      
        <div className="col-span-3 md:col-span-3 bg-slate-50 dark:bg-slate-600 rounded-md p-4">
        <ComponentTitle />
          <Slider data={data} />
        </div>
        <div className="col-span-3 md:col-span-3 bg-slate-50 dark:bg-slate-600 rounded-md p-4">
        {/* <ComponentTitle /> */}
          <FeaturedSpecie />
        </div>
      
    </section>
    </>
  )
}

export default HomePageSlider