

import {imageGalleryData} from "../_lib/data"

import ImageGallery from '../_components/ImageGallery'
import { useTranslations } from "next-intl"
import { detectLocale } from "../_lib/helpers"

const PageTitle = ({locale}) => {
  const t = useTranslations("Gallery")
  return <h2 className={`text-2xl font-medium mb-4 ${detectLocale(locale)}`}>{t("pageTitle")}</h2>
}


function Gallery({params}) {


  return (
    <div className='py-4'>
      <PageTitle locale={params.locale} />
      <ImageGallery photos={imageGalleryData} />
    </div>
  )
}

export default Gallery