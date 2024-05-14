import Link from "next/link"

import { about } from "@/app/_lib/data"

const HomePageAbout = () => {
  return (
    <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-md col-span-2">
      <h2 className="text-2xl font-medium mb-4">About the database</h2>
      <div
        dangerouslySetInnerHTML={{ __html: about.data.excerpt }}
        className="[&>p]:mb-3"
      />
      <Link href={'/about'} className="button my-4">Read more</Link>
    </div>
  )
}

export default HomePageAbout