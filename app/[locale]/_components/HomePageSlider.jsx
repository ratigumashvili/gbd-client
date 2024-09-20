"use client"

import Image from 'next/image';
import { Link } from '@/navigation';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import { homePageSlider } from '../_lib/data';

import ChevronLeft from './icons/ChevronLeft';
import ChevronRight from './icons/ChevronRight';

import { useTranslations } from 'next-intl';

const properties = {
  prevArrow: <button><ChevronLeft /></button>,
  nextArrow: <button><ChevronRight /></button>
}

function HomePageSlider() {

  const t = useTranslations("Index")

  return (
    <div className='p-4 bg-slate-50 dark:bg-slate-600 rounded-md'>
      <h2 className='text-2xl font-medium mb-4'>{t("latestUploads")}</h2>
      <div className="slide-container font-firaGo">
        <Slide {...properties}>
          {homePageSlider.map(({ id, recordTitle, taxonId, taxonTitle, comment, photoAuthor, authorId, uploadedBy, imageUrl }) => (
            <div key={id} className='flex gap-4 flex-col md:flex-row'>
              <Image
                src={imageUrl}
                width={100}
                height={100}
                className='w-full h-[300px] overflow-hidden lg:w-[200px] lg:h-[200px] object-cover rounded-sm shrink-0'
                alt={recordTitle} />
              <div>
                <h2 className='text-xl font-medium mb-2'>
                  {recordTitle}
                </h2>
                <p>{t("taxon")}: <Link className='text-teal-600 hover:text-teal-700' href={`/${taxonId.toString()}`}>{taxonTitle}</Link></p>
                {comment && (
                  <p className='text-wrap'>{t("comment")}: {comment}</p>
                )}
                <p>{t("author")}: <Link className='text-teal-600 hover:text-teal-700' href={`/${authorId.toString()}`}>{photoAuthor}</Link></p>
                <p>{t("uploadedBy")}: {uploadedBy}</p>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  )
}

export default HomePageSlider