"use client"

import { Fragment, useState } from 'react'
import Link from 'next/link'

import { Dialog, Transition } from '@headlessui/react'

import SearchIcon from './icons/SearchIcon'
import { iucnCategory, taxonRank } from '../_lib/data'
import Close from './icons/Close'

export default function SearchModal() {
    const [isOpen, setIsOpen] = useState(false)
    const [advancedSearch, setAdvancedSearch] = useState(false)

    function closeModal() {
        setIsOpen(false)
        setAdvancedSearch(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>

            {/* <button
                type='button'
                onClick={openModal}
                title="Search"
                className="flex item-center gap-2 px-3 py-2 border border-teal-600 rounded-md text-sm hover:border-teal-700 hover:bg-teal-700 hover:text-white transition-all ease-in">
                <SearchIcon /> Search
            </button> */}

            <button
                type='button'
                onClick={openModal}
                title="Search"
                className="flex item-center gap-2">
                <SearchIcon /> Search
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
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
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
                                            {!advancedSearch ? "Simple search by name" : "Advanced search"}
                                            <button onClick={closeModal}>
                                                <Close />
                                            </button>
                                        </div>
                                    </Dialog.Title>

                                    {!advancedSearch ? (
                                        <div className="my-8">
                                            <input type="text" placeholder='Latin, Georgian or English name' className='w-full p-2 bg-transparent border rounded-md outline-teal-500' />
                                        </div>
                                    ) :
                                        <div className='my-8 flex flex-col gap-4'>

                                            <label htmlFor="taxon_rank" className='flex flex-col gap-2'>
                                                Taxon Rank
                                                <select name="taxon_rank" id="taxon_rank" className='p-2 bg-transparent border rounded-md outline-teal-500'>
                                                    {taxonRank.map(({ id, value, name }) => <option key={id} value={value}>{name}</option>)}
                                                </select>
                                            </label>

                                            <div className='flex flex-col gap-2'>
                                                <label htmlFor="latin_name">Latin name</label>
                                                <input type="text" id='latin_name' placeholder='Latin name' className='w-full p-2 bg-transparent border rounded-md outline-teal-500' />
                                            </div>

                                            <label htmlFor="iucn" className='flex flex-col gap-2'>
                                                National IUCN Category
                                                <select name="iucn" id="iucn" className='p-2 bg-transparent border rounded-md outline-teal-500'>
                                                    {iucnCategory.map(({ id, value, name }) => <option key={id} value={value}>{name}</option>)}
                                                </select>
                                            </label>

                                        </div>
                                    }


                                    <div className="mt-4 flex items-center justify-between">

                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-900 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Search
                                        </button>

                                        <p className='text-sm'>
                                            <button onClick={() => setAdvancedSearch((prevState) => !prevState)} className='text-teal-600 hover:text-teal-700 underline'>
                                                {!advancedSearch ? "Advanced search" : "Simple search"}
                                            </button>
                                        </p>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
