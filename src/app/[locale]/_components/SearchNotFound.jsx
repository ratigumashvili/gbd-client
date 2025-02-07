import { useTranslations } from "next-intl"
import Alert from "@/src/app/[locale]/_components/icons/Alert"


function SearchNotFound() {
    const t = useTranslations("Search")
  return (
    <div className="w-full flex items-center justify-center border p-4 my-4 rounded-md">
        <h2 className="flex items-center gap-3 text-lg font-medium">
            <Alert width="70" height="70" /> {t("nothing_found")}
        </h2>
    </div>
  )
}

export default SearchNotFound