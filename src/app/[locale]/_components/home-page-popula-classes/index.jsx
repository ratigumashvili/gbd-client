import { getPopularClasses } from '@/src/app/[locale]/_lib/apiCalls'

import PopularMenuByClass from './PopularMenuByClass'

export const revalidate = 0;

async function index({ locale }) {

    const response = await getPopularClasses(locale, 3)

    const formattedClasses = response && response.length !== 0 && response?.data?.map((item) => ({
        id: item?.id,
        title: item?.title,
        slug: item?.metadata.slug,
        georgian_name: item?.metadata?.georgian_name_title,
        english_name: item?.metadata?.english_name,
        views: item?.metadata?.views_count,
        icon: item?.icon_url,
        percentage: item?.species_percentage
    }))


    return (
        <>
            <PopularMenuByClass locale={locale} data={formattedClasses} />
        </>
    )
}

export default index