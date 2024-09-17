import { useTranslations } from 'next-intl'

export function PageTitle() {
    const t = useTranslations("Caucasus")
    return (
        <h2 className="text-2xl font-medium mb-4">{t("pageTitle")}</h2>
    )
}