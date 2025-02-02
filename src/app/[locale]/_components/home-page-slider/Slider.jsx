"use client"

import { Link } from '@/src/i18n/routing';
import { useTranslations } from 'next-intl';
import { Slide } from 'react-slideshow-image';


import ChevronLeft from '@/src/app/[locale]/_components/icons/ChevronLeft';
import ChevronRight from '@/src/app/[locale]/_components/icons/ChevronRight';

const properties = {
    prevArrow: <button className='ml-2 md:ml-4'><ChevronLeft /></button>,
    nextArrow: <button className='mr-2 md:mr-4'><ChevronRight /></button>
}


function Slider({ data }) {
    const t = useTranslations("Index")

    if (!data) {
        return
    }

    return (
        <>
            <div className="slide-container font-firaGo">
                <Slide {...properties}>
                    {data && data.length !== 0 && data?.map((item) => (
                        <div key={item.id} className='px-8 sm:px-14 lg:px-20 py-8 border bg-white rounded-md max-h-[300px] h-full flex flex-col justify-between'>
                            <div>
                                <h2 className='font-medium text-xl mb-4'>{item.title}</h2>
                                <div className='flex flex-col gap-y-2 text-base'>

                                    {item?.metadata?.scientific_name_id && (
                                        <p className='line-clamp-1'><span className='font-medium pr-1'>{t("scientific_name_id")}:</span>{item?.metadata?.scientific_name_id}</p>
                                    )}

                                    {item?.metadata?.scientific_name && (
                                        <p className='line-clamp-1'><span className='font-medium pr-1'>{t("scientific_name")}:</span>{item?.metadata?.scientific_name}</p>
                                    )}

                                    {item?.metadata?.according_title && (
                                        <p className='line-clamp-1'><span className='font-medium pr-1'>{t("according_title")}:</span>{item?.metadata?.according_title}</p>
                                    )}

                                    {item.metadata.origin && (
                                        <p className='line-clamp-1'><span className='font-medium pr-1'>{t("origin")}:</span>{item.metadata.origin === "native" ? t("native") : t("introduced")}</p>
                                    )}
                                </div>
                            </div>
                            <Link href={`/species/${item.id}`} className='button w-max mt-4'>{t("read_more")}</Link>
                        </div>
                    ))}
                </Slide>
            </div>
        </>
    )
}

export default Slider