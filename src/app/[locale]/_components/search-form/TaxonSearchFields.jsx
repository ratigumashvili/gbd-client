"use client"

import { useTranslations } from "next-intl";

import SelectRank from "@/src/app/[locale]/_components/search-form/SelectRank";
import ResetButton from "./ResetButton";
import SubmitButton from "./SubmitButton";

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
                <SubmitButton disabled={disabled} />
            </div>
        </div>
    )
}

export default TaxonSearchFields