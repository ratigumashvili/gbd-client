import React from 'react'
import { popularMenu } from '../_lib/data'
import Link from 'next/link'

function PopularMenu() {
  return (
    <div className='p-4 bg-slate-50 rounded-md col-span-1'>
      <h2 className="text-2xl font-medium mb-4">
        Popular entries
      </h2>
      <ul>
        {popularMenu.map((menuitem) => (
          <li key={menuitem.id}>
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