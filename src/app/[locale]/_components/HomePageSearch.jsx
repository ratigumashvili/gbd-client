"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/src/i18n/routing";
import { Tooltip } from "react-tooltip"
import { isMobile } from "react-device-detect"

import SearchIcon from "./icons/SearchIcon";
import { iucnCategory, taxonRank } from "../_lib/data";
import { handleAdvancedSearch } from "@/src/app/[locale]/_lib/actions/search-actions";

function HomePageSearch() {
    const [disabled, setDisabled] = useState(true);
    const [formData, setFormData] = useState({
        taxon_rank: "",
        // latin_name: "",
        taxonLatinName: "",
        iucn: ""
    });

    const router = useRouter();
    const s = useTranslations("Search");
    const t = useTranslations("Species")

    // useEffect(() => {
    //     if (!formData.taxon_rank) {
    //         setFormData((prev) => ({ ...prev, latin_name: "" })); // Clear `latin_name`
    //     }
    //     // if (!formData.iucn) {
    //     //     setFormData((prev) => ({ ...prev, species_name: "" })); // Clear `species_name`
    //     // }
    // }, [formData.taxon_rank]);

    useEffect(() => {
        const allFieldsEmpty = Object.values(formData).every(
            (value) => value.trim() === ""
        );
        setDisabled(allFieldsEmpty);
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    async function handleFormSubmit(formData) {
        const queryParamString = await handleAdvancedSearch(formData);
        if (queryParamString) {
            router.push("/searchResults?" + queryParamString);
        }
    }

    return (
        <section className="px-4 py-12 bg-slate-50 dark:bg-slate-600 border rounded-md mb-4">
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

                {/* <div className="flex flex-col gap-2 flex-1 w-full">
                    <label htmlFor="latin_name" className="text-base">
                        {s("LatinNamePlaceholder")}
                        <button
                            type="button"
                            data-tooltip-id="latin_name_tooltip"
                            data-tooltip-content={"To activate this field the taxon rank must be selected"}
                            className="m-0 p-0"
                        >
                            <sup className="text-base p-2 text-red-700">*</sup>
                        </button>
                    </label>
                    <input
                        name="latin_name"
                        type="text"
                        id="latin_name"
                        value={formData.latin_name}
                        onChange={handleChange}
                        placeholder={s("LatinName")}
                        className={`w-full p-[8.5px] bg-white border rounded-md outline-teal-500 placeholder:text-black dark:placeholder:text-gray-300 ${disabled && "opacity-50 cursor-not-allowed"}`}
                        disabled={!formData.taxon_rank}
                    />
                </div> */}

                <div className="flex flex-col gap-2 flex-1 w-full">
                    <label htmlFor="taxonLatinName" className="text-base">
                        {s("speciesNamePlaceholder")}
                    </label>
                    <input
                        name="taxonLatinName"
                        type="text"
                        id="taxonLatinName"
                        value={formData.taxonLatinName}
                        onChange={handleChange}
                        placeholder={s("speciesName")}
                        className="w-full p-[8.5px] bg-white border rounded-md outline-teal-500 placeholder:text-black dark:placeholder:text-gray-300"
                    // disabled={!formData.iucn} // ✅ Disable when no `iucn` is selected
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
