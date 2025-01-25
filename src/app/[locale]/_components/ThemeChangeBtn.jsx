'use client'

import { useTheme } from "next-themes"

import SunIcon from "./icons/SunIcon"
import MoonIcon from "./icons/MoonIcon"
import { useTranslations } from "next-intl"

function ThemeChangeBtn() {
    const { theme, setTheme } = useTheme()
    const t = useTranslations("Header")

    const handleThemeChange = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
    return (
        <button type="button" className="flex items-center gap-2 font-firaGo" onClick={handleThemeChange}>
            {theme === 'light' ? <><MoonIcon /> {t("dark")}</> : <><SunIcon /> {t("light")}</>}
        </button>
    )
}

export default ThemeChangeBtn