"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/src/i18n/routing";

import TaxonSearchFields from "@/src/app/[locale]/_components/search-form/TaxonSearchFields";
import IucnSearchFields from "@/src/app/[locale]/_components/search-form/IucnSearchFields";
import SpeciesSearchFields from "@/src/app/[locale]/_components/search-form/SpeciesSearchFields";

import { handleAdvancedSearch } from "@/src/app/[locale]/_lib/actions/search-actions";

function AdvancedSearch() {
    const [formType, setFormType] = useState("species")
    const [formData, setFormData] = useState({
        taxon_rank: "",
        specieLatinName: "",
        specieGeorgianName: "",
        specieEnglishName: "",
        taxonLatinName: "",
        taxonGeorgianName: "",
        taxonEnglishName: "",
        iucn: ""
    });
    const [disabled, setDisabled] = useState(true);

    const router = useRouter()

    const s = useTranslations("Search");

    useEffect(() => {
        const allFieldsEmpty = Object.values(formData).every(
            (value) => value?.trim() === ""
        );

        const onlyTaxonRankSelected =
            formData.taxon_rank?.trim() !== "" &&
            Object.entries(formData).every(
                ([key, value]) => key === "taxon_rank" || value?.trim() === ""
            );

        if (formType === "species") {
            setDisabled(allFieldsEmpty || onlyTaxonRankSelected)
        }
        if (formType === "taxons") {
            setDisabled(allFieldsEmpty);
        }
        if (formType === "iucn") {
            setDisabled(allFieldsEmpty || onlyTaxonRankSelected);
        }
    }, [formData, formType]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleReset = () => {
        setFormData({
            taxon_rank: "",
            specieLatinName: "",
            specieGeorgianName: "",
            specieEnglishName: "",
            taxonLatinName: "",
            taxonGeorgianName: "",
            taxonEnglishName: "",
            iucn: ""
        })
    }

    const handleTypeChange = (option) => {
        setFormType(option);
        if (option === "species") {
            setFormData({
                taxon_rank: "",
                specieLatinName: "",
                specieGeorgianName: "",
                specieEnglishName: ""
            })
        }
        if (option === "taxons") {
            setFormData({
                taxon_rank: "",
                taxonLatinName: "",
                taxonGeorgianName: "",
                taxonEnglishName: "",
            })
        }
        if (option === "iucn") {
            setFormData({
                iucn: "",
            })
        }
    }

    const detectTypeTytle = (value) => {
        let title

        switch (value) {
            case "species":
                title = s("searchBySpecie");
                break;
            case "taxons":
                title = s("searchByTaxon")
                break;
            case "iucn":
                title = s("searchByIUCN")
                break;
            default:
                title = ""
        }

        return title
    }

    async function handleAdvancedFormSubmit(formData) {
        const queryParamString = await handleAdvancedSearch(formData);
        if (queryParamString) {
            router.push("/search?" + queryParamString);
        }
    }

    return (
        <section className="px-4 pb-10 pt-6 bg-slate-50 dark:bg-slate-600 border rounded-md mb-4">
            <div className="mb-6 border-b pb-5 flex flex-col gap-y-4 lg:flex-row lg:justify-between lg:items-center">
                <h3 className="text-xl font-medium text-center sm:text-left">{s("advancedSearch")}: {detectTypeTytle(formType)}</h3>
                <div className="flex flex-col gap-y-3 sm:flex-row gap-x-2">
                    <button
                        onClick={() => handleTypeChange("species")}
                        className={formType === "species" ? "button" : "button-secondary"}
                    >
                        {s("btn_specie")}
                    </button>
                    <button
                        onClick={() => handleTypeChange("taxons")}
                        className={formType === "taxons" ? "button" : "button-secondary"}
                    >
                        {s("btn_taxons")}
                    </button>
                    <button
                        onClick={() => handleTypeChange("iucn")}
                        className={formType === "iucn" ? "button" : "button-secondary"}
                    >
                        {s("btn_iucn")}
                    </button>
                </div>
            </div>

            {formType === "species" && (
                <>
                    <p className="border-b pb-5 mb-5 text-sm xs:text-base leading-7">{s("specie_search_hint")}</p>
                    <form action={handleAdvancedFormSubmit}>
                        <SpeciesSearchFields
                            key={formType}
                            formData={formData}
                            setFormData={setFormData}
                            handleChange={handleChange}
                            handleReset={handleReset}
                            disabled={disabled}
                            classNames={`flex flex-col gap-y-6 lg:flex-row items-end gap-4 relative`}
                            formType="species"
                        />
                    </form>
                </>
            )}

            {formType === "taxons" && (
                <>
                    <p className="border-b pb-5 mb-5 text-sm xs:text-base leading-7">{s("taxon_search_hint")}</p>
                    <form action={handleAdvancedFormSubmit}>
                        <TaxonSearchFields
                            key={formType}
                            formData={formData}
                            setFormData={setFormData}
                            handleChange={handleChange}
                            handleReset={handleReset}
                            disabled={disabled}
                            classNames={`flex flex-col gap-y-6 lg:flex-row items-end gap-4 relative`}
                            formType={formType}
                        />
                    </form>
                </>
            )}

            {formType === "iucn" && (
                <>
                    <p className="border-b pb-5 mb-5 text-sm xs:text-base leading-7 ">{s("iucn_search_hint")}</p>
                    <form action={handleAdvancedFormSubmit}>
                        <IucnSearchFields
                            key={formType}
                            formData={formData}
                            setFormData={setFormData}
                            handleChange={handleChange}
                            handleReset={handleReset}
                            disabled={disabled}
                            classNames={`flex flex-col lg:flex-row items-end gap-4 relative`}
                            formType={formType}
                        />
                    </form>
                </>
            )}
        </section>
    );
}

export default AdvancedSearch;
