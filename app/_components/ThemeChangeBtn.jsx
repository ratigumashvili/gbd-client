'use client'

import { useState } from "react"

import SunIcon from "./SunIcon"
import MoonIcon from "./icons/MoonIcon"

function ThemeChangeBtn() {
    const [theme, setTheme] = useState('light')

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