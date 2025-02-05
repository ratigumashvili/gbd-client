"use client"

import { useTranslations } from "next-intl";

import SelectRank from "@/src/app/[locale]/_components/search-form/SelectRank";
import SearchIcon from "@/src/app/[locale]/_components/icons/SearchIcon";

function TaxonSearchFields({ formData, handleChange, disabled, classNames, setFormData, formType }) {
    const s = useTranslations("Search");

    return (
        <div className={classNames}>

            <div className="flex-1 w-full z-50">
                <SelectRank
                    key={formType}
                    setFormData={setFormData}
                    formType={formType}
                />
            </div>

            <div className="flex flex-col gap-2 flex-1 w-full">
                <label htmlFor="specieLatinName" className="text-base">
                    {s("speciesNamePlaceholder")}
                </label>
                <input
                    name="specieLatinName"
                    type="text"
                    id="specieLatinName"
                    value={formData?.specieLatinName}
                    onChange={handleChange}
                    placeholder={s("speciesName")}
                    className="w-full p-[8.5px] bg-white border rounded-md outline-teal-500 placeholder:text-gray-400 dark:placeholder:text-gray-300"
                />
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
        </div>
    )
}

export default TaxonSearchFields