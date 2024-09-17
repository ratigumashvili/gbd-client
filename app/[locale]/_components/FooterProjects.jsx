import Link from "next/link"

import { getData } from "../_lib/apiCalls"

const apiUrl = process.env.NEXT_PUBLIC_API_URL

async function FooterProjects({locale}) {

  const { data } = await getData('project', locale)

  return (
    <ul className="mt-8 space-y-4 text-sm">
      {data?.map((item) => (
        <li key={item.id} className="font-firaGo">
          <Link
            className="text-gray-700 transition hover:text-gray-700/75 dark:text-slate-400 dark:hover:text-slate-300"
            href={item.url}
            target="blank"
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default FooterProjects