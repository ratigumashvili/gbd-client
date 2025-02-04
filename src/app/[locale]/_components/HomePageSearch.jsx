"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/src/i18n/routing";
import { Tooltip } from "react-tooltip"
import { isMobile } from "react-device-detect"

import SpeciesSearchFields from "@/src/app/[locale]/_components/search-form/SpeciesSearchFields";
import QuestionIcon from "@/src/app/[locale]/_components/icons/QuestionIcon";
import SearchIcon from "@/src/app/[locale]/_components/icons/SearchIcon";
import { handleAdvancedSpeciesSearch } from "@/src/app/[locale]/_lib/actions/search-actions";

function HomePageSearch() {
    const [disabled, setDisabled] = useState(true);
    const [formData, setFormData] = useState({
        taxon_rank: "",
        specieLatinName: "",
        iucn: ""
    });

    const router = useRouter();
    const s = useTranslations("Search");

    // useEffect(() => {
    //     if (!formData.taxon_rank) {
    //         setFormData((prev) => ({ ...prev, specieLatinName: "" })); // Clear `latin_name`
    //     }
    //     // if (!formData.iucn) {
    //     //     setFormData((prev) => ({ ...prev, species_name: "" })); // Clear `species_name`
    //     // }
    // }, [formData.taxon_rank]);

    async function handleSpeciesFormSubmit(formData) {
        const queryParamString = await handleAdvancedSpeciesSearch(formData);
        if (queryParamString) {
            router.push("/searchResults?" + queryParamString);
        }
    }

    return (
        <section className="px-4 pb-12 pt-8 bg-slate-50 dark:bg-slate-600 border rounded-md mb-4">
            <div className="flex items-center justify-between mb-6">
                <p className="text-xl font-medium">Species search</p>
                <button>
                    <QuestionIcon />
                </button>
            </div>
            <form
                action={handleSpeciesFormSubmit}
                className="flex flex-col gap-y-6 xl:flex-row items-end gap-4"
            >
                <SpeciesSearchFields
                    formData={formData}
                    setFormData={setFormData}
                    setDisabled={setDisabled}
                    isModal={false}
                />

                <div className="mt-4 flex items-center justify-between">
                    <button
                        type="submit"
                        disabled={disabled}
                        className={`inline-flex justify-center rounded-md border border-transparent bg-teal-600 px-4 py-[10px] text-sm font-medium text-white hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-900 focus-visible:ring-offset-2 ${disabled && "opacity-50 pointer-events-none"
                            }`}
                    >
                        <SearchIcon width="18" height="18" />
                        <span className="pl-2">{s("submit")}</span>
                    </button>
                </div>

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
