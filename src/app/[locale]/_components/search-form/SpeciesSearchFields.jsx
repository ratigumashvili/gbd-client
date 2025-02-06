"use client"

import { useTranslations } from "next-intl";

import SelectRank from "@/src/app/[locale]/_components/search-form/SelectRank";
import SearchIcon from "@/src/app/[locale]/_components/icons/SearchIcon";
import ResetButton from "./ResetButton";
import SubmitButton from "./SubmitButton";

function SpeciesSearchFields({ formData, disabled, handleChange, handleReset, classNames, setFormData, formType }) {

  const s = useTranslations("Search");

  return (
    <div className={classNames}>

      <div className="flex-1 w-full z-50">
        <SelectRank
          formData={formData}
          setFormData={setFormData}
          formType={formType}
        />
      </div>

      <div className="flex flex-col gap-2 flex-1 w-full">
        <label htmlFor="specieLatinName" className="text-base line-clamp-1">
          {s("speciesNamePlaceholder")}
        </label>
        <input
          name="specieLatinName"
          type="text"
          id="specieLatinName"
          value={formData.specieLatinName}
          onChange={handleChange}
          placeholder={s("speciesName")}
          className="w-full p-[8.5px] bg-white border rounded-md outline-teal-500 placeholder:text-gray-400 dark:placeholder:text-gray-300"
        />
      </div>

      <div className="flex flex-col gap-2 flex-1 w-full">
        <label htmlFor="specieGeorgianName" className="text-base line-clamp-1">
          {s("specieGeorgianName")}
        </label>
        <input
          name="specieGeorgianName"
          type="text"
          id="specieGeorgianName"
          value={formData.specieGeorgianName}
          onChange={handleChange}
          placeholder={s("specieGeorgianNamePlaceholder")}
          className="w-full p-[8.5px] bg-white border rounded-md outline-teal-500 placeholder:text-gray-400 dark:placeholder:text-gray-300"
        />
      </div>

      <div className="flex flex-col gap-2 flex-1 w-full">
        <label htmlFor="specieEnglishName" className="text-base line-clamp-1">
          {s("specieEnglishName")}
        </label>
        <input
          name="specieEnglishName"
          type="text"
          id="specieEnglishName"
          value={formData.specieEnglishName}
          onChange={handleChange}
          placeholder={s("specieEnglishNamePlaceholder")}
          className="w-full p-[8.5px] bg-white border rounded-md outline-teal-500 placeholder:text-gray-400 dark:placeholder:text-gray-300"
        />
      </div>

      <div className="w-full md:w-max mt-4 flex items-center gap-4">
        <ResetButton 
          handleReset={handleReset} 
          formData={formData} 
          classNames={`flex-1 md:!w-max`}
        />
        <SubmitButton disabled={disabled} />
      </div>

    </div>
  )
}

export default SpeciesSearchFields