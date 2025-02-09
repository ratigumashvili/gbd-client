"use client"

import { Link } from '@/src/i18n/routing'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'

import useIsMounted from "@/src/app/[locale]/_hooks/useIsMounted"

function PopularMenuByClass({ data }) {
  
  const locale = useLocale()
  const t = useTranslations('Index');

  const { isMounted } = useIsMounted()

  if (!isMounted) {
    return null
  }

  return (
    <section className=' dark:bg-slate-700 rounded-md col-span-2 bg-slate-50 overflow-hidden'>
      <h2 className="text-xl font-medium mb-4 p-4 h-10">{t("popularEntries")}</h2>
      <div className='grid grid-rows-4 h-[calc(100%-56px)] '>
        {data?.map((item) => (
          <Link
            href={`/class/${item.slug}?id=${item.id}`}
            key={item.id}
            className='col-span-1 border-b last:border-b-0'
          >
            <div className='flex h-full items-center justify-between px-4 py-3 hover:cursor-pointer hover:bg-teal-600 hover:text-white transition group'>
              <div>

                {/* <h2 className={`text-xl sm:text-xl lg:text-xl font-bold line-clamp-1 ${detectLocale(locale)}`}>
                  {locale === "ka" && item.georgian_name
                    ? item.georgian_name
                    : locale === "en" && item.english_name
                      ? item.english_name
                      : item.title}
                </h2> */}

                 <h2 className={`text-lg sm:text-xl lg:text-xl font-bold line-clamp-1 font-arial uppercase`}>
                  {item.title}
                </h2>
                
                {locale === "ka" && <p className='text-sm'>რეგისტრირებული სახეობის</p>}
                <p className='text-3xl font-medium flex items-end gap-2'>
                  <span className='text-teal-700 group-hover:text-white'>{item.percentage}%</span>
                </p>
                {locale === "en" && <p className='text-sm'>Of registered species</p>}
                <p className='text-xs'><span className='font-medium'>{t("views")}</span>: {item.views}</p>
              </div>
              <div className='min-w-20 min-h-20 flex items-center justify-center ml-4'>
                <Image
                  src={item.icon ? item.icon : '/icons/uncertain.png'}
                  width={70}
                  height={70}
                  alt={item.title}
                  className='opacity-60 group-hover:opacity-80 w-14 h-14 md:w-[50px] md:h-[50px] lg:w-10 lg:h-10'
                />
              </div>
            </div>
          </Link>
        ))}
      </div>

    </section>
  )
}

export default PopularMenuByClass