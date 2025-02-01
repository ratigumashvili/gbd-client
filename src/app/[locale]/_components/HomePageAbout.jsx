
import { Link } from '@/src/i18n/routing';

import {useTranslations} from 'next-intl';

import { getData } from '@/src/app/[locale]/_lib/apiCalls';
import { sanitize } from '@/src/app/[locale]/_lib/helpers';

const ComponentTitle = () => {
  const t = useTranslations('Index');
  return <h2 className="text-xl font-medium mb-4">{t("about_title")}</h2> 
}

const ReadMore = () => {
  const t = useTranslations('Common')
  return <Link href={'/about'} className="button my-4">{t('readMore')}</Link>
}

const HomePageAbout = async ({locale}) => {

  const {data} = await getData('static-page/about', locale)
  
  return (
    <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-md col-span-3 md:mr-4">
      <ComponentTitle />
      <article
        dangerouslySetInnerHTML={{ __html: sanitize(data?.meta_data_localized?.intro)}}
        className="[&>p]:mb-3 font-firaGo line-clamp-[12]"
      />
      <ReadMore />
    </div>
  )
}

export default HomePageAbout