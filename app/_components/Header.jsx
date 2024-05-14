"use client"

import { useState } from "react"

import Link from "next/link"
import Image from "next/image"

import { TopMenu } from "../_lib/constants"

import AuthModal from "./AuthModal"
import SearchModal from "./SearchModal"

import Hamburger from "./icons/Hamburger"
import Close from "./icons/Close"
import MoonIcon from "./icons/MoonIcon"
import RightDoubleIcon from "./icons/RightDoubleIcon"
import ThemeChangeBtn from "./ThemeChangeBtn"


const NavbarDesktop = ({ menuOpen, setMenuOpen }) => {
    return (
        <>
            <button
                onClick={() => setMenuOpen((prevState) => !prevState)}
                className="md:hidden"
            >
                {menuOpen ? <Close /> : <Hamburger />}
            </button>
            <ul className="hidden md:flex gap-3">
                {TopMenu.map(({ id, title, path }) => (
                    <Link key={id} href={path}>{(title)}</Link>
                ))}
            </ul>
        </>
    )
}

const NavbarMobile = ({ menuOpen, setMenuOpen }) => {
    return (
        <>
            {menuOpen && (
                <ul className="flex flex-col gap-4 p-4 h-screen w-full absolute z-50 bg-white">
                    {TopMenu.map(({ id, title, path }) => (
                        <button
                            key={id}
                            className="max-w-max"
                            onClick={() => setMenuOpen(false)
                            }>
                            <Link href={path}>{title}</Link>
                        </button>
                    ))}
                </ul>
            )}
        </>
    )
}

// const LanguageSwithcer = () => {
//     const pathname = usePathname()
//     const router = useRouter()
//     const currentLocale = useLocale()

//     const handleLanguageChange = (selectedLanguage) => {
//         router.replace(pathname, { locale: selectedLanguage });
//         router.refresh()
//     }

//     return (
//         <div className="flex gap-2">
//             {Languages.map(({ id, name, locale }) => {
//                 const isActive = currentLocale === locale
//                 return (
//                     <button
//                         key={id}
//                         className={isActive ? 'font-medium' : 'font-normal'}
//                         onClick={() => handleLanguageChange(locale)}
//                     >
//                         {name}
//                     </button>
//                 )
//             })}
//         </div>
//     )
// }



function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="relative">
            <div className="w-full py-2 text-white bg-teal-700">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm">
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <h1>
                            <Link href='https://iliauni.edu.ge/ge' target="blank" className="flex items-center gap-2"><RightDoubleIcon />Ilia State University</Link>
                        </h1>
                        <AuthModal />
                    </div>
                    <div className="flex gap-4">
                        <span>English</span>
                        <ThemeChangeBtn />
                        <SearchModal />
                    </div>
                </div>
            </div>
            <div className="shadow-md text-white bg-teal-600">
                <div className="container flex justify-between items-center flex-container mx-auto px-4 py-8">
                    <div className="flex items-center gap-3">
                        <Image src="/iliauni-logo_eng.png" width={80} height={80} alt="logo" className="brightness-0 invert-[1]" />
                        <h1 className="text-xl uppercase">Ilia State <br /> University</h1>
                    </div>
                    <div className="flex gap-3 items-center">
                        {/* <LanguageSwithcer /> */}

                        {/* <SearchModal /> */}

                        {/* <AuthModal /> */}

                        <NavbarDesktop
                            menuOpen={menuOpen}
                            setMenuOpen={setMenuOpen}
                        />

                    </div>
                </div>
            </div>
            <NavbarMobile
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
            />
        </div>
    )
}

export default Header