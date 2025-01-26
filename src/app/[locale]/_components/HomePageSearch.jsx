// "use client"

// import { useRouter } from '@/src/i18n/routing'
// import { useTranslations } from 'next-intl'
// import { useState } from 'react'

// import { iucnCategory, taxonRank } from '../_lib/data'
// import SearchIcon from './icons/SearchIcon'

// function HomePageSearch() {
//     const [disabled, setDisabled] = useState(true)

//     const router = useRouter()

//     const t = useTranslations("Index")
//     const s = useTranslations("Search")

//     async function handleAdvancedSearch(FormData) {

//         const queryParams = {};

//         if (FormData.get("taxon_rank") !== s("select_taxon_rank")) {
//             queryParams.taxon_rank = FormData.get("taxon_rank");
//         }
//         if (FormData.get("latin_name").trim() !== "") {
//             queryParams.latin_name = FormData.get("latin_name");
//         }
//         if (FormData.get("iucn") !== s("select_iucn")) {
//             queryParams.iucn = FormData.get("iucn");
//         }

//         const queryParamString = new URLSearchParams(queryParams).toString();

//         if (queryParamString) {
//             router.push('/searchResults?' + queryParamString);
//         }
//     }

//     return (
//         <div className='px-4 py-8 bg-slate-50 dark:bg-slate-600 rounded-md mb-4'>
//             {/* <h2 className='text-2xl font-medium mb-4'>{t("search")}</h2> */}
//             <form action={handleAdvancedSearch} className='flex flex-col lg:flex-row items-end gap-4'>

//                 <div className='flex-1 w-full'>
//                     <label htmlFor="taxon_rank" className='flex flex-col gap-2 text-base'>
//                         {s("TaxonRank")}
//                         <select
//                             name="taxon_rank"
//                             id="taxon_rank"
//                             onChange={(e) => e.target.value.trim() === "" ? setDisabled(true) : setDisabled(false)}
//                             className='p-[10px] bg-white border rounded-md outline-teal-500'
//                         >
//                             <option value={null}>{s("select_taxon_rank")}</option>
//                             {taxonRank.map(({ id, value, name }) => <option key={id} value={value}>{name}</option>)}
//                         </select>
//                     </label>
//                 </div>

//                 <div className='flex flex-col gap-2 flex-1 w-full'>
//                     <label htmlFor="latin_name" className='text-base'>{s("LatinName")}</label>
//                     <input
//                         name="latin_name"
//                         type="text"
//                         id='latin_name'
//                         onChange={(e) => e.target.value.trim() === "" ? setDisabled(true) : setDisabled(false)}
//                         placeholder={s("LatinName")}
//                         className='w-full p-2 bg-white border rounded-md outline-teal-500'
//                     />
//                 </div>

//                 <div className='flex-1 w-full'>
//                     <label htmlFor="iucn" className='flex flex-col gap-2 text-base'>
//                         {s("NationalIUCNCategory")}
//                         <select
//                             name="iucn"
//                             id="iucn"
//                             onChange={(e) => e.target.value.trim() === "" ? setDisabled(true) : setDisabled(false)}
//                             className='p-[10px] bg-white border rounded-md outline-teal-500'>
//                             <option value={null}>{s("select_iucn")}</option>
//                             {iucnCategory.map(({ id, value, name }) => <option key={id} value={value}>{name}</option>)}
//                         </select>
//                     </label>
//                 </div>

//                 <div className="mt-4 flex items-center justify-between">

//                     <button
//                         type='submit'
//                         className={`inline-flex justify-center rounded-md border border-transparent bg-teal-600 px-4 py-[10px] text-sm font-medium text-white hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-900 focus-visible:ring-offset-2 ${disabled && "opacity-50 pointer-events-none"}`}
//                     >
//                        <SearchIcon width='18' height='18' /> <span className='pl-2'>{s("submit")}</span>
//                     </button>
//                 </div>

//             </form>
//         </div>
//     )
// }

// export default HomePageSearch

"use client";

import { useRouter } from "@/src/i18n/routing";
import { useTranslations } from "next-intl";
import { useState } from "react";

import SearchIcon from "./icons/SearchIcon";

import { iucnCategory, taxonRank } from "../_lib/data";
import {handleAdvancedSearch} from "@/src/app/[locale]/_lib/actions/search-actions"


function HomePageSearch() {
    const [disabled, setDisabled] = useState(true);

    const router = useRouter();

    const s = useTranslations("Search");

    async function handleFormSubmit(formData) {
        const queryParamString = await handleAdvancedSearch(formData)

        if (queryParamString) {
            router.push('/searchResults?' + queryParamString);
        }
    }

    return (
        <div className="px-4 py-8 bg-slate-50 dark:bg-slate-600 rounded-md mb-4">
            <form action={handleFormSubmit} className="flex flex-col lg:flex-row items-end gap-4">
                <div className="flex-1 w-full">
                    <label htmlFor="taxon_rank" className="flex flex-col gap-2 text-base">
                        {s("TaxonRank")}
                        <select
                            name="taxon_rank"
                            id="taxon_rank"
                            onChange={(e) => (e.target.value.trim() === "" ? setDisabled(true) : setDisabled(false))}
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
                    <label htmlFor="latin_name" className="text-base">
                        {s("LatinName")}
                    </label>
                    <input
                        name="latin_name"
                        type="text"
                        id="latin_name"
                        onChange={(e) => (e.target.value.trim() === "" ? setDisabled(true) : setDisabled(false))}
                        placeholder={s("LatinName")}
                        className="w-full p-2 bg-white border rounded-md outline-teal-500"
                    />
                </div>

                <div className="flex-1 w-full">
                    <label htmlFor="iucn" className="flex flex-col gap-2 text-base">
                        {s("NationalIUCNCategory")}
                        <select
                            name="iucn"
                            id="iucn"
                            onChange={(e) => (e.target.value.trim() === "" ? setDisabled(true) : setDisabled(false))}
                            className="p-[10px] bg-white border rounded-md outline-teal-500"
                        >
                            <option value="">{s("select_iucn")}</option>
                            {iucnCategory.map(({ id, value, name }) => (
                                <option key={id} value={value}>
                                    {name}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>

                <div className="mt-4 flex items-center justify-between">
                    <button
                        type="submit"
                        className={`inline-flex justify-center rounded-md border border-transparent bg-teal-600 px-4 py-[10px] text-sm font-medium text-white hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-900 focus-visible:ring-offset-2 ${disabled && "opacity-50 pointer-events-none"
                            }`}
                    >
                        <SearchIcon width="18" height="18" />
                        <span className="pl-2">{s("submit")}</span>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default HomePageSearch;
