"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/src/i18n/routing";
import { Tooltip } from "react-tooltip"
import { isMobile } from "react-device-detect"

import SearchIcon from "./icons/SearchIcon";
import QuestionIcon from "./icons/QuestionIcon";

import { iucnCategory, taxonRank } from "../_lib/data";
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
    const t = useTranslations("Species")

    // useEffect(() => {
    //     if (!formData.taxon_rank) {
    //         setFormData((prev) => ({ ...prev, specieLatinName: "" })); // Clear `latin_name`
    //     }
    //     // if (!formData.iucn) {
    //     //     setFormData((prev) => ({ ...prev, species_name: "" })); // Clear `species_name`
    //     // }
    // }, [formData.taxon_rank]);

    useEffect(() => {
        const allFieldsEmpty = Object.values(formData).every(
            (value) => value.trim() === ""
        );
        setDisabled(allFieldsEmpty || formData.specieLatinName === "");
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    async function handleFormSubmit(formData) {
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
                action={handleFormSubmit}
                className="flex flex-col gap-y-6 xl:flex-row items-end gap-4"
            >
                <div className="flex-1 w-full">
                    <label htmlFor="taxon_rank" className="flex flex-col gap-2 text-base">
                        {s("TaxonRank")}
                        <select
                            name="taxon_rank"
                            id="taxon_rank"
                            value={formData.taxon_rank}
                            onChange={handleChange}
                            className="p-[10px] bg-white border rounded-md outline-teal-500"
                        >
                            <option value="">{s("select_taxon_rank")}</option>
                            {taxonRank.map(({ id, value, name }) => (
                                <option key={id} value={value}>
                                    {name}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>

                <div className="flex flex-col gap-2 flex-1 w-full">
                    <label htmlFor="specieLatinName" className="text-base">
                        {s("speciesNamePlaceholder")} <sup className="text-red-700 font-medium">*</sup>
                    </label>
                    <input
                        name="specieLatinName"
                        type="text"
                        id="specieLatinName"
                        value={formData.specieLatinName}
                        onChange={handleChange}
                        placeholder={s("speciesName")}
                        className="w-full p-[8.5px] bg-white border rounded-md outline-teal-500 placeholder:text-black dark:placeholder:text-gray-300"
                    />
                </div>

                <div className="flex-1 w-full">
                    <label htmlFor="iucn" className="flex flex-col gap-2 text-base">
                        {s("NationalIUCNCategory")}
                        <select
                            name="iucn"
                            id="iucn"
                            value={formData.iucn}
                            onChange={handleChange}
                            className="p-[10px] bg-white border rounded-md outline-teal-500"
                        >
                            <option value="">{s("select_iucn")}</option>
                            {iucnCategory.map(({ id, value }) => (
                                <option key={id} value={value}>
                                    {t(`${value}`)}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>

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
