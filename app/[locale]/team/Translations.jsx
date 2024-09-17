import { useTranslations } from 'next-intl'

export function EditorsTranslate() {
    const t = useTranslations("Team")
    return (
        <h3 className="font-medium mb-4 text-2xl">{t("editors")}</h3>
    )
}

export function AuthorsTranslate() {
    const t = useTranslations("Team")
    return (
        <h3 className="font-medium mb-4 text-2xl">{t("authors")}</h3>
    )
}

export function ContributorsTranslate() {
    const t = useTranslations("Team")
    return (
        <h3 className="font-medium mb-4 text-2xl">{t("contributors")}</h3>
    )
}