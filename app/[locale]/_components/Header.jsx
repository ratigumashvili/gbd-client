"use client"

import { useState } from "react"

import Image from "next/image"

import { useRouter, Link, usePathname } from "@/navigation"

import { TopMenu } from "../_lib/constants"

import AuthModal from "./AuthModal"
import SearchModal from "./SearchModal"
import ThemeChangeBtn from "./ThemeChangeBtn"

import Hamburger from "./icons/Hamburger"
import Close from "./icons/Close"
import RightDoubleIcon from "./icons/RightDoubleIcon"

import { useTranslations } from "next-intl"

import { detectLocale } from "../_lib/helpers"


const NavbarDesktop = ({ menuOpen, setMenuOpen, locale }) => {
    const t = useTranslations("TopNavigation")
    const pathname = usePathname()
    return (
        <>
            <button
                onClick={() => setMenuOpen((prevState) => !prevState)}
                className="md:hidden"
            >
                {menuOpen ? <Close /> : <Hamburger />}
            </button>
            <ul className={`hidden md:flex gap-3 text-lg ${detectLocale(locale)}`}>
                {TopMenu.map(({ id, title, path }) => (
                    <li key={id} className={pathname === path ? "underline" : ""}>
                        <Link href={path}>
                            {t(title)}
                        </Link>
                    </li>
                ))}
            </ul >
        </>
    )
}

const NavbarMobile = ({ menuOpen, setMenuOpen, locale }) => {
    const t = useTranslations("TopNavigation")
    const pathname = usePathname()
    return (
        <>
            {menuOpen && (
                <ul className={`flex flex-col gap-4 p-4 h-screen w-full absolute z-50 bg-white ${detectLocale(locale)}`}>
                    {TopMenu.map(({ id, title, path }) => (
                        <button
                            key={id}
                            className="max-w-max"
                            onClick={() => setMenuOpen(false)
                            }>
                            <Link href={path} className={pathname === path ? "font-bold" : "font-normal"}>
                                {t(title)}
                            </Link>
                        </button>
                    ))}
                </ul>
            )}
        </>
    )
}

const LanguageSwitcher = ({ locale }) => {

    const router = useRouter()
    const pathname = usePathname()

    const handleLanguageChange = (lang) => {
        lang === 'ka' ? router.replace(pathname, { locale: 'ka' }) : router.replace(pathname, { locale: 'en' })
    }

    return (
        <div className="flex gap-2 items-center font-firaGo">
            {locale === 'ka' ? (
                <>
                    <div className="switch justify-end" onClick={() => handleLanguageChange("en")}>
                        <div className="switch-circle"></div>
                    </div>
                    <button onClick={() => handleLanguageChange("en")}>English</button>
                </>
            ) : (
                <>
                    <div className="switch justify-start" onClick={() => handleLanguageChange("ka")}>
                        <div className="switch-circle"></div>
                    </div>
                    <button onClick={() => handleLanguageChange("ka")}>ქართული</button>
                </>
            )}
        </div>
    )
}


function Header({ locale }) {

    const [menuOpen, setMenuOpen] = useState(false)
    const t = useTranslations('Header')
    const c = useTranslations('Common')

    return (
        <div className="relative">
            <div className="w-full py-2 text-white bg-teal-700">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm">
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <h1>
                            <Link href='https://iliauni.edu.ge/ge' target="blank" className="sm:flex items-center gap-2 font-firaGo hidden">
                                <RightDoubleIcon />
                                {t('isu')}
                            </Link>
                        </h1>

                        <Link href="/" className="flex items-center gap-2 font-firaGo">
                            <RightDoubleIcon />
                            {t("dashboard")}
                        </Link>
                        <Link href="/register" className="flex items-center gap-2 font-firaGo">
                        <RightDoubleIcon />
                            {t("register")}
                        </Link>

                        {/* <AuthModal /> */}
                    </div>
                    <div className="flex items-center gap-4">

                        <LanguageSwitcher locale={locale} />
                        <ThemeChangeBtn />
                        <SearchModal />

                    </div>
                </div>
            </div>
            <div className="shadow-md text-white bg-teal-600">
                <div className="container flex justify-between items-center flex-container mx-auto px-4 py-8">
                    <div className="flex items-center gap-3">
                        <Image src="/iliauni-logo_eng.png" width={80} height={80} alt="logo" className="brightness-0 invert-[1]" />
                        <h1 className={`text-xl w-[200px] ${detectLocale(locale)}`}>{c("isu")}</h1>
                    </div>
                    <div className="flex gap-3 items-center">

                        <NavbarDesktop
                            menuOpen={menuOpen}
                            setMenuOpen={setMenuOpen}
                            locale={locale}
                        />

                    </div>
                </div>
            </div>
            <NavbarMobile
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
                locale={locale}
            />
        </div>
    )
}

export default Header