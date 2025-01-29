import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import QuestionIcon from "@/src/app/[locale]/_components/icons/QuestionIcon"
import Close from '@/src/app/[locale]/_components/icons/Close'
import Alert from '@/src/app/[locale]/_components/icons/Alert'
import { useTranslations } from 'next-intl'

function BookmarksModal() {

    const t = useTranslations("Common")
    const isClient = typeof window !== "undefined";

    const getStoredData = (key, fallback) => {
        if (!isClient) return fallback;
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : fallback;
        } catch (error) {
            console.error(`Error parsing localStorage data for ${key}:`, error);
            return fallback;
        }
    };

    const [confirm, setConfirm] = useState(() => getStoredData("gbd-message-confirmed", false));
    
    useEffect(() => {
        if (isClient) {
            localStorage.setItem("gbd-message-confirmed", JSON.stringify(confirm));
        }
    }, [confirm]);

    const [isOpen, setIsOpen] = useState(!confirm)

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    function handleClick() {
        setConfirm(true)
        closeModal()
    }

    return (
        <>
            <button type="button" onClick={openModal}>
                <QuestionIcon width='30' height='30' />
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
                                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        <div className='flex items-center justify-center gap-2 relative mb-6'>
                                            <span className='text-red-600'>
                                                <Alert width='30' height='30' fill='text-red-800' />
                                            </span>
                                            {t("ls_message_title")}
                                            <button onClick={closeModal} className='absolute -top-3 -right-3'>
                                                <Close />
                                            </button>
                                        </div>
                                    </Dialog.Title>
                                    <Dialog.Description className='leading-8 mb-8'>
                                        {t("ls_message")}
                                    </Dialog.Description>
                                    <div className='flex items-center justify-end gap-2'>
                                        <button onClick={closeModal} className='button px-2 py-3'>
                                            {t("close")}
                                        </button>
                                        {!confirm && (
                                            <button
                                                onClick={handleClick}
                                                className='button-danger px-2 py-3'
                                            >
                                                {t("do_not_show")}
                                            </button>
                                        )}
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

export default BookmarksModal