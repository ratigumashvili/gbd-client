"use client"

import { useTranslations } from "next-intl";

import SearchIcon from "@/src/app/[locale]/_components/icons/SearchIcon";
import SelectIUCN from "@/src/app/[locale]/_components/search-form/SelectIUCN";

function IucnSearchFields({ formData, disabled, classNames, setFormData, formType }) {
  const s = useTranslations("Search");
  return (
    <div className={classNames}>
      <div className="flex-1 w-full z-30">
        <SelectIUCN setFormData={setFormData} formType={formType} />
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

export default IucnSearchFields