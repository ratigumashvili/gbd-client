import { getRecentSpecies } from "@/src/app/[locale]/_lib/apiCalls"

import Slider from "./Slider"
import FeaturedSpecie from "./FeaturedSpecie"

async function HomePageSlider({ locale }) {

  const { data } = await getRecentSpecies(locale, 10)

  const genusArray = data && data.length !== 0 && data.map((item) => (
    item.genus
  ))

  const nameCounts = genusArray && genusArray?.length !== 0 && genusArray.reduce((acc, item) => {
    acc[item.name] = (acc[item.name] || 0) + 1;
    return acc;
  }, {});

  const result = nameCounts && Object?.entries(nameCounts).map(([name, count]) => ({
    name,
    count
  }));


  return (
    <>

      {/* <pre>
      {JSON.stringify(data, null, 2)}
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


        <div className="col-span-6 md:col-span-3 bg-slate-50 dark:bg-slate-600 rounded-md p-4">
          
          <Slider data={data} />
        </div>
        <div className="col-span-6 md:col-span-3 border rounded-md p-4">
          {/* <h2 className='text-xl font-medium mb-4'>{translations.specieOfTheDay}</h2> */}
          <FeaturedSpecie />
        </div>

      </section>
    </>
  )
}

export default HomePageSlider