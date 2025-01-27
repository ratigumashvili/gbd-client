import { Link } from '@/src/i18n/routing'
import { useTranslations } from 'next-intl'

import { popularMenu } from '../_lib/data'

const ComponentTitle = () => {
  const t = useTranslations('Index');
  return <h2 className="text-xl font-medium mb-4">{t("popularEntries")}</h2> 
}

async function PopularMenu() {
  return (
    <div className='p-4 bg-slate-50 dark:bg-slate-700 rounded-md col-span-1'>
      <ComponentTitle />
      <ul>
        {popularMenu.map((menuitem) => (
          <li key={menuitem.id} className='font-firaGo'>
            <div>
              <Link href={menuitem.path}>
                {menuitem.title}
              </Link>
              {menuitem.children.length !== 0 && (
                <ul>
                  {menuitem.children.map((child) => (
                    <li key={child.id} className='pl-4'>
                      <Link href={child.path} className='text-teal-600 hover:text-teal-700'>{child.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PopularMenu