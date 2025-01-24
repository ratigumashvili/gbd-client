import { getData } from "@/app/[locale]/_lib/apiCalls"
import { PageTitle, RoleTranslate } from "@/app/[locale]/team/Features"

const routes = [
    {
        id: 1,
        title: "editors",
        path: "/team/editors"
    },
    {
        id: 2,
        title: "contributors",
        path: '/team/contributors'
    }
]

async function TeamLayout({ children, params }) {
    const { data: teamAppreciation } = await getData('static-page/researcher', params.locale)
    return (
        <section>
            <PageTitle />
            <div className="flex gap-x-4 mb-12">
                {routes.map((item) => (
                    <RoleTranslate key={item.id} {...item} />
                ))}
            </div>

            {children}

            <div className="[&>p]:mb-3 [&>ul]:mb-3 [&>ul]:list-disc [&>ul]:ml-4 p-4 bg-slate-50 dark:bg-slate-600 rounded-md mt-8"
                dangerouslySetInnerHTML={{ __html: teamAppreciation?.meta_data_localized?.text }}
            />
        </section>
    )
}

export default TeamLayout