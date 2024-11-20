import { getData } from "@/app/[locale]/_lib/apiCalls"

export async function generateMetadata({ params }) {

    const { data } = await getData(`taxonomy/${params.id}/?type=Specie`, params.locale)
    const filteredSeoData = data?.seo?.translations?.filter((item) => item.locale === params.locale)

    return {
        title: filteredSeoData[0]?.title,
        description: filteredSeoData[0]?.description,
        keywords: filteredSeoData[0]?.keywords,
        openGraph: {
            images: ''
        }
    }
}

function SpeciesLayout({ children }) {
    return (
        <>
            {children}
        </>
    )
}

export default SpeciesLayout