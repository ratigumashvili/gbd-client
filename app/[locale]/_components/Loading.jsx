import { useTranslations } from 'next-intl'

function Loading() {
    const t = useTranslations("Common")
    return (
        <p className='font-firaGo'>{t("loading")}</p>
    )
}

export default Loading

