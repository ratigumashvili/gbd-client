"use client"

import { Fragment, useState } from 'react'

import Image from 'next/image'
import { Link } from '@/navigation'

import { useTranslations } from 'next-intl'

import { Dialog, Transition } from '@headlessui/react'

import Close from './icons/Close'

export default function TaxonomyParentImage({ file_url, name, metadata, extension, taxon, taxonId, comment, author, authorId, uploadedBy }) {
    
    const [isOpen, setIsOpen] = useState(false)

    const t = useTranslations("Gallery")

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <button
                type='button'
                onClick={openModal}
            >
                <Image
                    src={file_url}
                    alt={name}
                    width={150}
                    height={150}
                    className='h-full max-h-[150px] object-cover'
                    title={name}
                />
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
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 dark:text-slate-400 p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        <div className='flex items-center justify-between dark:text-slate-400'>
                                            {name}

                                            <button onClick={closeModal}>
                                                <Close />
                                            </button>

                                        </div>
                                    </Dialog.Title>

                                    <div className="mt-4 flex flex-col gap-4">

                                        <Image src={file_url} width={500} height={500} alt={name} className='w-full h-auto object-cover z-[999999]' />

                                        <dl className="data-list">
                                            {/* <dt>Taxon:</dt>
                                            <dd><Link href={`/taxonomy/${taxonId}`}>{taxon}</Link></dd> */}
                                            {author && (
                                                <>
                                                    <dt>{t("author")}:</dt>
                                                    <dd><Link href={`/authors/${authorId}`}>{author}</Link></dd>
                                                </>
                                            )}
                                            {comment && (
                                                <>
                                                    <dt>{t("comment")}:</dt>
                                                    <dd>{comment}</dd>
                                                </>
                                            )}
                                            {uploadedBy && (
                                                <>
                                                    <dt>{t("uploadedBy")}:</dt>
                                                    <dd>{uploadedBy}</dd>
                                                </>
                                            )}
                                        </dl>

                                        <div className="flex items-center justify-between gap-2">
                                            <Link href={file_url} target='blank' className='text-sm text-teal-600 hover:text-teal-700 underline'>
                                                {t("download")}
                                            </Link>
                                            <span className="text-xs">({Math.floor(metadata?.size * 0.001)} KB. {t("type")}: {extension})</span>
                                        </div>
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
