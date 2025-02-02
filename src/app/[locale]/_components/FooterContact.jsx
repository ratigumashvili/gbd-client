import { getData } from "@/src/app/[locale]/_lib/apiCalls"
import { sanitize } from "@/src/app/[locale]/_lib/helpers"

async function FooterContact({ locale }) {

    const { data } = await getData('static-page/contact', locale)
    return (
        <>
        <div className="mt-8 space-y-4 text-sm text-gray-700 dark:text-slate-400" dangerouslySetInnerHTML={{ __html: sanitize(data?.meta_data_localized?.text) }} />
        </>
    )
}

export default FooterContact