"use client"

import { Fragment, useState } from 'react'
import { useFormState } from "react-dom"

import { useRouter } from '@/src/i18n/routing'

import { Dialog, Transition } from '@headlessui/react'
import { loginUserAction } from '../_lib/actions/auth-actions'
import { AUTH_FORM_INITIAL_STATE } from '../_lib/constants'

import Close from './icons/Close'
import RightDoubleIcon from './icons/RightDoubleIcon'

import { useTranslations } from 'next-intl'

const LoginPanel = ({ closeModal, loginFormAction }) => {

    const router = useRouter()

    return (
        <form action={loginFormAction}>
            <div className="my-8 flex flex-col gap-4">
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className='p-2 bg-transparent border rounded-md outline-teal-500 dark:border-slate-100'
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className='p-2 bg-transparent border rounded-md outline-teal-500 dark:border-slate-100'
                />
            </div>

            <div className="mt-4 flex flex-col md:flex-row gap-4 items-center justify-between">
                <button
                    type="submit"
                    className="w-full md:w-max inline-flex justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-900 focus-visible:ring-offset-2"
                    onClick={closeModal}
                >
                    Login
                </button>

                <p className='text-sm'>
                    {"Don't have an account? "}
                    <button 
                        type="button" 
                        onClick={() => { closeModal(), router.push("/register") }} 
                        className="text-teal-600 hover:text-teal-700 underline">
                            Register
                    </button>
                </p>
            </div>
        </form>
    )
}

export default function AuthModal() {
    const [isOpen, setIsOpen] = useState(false)

    const [loginFormState, loginFormAction] = useFormState(loginUserAction, AUTH_FORM_INITIAL_STATE)

    const t = useTranslations("Header")

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
                className="flex items-center gap-2 font-firaGo">
                <RightDoubleIcon />
                {t("login")}
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
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-slate-600 p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        <div className='flex items-center justify-between'>
                                            <button onClick={closeModal} className='dark:text-slate-300'>
                                                <Close />
                                            </button>
                                        </div>
                                    </Dialog.Title>

                                    <LoginPanel
                                        closeModal={closeModal}
                                        loginFormAction={loginFormAction}
                                    />

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
