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
                                        <button onClick={closeModal} className="button-secondary">
                                            {t("close")}
                                        </button>
                                        <button onClick={handleRemoveAll} className="button-danger">
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
