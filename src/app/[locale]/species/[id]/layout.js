import sanitize from "sanitize-html"
import { getData } from "@/src/app/[locale]/_lib/apiCalls"

export async function generateMetadata({ params }) {

    const { data } = await getData(`taxonomy/${params.id}/?type=Specie`, params.locale)

    return {
        title: data?.seo?.title,
        description: sanitize(data?.seo?.description, {allowedTags: [], allowedAttributes: {}}),
        // keywords: sanitize(data?.seo?.keywords, {allowedTags: [], allowedAttributes: {}}),
        openGraph: {
            images: data?.seo?.og_image
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