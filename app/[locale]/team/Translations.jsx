import { useTranslations } from 'next-intl'

export function EditorsTranslate() {
    const t = useTranslations("Team")
    return (
        <h3 className="font-medium mb-4">{t("editors")}</h3>
    )
}

export function AuthorsTranslate() {
    const t = useTranslations("Team")
    return (
        <h3 className="font-medium mb-4">{t("authors")}</h3>
    )
}

export function ContributorsTranslate() {
    const t = useTranslations("Team")
    return (
        <h3 className="font-medium mb-4">{t("contributors")}</h3>
    )
}