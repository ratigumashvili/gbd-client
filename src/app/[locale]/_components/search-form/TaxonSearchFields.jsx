"use client"

import { useTranslations } from "next-intl";

import SelectRank from "@/src/app/[locale]/_components/search-form/SelectRank";
import SearchIcon from "@/src/app/[locale]/_components/icons/SearchIcon";
import ResetButton from "./ResetButton";

function TaxonSearchFields({ formData, handleChange, handleReset, disabled, classNames, setFormData, formType }) {
    const s = useTranslations("Search");

    return (
        <div className={classNames}>
            <div className="flex-1 w-full z-50">
                <SelectRank
                    key={formType}
                    formData={formData}
                    setFormData={setFormData}
                />
            </div>

            <div className="flex flex-col gap-2 flex-1 w-full">
                <label htmlFor="taxonLatinName" className="text-base line-clamp-1">
                    {s("taxonLatinName")}
                </label>
                <input
                    name="taxonLatinName"
                    type="text"
                    id="taxonLatinName"
                    value={formData.taxonLatinName}
                    onChange={handleChange}
                    placeholder={s("taxonLatinNamePlaceholder")}
                    className="w-full p-[8.5px] bg-white border rounded-md outline-teal-500 placeholder:text-gray-400 dark:placeholder:text-gray-300"
                />
            </div>

            <div className="flex flex-col gap-2 flex-1 w-full">
                <label htmlFor="taxonGeorgianName" className="text-base line-clamp-1">
                    {s("taxonGeorgianName")}
                </label>
                <input
                    name="taxonGeorgianName"
                    type="text"
                    id="taxonGeorgianName"
                    value={formData.taxonGeorgianName}
                    onChange={handleChange}
                    placeholder={s("taxonGeorgianNamePlaceholder")}
                    className="w-full p-[8.5px] bg-white border rounded-md outline-teal-500 placeholder:text-gray-400 dark:placeholder:text-gray-300"
                />
            </div>

            <div className="flex flex-col gap-2 flex-1 w-full">
                <label htmlFor="taxonEnglishName" className="text-base line-clamp-1">
                    {s("taxonEnglishName")}
                </label>
                <input
                    name="taxonEnglishName"
                    type="text"
                    id="taxonEnglishName"
                    value={formData.taxonEnglishName}
                    onChange={handleChange}
                    placeholder={s("taxonEnglishNamePlaceholder")}
                    className="w-full p-[8.5px] bg-white border rounded-md outline-teal-500 placeholder:text-gray-400 dark:placeholder:text-gray-300"
                />
            </div>

            <div className="w-full md:w-max mt-4 flex items-center gap-4">

                <ResetButton handleReset={handleReset} formData={formData} classNames={`flex-1 md:!w-max`} />
                
                <button
                    type="submit"
                    disabled={disabled}
                    className={`inline-flex flex-1 md:!w-max !sm:w-max justify-center rounded-md border border-transparent bg-teal-600 px-4 py-[10px] text-sm font-medium text-white hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-900 focus-visible:ring-offset-2 ${disabled && "opacity-50 pointer-events-none"
                        }`}
                >
                    <SearchIcon width="18" height="18" />
                    <span className="pl-2">{s("submit")}</span>
                </button>
            </div>
        </div>
    )
}

export default TaxonSearchFields