"use client"

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import { iucnCategory, taxonRank } from "@/src/app/[locale]/_lib/data";
import SelectSearchType from "@/src/app/[locale]/_components/search-form/SelectSearchType"
import SearchIcon from "@/src/app/[locale]/_components/icons/SearchIcon";

function SpeciesSearchFields({ formData, setFormData, classNames }) {

  const [disabled, setDisabled] = useState(true);

  const s = useTranslations("Search");
  const t = useTranslations("Species")

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

  const formattedIUCN = iucnCategory.map((item, index) => (
    {
      id: index,
      value: item.value,
      name: t(`${item.value}`)
    }
  ))

  return (
    <div className={classNames}>

      <div className="flex-1 w-full z-50">
        <SelectSearchType
          options={taxonRank || []}
          placeholder={s("TaxonRank")}
          name="taxon_rank"
          id="taxon_rank"
          label={s("TaxonRank")}
        />
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
          className="w-full p-[8.5px] bg-white border rounded-md outline-teal-500 placeholder:text-gray-400 dark:placeholder:text-gray-300"
        />
      </div>

      <div className="flex-1 w-full z-30">
        <SelectSearchType
          options={formattedIUCN || []}
          placeholder={s("select_iucn")}
          name="iucn"
          id="iucn"
          label={s("NationalIUCNCategory")}
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

export default SpeciesSearchFields