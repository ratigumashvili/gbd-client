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
                        <div key={item.id} className='px-12 sm:px-14 lg:px-20 py-8 border bg-white rounded-md min-h-[332px] h-full flex flex-col justify-between'>
                            <div>
                                <h2 className='font-medium text-xl mb-4'>{item.title}</h2>
                                <div className='flex flex-col gap-y-2'>

                                    {item?.metadata?.scientific_name_id && (
                                        <>
                                            <p className="font-medium">{t("scientific_name_id")}:</p>
                                            <p>{item?.metadata?.scientific_name_id}</p>
                                        </>
                                    )}

                                    {item?.metadata?.scientific_name && (
                                        <>
                                            <p className="font-medium">{t("scientific_name")}:</p>
                                            <p>{item?.metadata?.scientific_name}</p>
                                        </>
                                    )}

                                    {item?.metadata?.according_title && (
                                        <>
                                            <p className="font-medium">{t("according_title")}:</p>
                                            <p>{item?.metadata?.according_title}</p>
                                        </>
                                    )}

                                    {item.metadata.origin && (
                                        <>
                                            <p className="font-medium">{t("origin")}</p>
                                            <p>{item.metadata.origin === "native" ? t("native") : t("introduced")}</p>
                                        </>
                                    )}

                                    <p className="font-medium">{t("editor")}:</p>
                                    <p>name, surname</p>
                                    <p className="font-medium">{t("contributor")}:</p>
                                    <p>name, surname</p>
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