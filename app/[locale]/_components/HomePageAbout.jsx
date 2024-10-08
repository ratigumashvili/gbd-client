
import { Link } from '@/navigation';

import {useTranslations} from 'next-intl';

import { detectLocale } from "../_lib/helpers";
import { getData } from '../_lib/apiCalls';

const PageTitle = ({locale}) => {
  const t = useTranslations('Index');
  return <h2 className={`text-2xl font-medium mb-4 ${detectLocale(locale)}`}>{t('about_title')}</h2> 
}

const ReadMore = () => {
  const t = useTranslations('Common')
  return <Link href={'/about'} className="button my-4">{t('readMore')}</Link>
}

const HomePageAbout = async ({locale}) => {

  const {data} = await getData('static-page/about', locale)
  
  return (
    <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-md col-span-2">
      <PageTitle locale={locale} />
      <div
        dangerouslySetInnerHTML={{ __html: data?.meta_data_localized?.intro }}
        className="[&>p]:mb-3 font-firaGo"
      />
      <ReadMore />
    </div>
  )
}

export default HomePageAbout