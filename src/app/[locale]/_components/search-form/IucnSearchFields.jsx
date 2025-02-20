"use client"

import SelectIUCN from "@/src/app/[locale]/_components/search-form/SelectIUCN";
import ResetButton from "@/src/app/[locale]/_components/search-form/ResetButton";
import SubmitButton from "./SubmitButton";

function IucnSearchFields({ disabled, classNames, formData, setFormData, formType, handleReset }) {

  return (
    <div className={classNames}>
    
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