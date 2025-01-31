"use client"

import { useState, useEffect } from 'react'
import { Link } from '@/src/i18n/routing'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import useIsMounted from "@/src/app/[locale]/_hooks/useIsMounted"
import { detectLocale } from '@/src/app/[locale]/_lib/helpers'

const ComponentTitle = () => {
  const t = useTranslations('Index');
  return <h2 className="text-xl font-medium mb-4 p-4 h-10">{t("popularEntries")}</h2>
}

function PopularMenuByClass({ locale }) {
  // start temporary data
  const dataEng = [
    {
      id: 1,
      title: "Mammals",
      icon: "/icons/mammals.svg",
      url: "http://localhost:3000/ka/class/mammalia?id=14&page=1",
      percentage: 26,
    },
    {
      id: 2,
      title: "Birds",
      icon: "/icons/birds.svg",
      url: "http://localhost:3000/ka/class/aves?id=4&page=1",
      percentage: 12,
    },
    {
      id: 3,
      title: "Insects",
      icon: "/icons/insects.svg",
      url: "http://localhost:3000/ka/class/insecta?id=12&page=1",
      percentage: 36,
    },
    {
      id: 4,
      title: "Reptiles",
      icon: "/icons/reptiles.svg",
      url: "http://localhost:3000/ka/class/reptilia?id=17",
      percentage: 26,
    }
  ]
  const dataGeo = [
    {
      id: 1,
      title: "ძუძუმწოვრები",
      icon: "/icons/mammals.svg",
      url: "http://localhost:3000/ka/class/mammalia?id=14&page=1",
      percentage: 26,
    },
    {
      id: 2,
      title: "ფრინველები",
      icon: "/icons/birds.svg",
      url: "http://localhost:3000/ka/class/aves?id=4&page=1",
      percentage: 12,
    },
    {
      id: 3,
      title: "მწერები",
      icon: "/icons/insects.svg",
      url: "http://localhost:3000/ka/class/insecta?id=12&page=1",
      percentage: 36,
    },
    {
      id: 4,
      title: "ქვეწარმავლები, რეპტილიები",
      icon: "/icons/reptiles.svg",
      url: "http://localhost:3000/ka/class/reptilia?id=17",
      percentage: 26,
    }
  ]
  // end temporary data

  const [data, setData] = useState([])
  const { isMounted } = useIsMounted()

  useEffect(() => {
    locale === "ka" ? setData(dataGeo) : setData(dataEng)
  }, [locale])

  if (!isMounted) {
    return
  }

  return (
    <section className=' dark:bg-slate-700 rounded-md col-span-2 bg-slate-50 overflow-hidden'>
      <ComponentTitle />
      <div className='grid grid-rows-4 h-[calc(100%-56px)] '>
        {data?.map((item) => (
          <Link href={item.url}
            key={item.id}
            className='col-span-1 border-b last:border-b-0'
          >
            <div className='flex h-full items-center justify-between px-4 py-3 hover:cursor-pointer hover:bg-teal-600 hover:text-white transition group'>
              <div>
                <h2 className={`text-xl sm:text-xl lg:text-xl font-bold line-clamp-1 ${detectLocale(locale)}`}>{item.title}</h2>
                <p className='text-3xl font-medium flex items-end gap-2'>
                  <span className='text-teal-700 group-hover:text-white'>{item.percentage}%</span>
                </p>
                <p className='text-sm'>
                  {locale === "ka" ? "რეგისტრირებული სახეობა" : "Of registered species"}
                </p>
              </div>
              <div className='min-w-20 min-h-20 flex items-center justify-center ml-4'>
                <Image
                  src={item.icon}
                  width={70}
                  height={70}
                  alt={item.title}
                  className='opacity-60 group-hover:opacity-80 w-16 h-16 md:w-[50px] md:h-[50px] lg:w-16 lg:h-16'
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