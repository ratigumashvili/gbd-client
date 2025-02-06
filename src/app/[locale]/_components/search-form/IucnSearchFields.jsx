"use client"

import { useTranslations } from "next-intl";

import SearchIcon from "@/src/app/[locale]/_components/icons/SearchIcon";
import SelectIUCN from "@/src/app/[locale]/_components/search-form/SelectIUCN";
import ResetButton from "@/src/app/[locale]/_components/search-form/ResetButton";
import SelectRank from "@/src/app/[locale]/_components/search-form/SelectRank";

function IucnSearchFields({ disabled, classNames, formData, setFormData, formType, handleReset }) {

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

      <div className="flex-1 w-full z-30">
        <SelectIUCN
          formData={formData}
          setFormData={setFormData}
          formType={formType}
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

export default IucnSearchFields