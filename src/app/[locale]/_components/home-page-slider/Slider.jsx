"use client"

import { Link } from '@/src/i18n/routing';
import { useTranslations } from 'next-intl';
import { Slide } from 'react-slideshow-image';


import ChevronLeft from '@/src/app/[locale]/_components/icons/ChevronLeft';
import ChevronRight from '@/src/app/[locale]/_components/icons/ChevronRight';

const properties = {
    prevArrow: <button className='ml-2'><ChevronLeft /></button>,
    nextArrow: <button className='mr-2'><ChevronRight /></button>
}


function Slider({ data }) {
    const t = useTranslations("Index")

    if (!data) {
        return
    }

    return (
        <>
            <h2 className='text-xl font-medium mb-4'>{t("latestUploads")}</h2>
            <div className="slide-container font-firaGo">
                <Slide {...properties}>
                    {data && data.length !== 0 && data?.map((item) => (
                        <div key={item.id} className='px-12 sm:px-16 lg:px-20 py-8 border bg-white rounded-md min-h-[332px] h-full flex flex-col justify-between'>
                            <div>
                                <h2 className='font-medium text-xl mb-4'>{item.title}</h2>
                                <dl className='data-list'>

                                    {item?.metadata?.scientific_name_id && (
                                        <>
                                            <dt>{t("scientific_name_id")}:</dt>
                                            <dd>{item?.metadata?.scientific_name_id}</dd>
                                        </>
                                    )}

                                    {item?.metadata?.scientific_name && (
                                        <>
                                            <dt>{t("scientific_name")}:</dt>
                                            <dd>{item?.metadata?.scientific_name}</dd>
                                        </>
                                    )}

                                    {item?.metadata?.according_title && (
                                        <>
                                            <dt>{t("according_title")}:</dt>
                                            <dd>{item?.metadata?.according_title}</dd>
                                        </>
                                    )}

                                    {item.metadata.origin && (
                                        <>
                                            <dt>{t("origin")}</dt>
                                            <dd>{item.metadata.origin === "native" ? t("native") : t("introduced")}</dd>
                                        </>
                                    )}

                                    <dt>{t("editor")}:</dt>
                                    <dd>name, surname</dd>
                                    <dt>{t("contributor")}:</dt>
                                    <dd>name, surname</dd>
                                </dl>
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