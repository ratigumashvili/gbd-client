"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/src/i18n/routing";
import { Tooltip } from "react-tooltip"
import { isMobile } from "react-device-detect"

import SpeciesSearchFields from "@/src/app/[locale]/_components/search-form/SpeciesSearchFields";
import QuestionIcon from "@/src/app/[locale]/_components/icons/QuestionIcon";
import { handleAdvancedSpeciesSearch } from "@/src/app/[locale]/_lib/actions/search-actions";

import SelectSearchType from "@/src/app/[locale]/_components/search-form/SelectSearchType"

function HomePageSearch() {
    const [formData, setFormData] = useState({
        taxon_rank: "",
        specieLatinName: "",
        iucn: ""
    });

    const router = useRouter();
    const s = useTranslations("Search");

    async function handleSpeciesFormSubmit(formData) {
        const queryParamString = await handleAdvancedSpeciesSearch(formData);
        if (queryParamString) {
            router.push("/searchResults?" + queryParamString);
        }
    }

    return (
        <section className="px-4 pb-12 pt-6 bg-slate-50 dark:bg-slate-600 border rounded-md mb-4">
            
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-medium">{s("searchBySpecie")}</h3>
                <button>
                    <QuestionIcon />
                </button>
            </div>

            <form action={handleSpeciesFormSubmit}>
                <SpeciesSearchFields
                    formData={formData}
                    setFormData={setFormData}
                    classNames={`flex flex-col gap-y-6 xl:flex-row items-end gap-4 relative`}
                    isModal={false}
                />
            </form>

            {/* <Tooltip
                id="latin_name_tooltip"
                style={{
                    zIndex: 999,
                    width: isMobile ? "200px" : "auto",
                    padding: "2px 6px",
                    backgroundColor: "black",
                    color: "white",
                    fontSize: "14px",
                    textAlign: "center"
                }}
            /> */}

        </section>
    );
}

export default HomePageSearch;
