"use client"

import { Fragment, useState } from 'react'
import { useRouter } from '@/src/i18n/routing'
import { Dialog, Transition } from '@headlessui/react'
import { useTranslations } from 'next-intl'

import { handleAdvancedSearch, handleSimpleSearch } from "@/src/app/[locale]/_lib/actions/search-actions"

import { iucnCategory, taxonRank } from '../_lib/data'

import SearchIcon from './icons/SearchIcon'
import Close from './icons/Close'

export default function SearchModal() {
    const [isOpen, setIsOpen] = useState(false)
    const [advancedSearch, setAdvancedSearch] = useState(false)

    const [disabled, setDisabled] = useState(true)

    const router = useRouter()

    const t = useTranslations("Header")
    const s = useTranslations("Search")

    function closeModal() {
        setIsOpen(false)
        setAdvancedSearch(false)
    }

    function openModal() {
        setDisabled(true)
        setIsOpen(true)
    }

    async function handleSimpleFormSubmit(formData) {
        const queryParamString = await handleSimpleSearch(formData)

        if (queryParamString) {
            router.push('/searchResults?' + queryParamString);
        }

        closeModal()
    }

    async function handleAdvancedFormSubmit(formData) {
        const queryParamString = await handleAdvancedSearch(formData)

        if(queryParamString) {
            router.push('/searchResults?' + queryParamString);
        }

        closeModal()
    }


    return (
        <>
            <button
                type='button'
                onClick={openModal}
                title="Search"
                className="flex item-center gap-2 font-firaGo">
                <SearchIcon /> {t("search")}
            </button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/50" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto font-firaGo">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        <div className='flex items-center justify-between'>
                                            {!advancedSearch ? <>{s("SimpleSearchByName")}</> : <>{s("AdvancedSearch")}</>}
                                            <button onClick={closeModal}>
                                                <Close />
                                            </button>
                                        </div>
                                    </Dialog.Title>

                                    {!advancedSearch ? (
                                        <div className="my-8">

                                            <form action={handleSimpleFormSubmit}>
                                                <input
                                                    type="text"
                                                    placeholder={s("LGE")}
                                                    name='lge'
                                                    required
                                                    onChange={(e) => e.target.value.trim() === "" ? setDisabled(true) : setDisabled(false)}
                                                    className='w-full p-2 bg-transparent border rounded-md outline-teal-500 placeholder:text-black' />

                                                <div className="mt-4 flex items-center justify-between">

                                                    <button
                                                        disabled={disabled}
                                                        type="submit"
                                                        className={`inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium bg-teal-600 text-white hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-900 focus-visible:ring-offset-2 ${disabled && "opacity-50 pointer-events-none"}`}
                                                    >
                                                        {t("search")}
                                                    </button>

                                                    <p className='text-sm'>
                                                        <button
                                                            type='button'
                                                            onClick={() => setAdvancedSearch((prevState) => !prevState)}
                                                            className='text-teal-600 hover:text-teal-700 underline'
                                                        >
                                                            {!advancedSearch ? <>{s("AdvancedSearch")}</> : <>{s("SimpleSearchByName")}</>}
                                                        </button>
                                                    </p>
                                                </div>

                                            </form>

                                        </div>
                                    ) :
                                        <div className='my-8'>

                                            <form action={handleAdvancedFormSubmit} className='space-y-4'>

                                                <label htmlFor="taxon_rank" className='flex flex-col gap-2'>
                                                    {s("TaxonRank")}
                                                    <select
                                                        name="taxon_rank"
                                                        id="taxon_rank"
                                                        onChange={(e) => e.target.value.trim() === "" ? setDisabled(true) : setDisabled(false)}
                                                        className='p-2 bg-transparent border rounded-md outline-teal-500'
                                                    >
                                                        <option value="">{s("select_taxon_rank")}</option>
                                                        {taxonRank.map(({ id, value, name }) => <option key={id} value={value}>{name}</option>)}
                                                    </select>
                                                </label>

                                                <div className='flex flex-col gap-2'>
                                                    <label htmlFor="taxonLatinName">{s("title")}</label>
                                                    <input
                                                        name="taxonLatinName"
                                                        type="text"
                                                        id='taxonLatinName'
                                                        onChange={(e) => e.target.value.trim() === "" ? setDisabled(true) : setDisabled(false)}
                                                        placeholder={s("LatinName")}
                                                        className='w-full p-2 bg-transparent border rounded-md outline-teal-500 placeholder:text-black'
                                                    />
                                                </div>

                                                <label htmlFor="iucn" className='flex flex-col gap-2'>
                                                    {s("NationalIUCNCategory")}
                                                    <select
                                                        name="iucn"
                                                        id="iucn"
                                                        onChange={(e) => e.target.value.trim() === "" ? setDisabled(true) : setDisabled(false)}
                                                        className='p-2 bg-transparent border rounded-md outline-teal-500'>
                                                        <option value="">{s("select_iucn")}</option>
                                                        {iucnCategory.map(({ id, value, name }) => <option key={id} value={value}>{name}</option>)}
                                                    </select>
                                                </label>

                                                <div className="mt-4 flex items-center justify-between">

                                                    <button
                                                        type='submit'
                                                        className={`inline-flex justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-900 focus-visible:ring-offset-2 ${disabled && "opacity-50 pointer-events-none"}`}
                                                    >
                                                        {t("search")}
                                                    </button>

                                                    <p className='text-sm'>
                                                        <button type='button' onClick={() => setAdvancedSearch((prevState) => !prevState)} className='text-teal-600 hover:text-teal-700 underline'>
                                                            {!advancedSearch ? <>{s("AdvancedSearch")}</> : <>{s("SimpleSearchByName")}</>}
                                                        </button>
                                                    </p>
                                                </div>

                                            </form>

                                        </div>
                                    }

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
