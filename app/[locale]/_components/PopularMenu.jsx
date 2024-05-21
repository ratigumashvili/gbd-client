import React from 'react'
import { popularMenu } from '../_lib/data'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

function PopularMenu() {
  const t = useTranslations("Index")
  return (
    <div className='p-4 bg-slate-50 dark:bg-slate-700 rounded-md col-span-1'>
      <h2 className="text-2xl font-medium mb-4">
        {t("popularEntries")}
      </h2>
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