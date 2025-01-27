
import { Link } from '@/src/i18n/routing'
import { useTranslations } from 'next-intl'

import { getData } from "@/src/app/[locale]/_lib/apiCalls"

import ComponentTitle from './ComponentTitle'
import { Counter } from './Counter'

const Blocks = ({ id, title, slug }) => {

    const t = useTranslations("Index")

    return (
        <Link href={`/kingdom/${slug}?id=${id}`}
            className='text-center flex-1 p-8 rounded-md border border-teal-600 bg-teal-600 text-white hover:bg-white hover:text-gray-900 transition-all ease-in'
        >
            <h4 className='font-medium text-xl mb-2'>{title}</h4>
            <div className='flex flex-col items-center gap-2'>
                <span className='font-firaGo'>{t("registeredRecords")}</span>
                <Counter total={1234567} />
            </div>
        </Link>
    )
}

async function BrowseByTaxonomy({ locale, title }) {

    const { data } = await getData('taxonomy?type=Kingdom', locale)

    const filteredData = data && data.length > 0 && data.filter((item) => item.status === "active")

    return (
        <div className="py-4 px-0">
            <ComponentTitle title={title} />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {filteredData?.map((item) => (
                    <Blocks
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        slug={item.metadata.slug}
                    />
                ))}
            </div>
        </div>
    )
}

export default BrowseByTaxonomy