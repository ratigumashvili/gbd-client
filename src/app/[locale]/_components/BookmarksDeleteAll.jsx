"use client";

import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import TrashIcon from "@/src/app/[locale]/_components/icons/TrashIcon"

import { useBookmarks } from "@/src/app/[locale]/_hooks/useBookmarks"
import { useRouter } from "@/src/i18n/routing";
import { useTranslations } from "next-intl";

import Alert from "./icons/Alert";
import Close from "./icons/Close";

export default function BookmarksDeleteAll() {
    const { bookmarks, clearAllItems } = useBookmarks();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations("Common")

    const openModal = () => setIsOpen(true);

    const closeModal = () => setIsOpen(false);

    const handleRemoveAll = () => {
        clearAllItems();
        closeModal();
        router.push("/bookmarked");
    };

    return (
        <>
            <button
                className="button-danger !flex items-center gap-2 disabled:opacity-65 disabled:pointer-events-none"
                onClick={openModal}
                disabled={!bookmarks.length}
            >
                <span>
                    <TrashIcon width="20" height="20" />
                </span>
                <span>
                    {t("deleteAll")}
                </span>
            </button>

            {/* <Transition appear show={isOpen} as={Fragment}>
                <Dialog open={isOpen} onClose={closeModal} className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">

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
                                    <Dialog.Title className="text-lg font-semibold">Confirm Deletion</Dialog.Title>
                                    <Dialog.Description className="mt-2 text-gray-600">
                                        Are you sure you want to delete all bookmarks? This action cannot be undone.
                                    </Dialog.Description>

                                    <div className="mt-4 flex justify-end gap-2">
                                        <button onClick={closeModal} className="px-4 py-2 bg-gray-200 text-gray-800 rounded">
                                            Cancel
                                        </button>
                                        <button onClick={handleRemoveAll} className="px-4 py-2 bg-red-600 text-white rounded">
                                            Delete
                                        </button>
                                    </div>
                                </Dialog.Panel>

                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition> */}





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
                                        {t("deleteAllMessage")}
                                    </Dialog.Description>
                                    <div className='flex items-center justify-end gap-2'>
                                        <button onClick={closeModal} className="px-4 py-2 bg-gray-200 text-gray-800 rounded">
                                            {t("close")}
                                        </button>
                                        <button onClick={handleRemoveAll} className="px-4 py-2 bg-red-600 text-white rounded">
                                            {t("confirm")}
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>

                </Dialog>
            </Transition>
        </>
    );
}
