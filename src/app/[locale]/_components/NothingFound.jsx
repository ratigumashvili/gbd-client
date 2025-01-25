import { Link } from "@/src/i18n/routing"

import { useTranslations } from "next-intl"

import Bug from "./icons/Bug"

function NothingFound() {
    const t = useTranslations("Common")
    return (
        <div className="flex items-center justify-center p-20">
            <div className='flex flex-col items-center gap-4'>
                <Bug width='100' height='100' />
                <div className='text-center my-4'>
                    <h2 className='font-medium text-2xl mb-2'>{t("errorTitle")}</h2>
                    <p>{t("errorSubtitle")}</p>
                </div>
                <Link href="/" className='button'>{t("errorGoHome")}</Link>
            </div>
        </div>
    )
}

export default NothingFound