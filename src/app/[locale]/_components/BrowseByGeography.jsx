import { useTranslations } from "next-intl"
import Map from "./homepageMap"

function BrowseByGeography() {

  const t = useTranslations("Index")
  
  return (
    <div className="p-4 mb-4 ">
        <h2 className="text-2xl font-medium mb-4">{t("BrowseByGeography")}</h2>
        <Map />
    </div>
  )
}

export default BrowseByGeography