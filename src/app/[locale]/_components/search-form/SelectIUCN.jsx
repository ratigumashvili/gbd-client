"use client"

import { useTranslations } from "next-intl";

import { CustomSelect as IucnSelect } from "@/src/app/[locale]/_components/search-form/SelectSearchType"
import { iucnCategory } from "@/src/app/[locale]/_lib/data"

function SelectIUCN({ formData, setFormData, formType }) {

    const s = useTranslations("Search");
    const t = useTranslations("Species")

    const formattedIUCN = iucnCategory.map((item, index) => (
        {
            id: index,
            value: item.value,
            name: t(`${item.value}`)
        }
    ))

    return (
        <IucnSelect
            key={formType}
            options={formattedIUCN || []}
            placeholder={s("select_iucn")}
            name="iucn"
            id="iucn"
            label={s("NationalIUCNCategory")}
            formData={formData}
            setFormData={setFormData}
            formType={formType}
            field="iucn"
        />
    )
}

export default SelectIUCN