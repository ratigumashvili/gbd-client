"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter, Link, usePathname } from "@/src/i18n/routing";
import { TopMenu } from "../_lib/constants";
import ThemeChangeBtn from "./ThemeChangeBtn";
import BookmarksCart from "./BookmarksCart";
import Hamburger from "./icons/Hamburger";
import Close from "./icons/Close";
import RightDoubleIcon from "./icons/RightDoubleIcon";
import { useTranslations } from "next-intl";
import { detectLocale } from "../_lib/helpers";
import { useSearchParams } from "next/navigation";
import SearchIcon from "./icons/SearchIcon";

const NavbarDesktop = ({ setMenuOpen, locale }) => {
    const t = useTranslations("TopNavigation");

    return (
        <>
            <button onClick={() => setMenuOpen((prev) => !prev)} className="md:hidden">
                <Hamburger />
            </button>
            <ul className={`hidden md:flex gap-3 text-lg ${detectLocale(locale)}`}>
                {TopMenu.map(({ id, title, path }) => (
                    <li key={id}>
                        <Link href={path}>{t(title)}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

const NavbarMobile = ({ menuOpen, setMenuOpen, locale }) => {
    const router = useRouter();
    const t = useTranslations("TopNavigation");

    const handleClick = (path) => {
        router.replace(path);
        setMenuOpen(false);
    };

    return (
        <div
            className={`
                fixed 
                inset-0 
                bg-white 
                transform 
                transition-all 
                duration-300 
                ease-in-out 
                ${menuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"} 
                z-50 
                w-full 
                h-screen 
                flex 
                flex-col 
                px-6
                `}
        >
            <button
                className="absolute top-4 right-4 text-black"
                onClick={() => setMenuOpen(false)}
            >
                <Close />
            </button>
            <ul className={`flex flex-col space-y-4 ml-10 text-2xl font-medium mt-12 ${detectLocale(locale)}`}>
                {TopMenu.map(({ id, title, path }) => (
                    <li key={id}>
                        <button className="w-full text-left py-2" onClick={() => handleClick(path)}>
                            {t(title)}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const LanguageSwitcher = ({ locale }) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleLanguageChange = (lang) => {
        router.replace(pathname + "?" + searchParams, { locale: lang });
    };

    return (
        <div className="flex gap-2 items-center font-firaGo">
            {locale === "ka" ? (
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
    );
};

function Header({ locale }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const t = useTranslations("Header");
    const c = useTranslations("Common");

    return (
        <div className="relative">
            <div className="w-full py-6 md:py-2 text-white bg-teal-700">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm">
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <h1>
                            <Link
                                href="https://iliauni.edu.ge/ge"
                                target="blank"
                                className="sm:flex items-center gap-2 font-firaGo hidden"
                            >
                                <RightDoubleIcon />
                                {t("isu")}
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
                    </div>
                    <div className="flex items-center gap-4">
                        <LanguageSwitcher locale={locale} />
                        <ThemeChangeBtn />
                        <BookmarksCart />
                        <Link href={"/search"}>
                            <span className="flex items-center">
                                <SearchIcon /> {t("search")}
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="shadow-md text-white bg-teal-600">
                <div className="container flex justify-between items-center flex-container mx-auto px-4 py-8">
                    <div className="flex items-center gap-3">
                        <Image
                            src="/iliauni-logo_eng.png"
                            width={80}
                            height={80}
                            alt="logo"
                            priority
                            className="brightness-0 invert-[1]"
                        />
                        <h1 className={`text-xl w-[200px] ${detectLocale(locale)}`}>{c("isu")}</h1>
                    </div>
                    <div className="flex gap-3 items-center">
                        <NavbarDesktop setMenuOpen={setMenuOpen} locale={locale} />
                    </div>
                </div>
            </div>
            <NavbarMobile menuOpen={menuOpen} setMenuOpen={setMenuOpen} locale={locale} />
        </div>
    );
}

export default Header;
