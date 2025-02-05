"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/src/i18n/routing";
import { Tooltip } from "react-tooltip"
import { isMobile } from "react-device-detect"

import TaxonSearchFields from "@/src/app/[locale]/_components/search-form/TaxonSearchFields";
import IucnSearchFields from "@/src/app/[locale]/_components/search-form/IucnSearchFields";
import SpeciesSearchFields from "@/src/app/[locale]/_components/search-form/SpeciesSearchFields";

import { handleAdvancedSpeciesSearch } from "@/src/app/[locale]/_lib/actions/search-actions";

import QuestionIcon from "@/src/app/[locale]/_components/icons/QuestionIcon";

function HomePageSearch() {
    const [formType, setFormType] = useState("species")
    const [formData, setFormData] = useState({
        taxon_rank: "",
        specieLatinName: "",
        iucn: ""
    });
    const [disabled, setDisabled] = useState(true);

    const router = useRouter();
    const s = useTranslations("Search");

    useEffect(() => {
        const allFieldsEmpty = Object.values(formData).every(
            (value) => value?.trim() === ""
        );
        if (formType === "species") {
            setDisabled(allFieldsEmpty || formData.specieLatinName === "");
        }
        if (formType === "taxons" || formType === "iucn") {
            setDisabled(allFieldsEmpty);
        }
    }, [formData, formType]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleTypeChange = (option) => {
        setFormType(option);
        if (option === "species") {
            setFormData({
                taxon_rank: "",
                specieLatinName: "",
                iucn: ""
            })
        }
        if (option === "taxons") {
            setFormData({
                taxon_rank: "",
                specieLatinName: "",
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

    async function handleSpeciesFormSubmit(formData) {
        const queryParamString = await handleAdvancedSpeciesSearch(formData);
        if (queryParamString) {
            router.push("/searchResults?" + queryParamString);
        }
    }

    return (
        <section className="px-4 pb-10 pt-6 bg-slate-50 dark:bg-slate-600 border rounded-md mb-4">

            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-medium">{s("advancedSearch")}: {detectTypeTytle(formType)}</h3>
                <div className="flex items-center gap-x-4">
                    <QuestionIcon />
                    <button onClick={() => handleTypeChange("species")} className={formType === "species" ? "text-teal-600" : "text-black"}>species</button>
                    <button onClick={() => handleTypeChange("taxons")} className={formType === "taxons" ? "text-teal-600" : "text-black"}>taxons</button>
                    <button onClick={() => handleTypeChange("iucn")} className={formType === "iucn" ? "text-teal-600" : "text-black"}>iucn</button>
                </div>
            </div>
            <br /><br />
            {JSON.stringify(formData, null, 2)}
            <br /><br />

            {formType === "species" && (
                <form action={handleSpeciesFormSubmit}>
                    <SpeciesSearchFields
                        key={formType}
                        formData={formData}
                        setFormData={setFormData}
                        handleChange={handleChange}
                        disabled={disabled}
                        classNames={`flex flex-col gap-y-6 lg:flex-row items-end gap-4 relative`}
                        formType="species"
                    />
                </form>
            )}

            {formType === "taxons" && (
                <form action={handleSpeciesFormSubmit}>
                    <TaxonSearchFields
                        key={formType}
                        formData={formData}
                        setFormData={setFormData}
                        handleChange={handleChange}
                        disabled={disabled}
                        classNames={`flex flex-col gap-y-6 md:flex-row items-end gap-4 relative`}
                        formType={formType}
                    />
                </form>
            )}

            {formType === "iucn" && (
                <form action={handleSpeciesFormSubmit}>
                    <IucnSearchFields
                        key={formType}
                        formData={formData}
                        setFormData={setFormData}
                        handleChange={handleChange}
                        disabled={disabled}
                        classNames={`flex items-end gap-4 relative`}
                        formType={formType}
                    />
                </form>
            )}

            {/* <Tooltip
                id="latin_name_tooltip"
                style={{
                    zIndex: 999,
                    width: isMobile ? "200px" : "auto",
                    padding: "2px 6px",
                    backgroundColor: "black",
                    color: "white",
                    fontSize: "14px",
                    textAlign: "center"
                }}
            /> */}

        </section>
    );
}

export default HomePageSearch;
