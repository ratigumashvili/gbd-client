"use client"

import { useTranslations } from "next-intl";

import SearchIcon from "@/src/app/[locale]/_components/icons/SearchIcon";
import SelectIUCN from "@/src/app/[locale]/_components/search-form/SelectIUCN";
import ResetButton from "@/src/app/[locale]/_components/search-form/ResetButton";
import SelectRank from "@/src/app/[locale]/_components/search-form/SelectRank";
import SubmitButton from "./SubmitButton";

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
        <SubmitButton disabled={disabled} />
      </div>
    </div>
  )
}

export default IucnSearchFields