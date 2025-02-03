import { getPopularSpecies } from '@/src/app/[locale]/_lib/apiCalls'
import PopularMenuByClass from './PopularMenuByClass'


export const revalidate = 0;

async function index({ locale }) {

    const response = await getPopularSpecies(locale, 4)

    const formattedSpecies = response && response.length !== 0 && response?.data?.map((item) => ({
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
        {/* <pre>{JSON.stringify(response, null, 2)}</pre> */}
            <PopularMenuByClass locale={locale} data={formattedSpecies} />
        </>
    )
}

export default index