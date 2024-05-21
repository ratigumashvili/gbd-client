

import {imageGalleryData} from "../_lib/data"

import ImageGallery from '../_components/ImageGallery'
import { useTranslations } from "next-intl"


function Gallery({params}) {

  const t = useTranslations("Gallery")

  return (
    <div className='py-4'>
      <h2 className="text-2xl font-medium mb-4">{t("pageTitle")}</h2>
      <ImageGallery photos={imageGalleryData} />
    </div>
  )
}

export default Gallery