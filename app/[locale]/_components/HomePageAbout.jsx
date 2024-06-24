import Link from "next/link"

import {useTranslations} from 'next-intl';

import { about } from "@/app/[locale]/_lib/data"

import { detectLocale } from "../_lib/helpers";

const HomePageAbout = ({locale}) => {
  const t = useTranslations('Index');
  const c = useTranslations('Common')
  return (
    <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-md col-span-2">
      <h2 className={`text-2xl font-medium mb-4 ${detectLocale(locale)}`}>{t('about_title')}</h2>
      <div
        dangerouslySetInnerHTML={{ __html: about.data.excerpt }}
        className="[&>p]:mb-3 font-firaGo"
      />
      <Link href={'/about'} className="button my-4">{c('readMore')}</Link>
    </div>
  )
}

export default HomePageAbout