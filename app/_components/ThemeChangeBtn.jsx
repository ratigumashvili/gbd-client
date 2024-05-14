'use client'

import { useTheme } from "next-themes"

import SunIcon from "./icons/SunIcon"
import MoonIcon from "./icons/MoonIcon"

function ThemeChangeBtn() {
    const { theme, setTheme } = useTheme()

    const handleThemeChange = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
    return (
        <button type="button" className="flex items-center gap-2" onClick={handleThemeChange}>
            {theme === 'light' ? <><MoonIcon /> Dark</> : <><SunIcon /> Light</>}
        </button>
    )
}

export default ThemeChangeBtn