"use client";


import Image from "next/image";
import { Link } from "@/src/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, } from "react-share"

import { detectLocale } from "@/src/app/[locale]/_lib/helpers";
import useIsMounted from "@/src/app/[locale]/_hooks/useIsMounted";
import { useFullUrl } from "@/src/app/[locale]/_hooks/useFullUrl";


export default function FeaturedSpecie() {

    const locale = useLocale()
    const { isMounted } = useIsMounted()
    const fullUrl = useFullUrl()

    const t = useTranslations("Index")

    const shareUrl = fullUrl;
    const shareTitle = "Check out this amazing content!";
    const shareImage = "https://biodiversity.iliauni.edu.ge/DBImages/New/f2011041150.JPG";

    if (!isMounted) {
        return null
    }

    return (

        <section id="shareable-content">
            <div className="group w-full min-h-[300px] md:h-full relative overflow-hidden">
                <h2 className={`text-3xl absolute top-2 left-2 z-10 text-white font-bold ${detectLocale(locale)}`}>{t("specieOfTheDay")}</h2>
                <div className="absolute right-2 top-2 flex items-center gap-2">
                    <FacebookShareButton url={shareUrl} quote={shareTitle}>
                        <img src="/social-icons/facebook.svg" alt="Facebook" className="w-10 h-10 hover:opacity-75 transition" />
                    </FacebookShareButton>
                    <TwitterShareButton url={shareUrl} title={shareTitle}>
                        <img src="/social-icons/twitter.svg" alt="Twitter" className="w-9 h-9 hover:opacity-75 transition" />
                    </TwitterShareButton>
                    <WhatsappShareButton url={shareUrl} title={shareTitle}>
                        <img src="/social-icons/whatsapp.svg" alt="Whatsapp" className="w-9 h-9 hover:opacity-75 transition" />
                    </WhatsappShareButton>
                </div>
                <Image
                    src={shareImage}
                    width={700}
                    height={700}
                    alt="Sharable"
                    className="rounded-md overflow-hidden max-h-[340px] object-cover"
                />
                <div className="
                    h-24 
                    w-full 
                    rounded-b-md
                    bg-teal-700 
                    text-white
                    absolute 
                    bottom-0 
                    left-0 
                    opacity-0 
                    scale-y-0
                    origin-bottom
                    group-hover:opacity-90 
                    group-hover:scale-y-100
                    transition-all
                    duration-300
                    ease-out
                ">
                    <Link href={'/'} className="flex items-center justify-center h-full text-xl">
                        specie latin name
                    </Link>
                </div>
            </div>
        </section>
    );
}
