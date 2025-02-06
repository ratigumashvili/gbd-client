"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { detectLocale } from "../../_lib/helpers";
import { Link } from "@/src/i18n/routing";


export default function FeaturedSpecie() {

    const contentRef = useRef(null)

    const t = useTranslations("Index")
    const locale = useLocale()

    return (

        <section ref={contentRef}>
            <div className="group w-full min-h-[300px] md:h-full relative overflow-hidden">
                <h2 className={`text-3xl absolute top-2 left-2 z-10 text-white font-bold ${detectLocale(locale)}`}>{t("specieOfTheDay")}</h2>
                <Image
                    src={"https://biodiversity.iliauni.edu.ge/DBImages/New/f2011041150.JPG"}
                    // fill
                    width={700}
                    height={700}
                    alt="text"
                    objectFit="cover"
                    className="rounded-md overflow-hidden max-h-[340px]"
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
