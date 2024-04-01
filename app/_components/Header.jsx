"use client"

import { useState } from "react"

import Link from "next/link"

import { TopMenu } from "../_lib/constants"

import LoginModal from "./LoginModal"
import SearchModal from "./SearchModal"

import Hamburger from "./icons/Hamburger"
import Close from "./icons/Close"


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
            <div className="shadow-md">
                <div className="container flex justify-between items-center flex-container mx-auto px-4 py-8">
                    <NavbarDesktop
                        menuOpen={menuOpen}
                        setMenuOpen={setMenuOpen}
                    />
                    <div className="flex gap-3 items-center">
                        {/* <LanguageSwithcer /> */}
                        
                        <SearchModal />

                        <LoginModal />

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