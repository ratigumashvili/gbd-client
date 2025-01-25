
import { Link } from '@/src/i18n/routing'

import { useTranslations } from 'next-intl'

import { detectLocale } from "@/src/app/[locale]/_lib/helpers"
import { getData } from "@/src/app/[locale]/_lib/apiCalls"


const Blocks = ({ id, title, slug }) => {

    const t = useTranslations("Index")

    return (
        <Link href={`/kingdom/${slug}?id=${id}`}
            className='text-center flex-1 p-8 rounded-md border border-teal-600 bg-teal-600 text-white hover:bg-white hover:text-gray-900 transition-all ease-in'
        >
            <h4 className='font-medium text-xl mb-2'>{title}</h4>
            <span className='font-firaGo'>{t("registeredRecords")}</span>
        </Link>
    )
}

async function BrowseByTaxonomy({ locale, title }) {

    const { data } = await getData('taxonomy?type=Kingdom', locale)

    const filteredData = data && data.length > 0 && data.filter((item) => item.status === "active")

    return (
        <div className="p-4 mb-4">
            <h2 className={`text-2xl font-medium mb-4 ${detectLocale(locale)}`}>{title}</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {filteredData?.reverse().map((item) => (
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