"use client"

import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import Close from './icons/Close'

export default function LoginModal() {
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
                className="button">
                Login
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
                                            <span>Login to your account</span>
                                            <button onClick={closeModal}>
                                                <Close />
                                            </button>
                                        </div>
                                    </Dialog.Title>

                                    <div className="my-8 flex flex-col gap-4">
                                        <input type="text" placeholder='Email' className='p-2 bg-transparent border rounded-md outline-teal-500' />
                                        <input type="password" placeholder='Password' className='p-2 bg-transparent border rounded-md outline-teal-500' />
                                    </div>

                                    <div className="mt-4 flex items-center justify-between">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-900 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Login
                                        </button>

                                        <p className='text-sm'>
                                            Don't have an account? <Link href="#" className='text-teal-600 hover:text-teal-700 underline'>Register</Link>
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
