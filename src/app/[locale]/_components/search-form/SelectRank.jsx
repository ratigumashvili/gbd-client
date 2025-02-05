"use client"

import { useTranslations } from "next-intl";

import { taxonRank } from "@/src/app/[locale]/_lib/data"
import { CustomSelect as RankSelect } from "@/src/app/[locale]/_components/search-form/SelectSearchType"

function SelectRank({ setFormData, formType }) {
    
    const s = useTranslations("Search");

    return (
        <>
            <RankSelect
                key={formType}
                options={taxonRank || []}
                placeholder={s("TaxonRank")}
                name="taxon_rank"
                id="taxon_rank"
                label={s("TaxonRank")}
                setFormData={setFormData}
                formType={formType}
                field="taxon_rank"
            />
        </>
    )
}

export default SelectRank