"use client"

import { useEffect } from "react";
import { useTranslations } from "next-intl";

import { iucnCategory, taxonRank } from "@/src/app/[locale]/_lib/data";

function SpeciesSearchFields({ formData, setFormData, setDisabled }) {

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

  return (
    <>
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
          className="w-full p-[8.5px] bg-white border rounded-md outline-teal-500 placeholder:text-black dark:placeholder:text-gray-300"
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
    </>
  )
}

export default SpeciesSearchFields