import { getData } from "@/src/app/[locale]/_lib/apiCalls"
import { PageTitle, RoleTranslate } from "@/src/app/[locale]/team/Features"
import { sanitize } from "@/src/app/[locale]/_lib/helpers"

async function TeamLayout({ children, params }) {
    const { data: teamAppreciation } = await getData('static-page/researcher', params.locale)
    return (
        <section className="py-4">
            <PageTitle />
            {children}
            <div className="[&>p]:mb-3 [&>ul]:mb-3 [&>ul]:list-disc [&>ul]:ml-4 p-4 bg-slate-50 dark:bg-slate-600 rounded-md mt-8"
                dangerouslySetInnerHTML={{ __html: sanitize(teamAppreciation?.meta_data_localized?.text) }}
            />
        </section>
    )
}

export default TeamLayout