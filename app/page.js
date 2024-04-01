import BrowseByGeography from "./_components/BrowseByGeography"
import BrowseByTaxonomy from "./_components/BrowseByTaxonomy"
import HomePageAbout from "./_components/HomePageAbout"
import HomePageSlider from "./_components/HomePageSlider"
import PopularMenu from "./_components/PopularMenu"
import Calendar from "./_components/activity_heatmap"

export default function Home() {
  return (
    <div className="py-4">
      <h2 className="text-2xl font-medium mb-4">Welcome to GBD</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <HomePageAbout />
        <PopularMenu />
      </div>
      <BrowseByTaxonomy title="Browse by taxonomy" />
      <BrowseByGeography />
      <HomePageSlider />
      <Calendar />
    </div>
  )
}
