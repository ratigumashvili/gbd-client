"use client"

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { homePageSlider } from '../_lib/data';
import Image from 'next/image';
import ChevronLeft from './icons/ChevronLeft';
import ChevronRight from './icons/ChevronRight';
import Link from 'next/link';

const properties = {
  prevArrow: <button><ChevronLeft /></button>,
  nextArrow: <button><ChevronRight /></button>
}

function HomePageSlider() {
  return (
    <div className='p-4 bg-slate-50 rounded-md'>
      <h2 className='text-2xl font-medium mb-4'>Latest uploads</h2>
      <div className="slide-container">
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
                <p>Taxon: <Link className='text-teal-600 hover:text-teal-700' href={taxonId.toString()}>{taxonTitle}</Link></p>
                {comment && (
                  <p className='text-wrap'>Comment: {comment}</p>
                )}
                <p>Author: <Link className='text-teal-600 hover:text-teal-700' href={authorId.toString()}>{photoAuthor}</Link></p>
                <p>Uploaded by: {uploadedBy}</p>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  )
}

export default HomePageSlider