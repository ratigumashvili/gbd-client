"use client"

import { useTranslations } from "next-intl"

function ComponentTitle() {
    const t = useTranslations("Index")
  return (
    <h2 className='text-xl font-medium mb-4'>{t("latestUploads")}</h2>
  )
}

export default ComponentTitle