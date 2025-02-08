"use client"

import { useTranslations } from "next-intl";

import { taxonRank } from "@/src/app/[locale]/_lib/data"
import { CustomSelect as RankSelect } from "@/src/app/[locale]/_components/search-form/SelectSearchType"

function SelectRank({ formData, setFormData, formType }) {

    const s = useTranslations("Search");
    const t = useTranslations("Species")

    const formattedTaxons = taxonRank.map((item, index) => (
        {
            id: index,
            value: item.value,
            name: t(`${item.value}`)
        }
    ))

    return (
        <>
            <RankSelect
                key={formType}
                // options={taxonRank || []}
                options={formattedTaxons || []}
                placeholder={s("TaxonRank")}
                name="taxon_rank"
                id="taxon_rank"
                label={s("TaxonRank")}
                formData={formData}
                setFormData={setFormData}
                formType={formType}
                field="taxon_rank"
            />
        </>
    )
}

export default SelectRank