"use client"

import Image from 'next/image'
import Link from 'next/link'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

import Close from './icons/Close'

export default function TaxonomyParentImage({ url, title, id, taxon, taxonId, comment, author, authorId, uploadedBy }) {
    const [isOpen, setIsOpen] = useState(false)

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
                    src={url}
                    alt={title}
                    width={150}
                    height={150}
                    className='h-full max-h-[150px] object-cover'
                    title={title}
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
                                            {title}

                                            <button onClick={closeModal}>
                                                <Close />
                                            </button>

                                        </div>
                                    </Dialog.Title>

                                    <div className="mt-4 flex flex-col gap-4">

                                        <Image src={url} width={500} height={500} alt={title} className='w-full h-auto object-cover z-[999999]' />

                                        <dl className="data-list">
                                            <dt>Taxon:</dt>
                                            <dd><Link href={`/taxonomy/${taxonId}`}>{taxon}</Link></dd>
                                            {author && (
                                                <>
                                                    <dt>Author:</dt>
                                                    <dd><Link href={`/authors/${authorId}`}>{author}</Link></dd>
                                                </>
                                            )}
                                            {comment && (
                                                <>
                                                    <dt>Comment:</dt>
                                                    <dd>{comment}</dd>
                                                </>
                                            )}
                                            {uploadedBy && (
                                                <>
                                                    <dt>Uploaded by:</dt>
                                                    <dd>{uploadedBy}</dd>
                                                </>
                                            )}
                                        </dl>

                                        <Link href={url} target='blank' className='text-sm text-teal-600 hover:text-teal-700 underline'>
                                            Download full size image
                                        </Link>
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
