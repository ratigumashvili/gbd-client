"use client"

import { useSearchParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { usePathname, useRouter } from '@/src/i18n/routing'

function TaxonomyGallerySearch({ query }) {

    const searchParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()

    async function handleFormSubmit(formData) {
        // const latinName = formData.get("latinName")

        // const newParams = new URLSearchParams(searchParams);
        // newParams.set("page", 1);
        // newParams.set("q", latinName);

        // router.replace(`${pathname}?${newParams.toString()}`)

        const latinName = formData.get("latinName");
        const newParams = new URLSearchParams(searchParams);
    
        // ✅ Always start from page 1
        newParams.set("page", "1");  
        newParams.set("q", latinName.trim()); 
    
        router.replace(`${pathname}?${newParams.toString()}`);
    }

    const t = useTranslations("Common")

    return (
        <div>
            <form action={handleFormSubmit} className="flex gap-2">
                <input
                    type="text"
                    name="latinName"
                    defaultValue={query}
                    className="px-3 py-2 border rounded-sm"
                    placeholder={t("latin_name")}
                />
                <button
                    type="submit"
                    className="button-secondary"
                >
                    {t("submit")}
                </button>
                <button
                    type="button"
                    onClick={() => router.push("/gallery")}
                    className='button-danger'
                >
                    {t("reset")}
                </button>
            </form>
        </div>
    )
}

export default TaxonomyGallerySearch