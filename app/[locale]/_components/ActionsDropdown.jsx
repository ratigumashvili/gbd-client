'use client'

import { Fragment, useState } from 'react'

import { usePathname } from 'next/navigation'

import { Menu, Transition } from '@headlessui/react'

import { toast } from 'react-toastify'

import { copyToClipboard, currentDate, exportData, toastOptions, baseUrl } from '../_lib/helpers'

import { useTranslations } from 'next-intl'

import FeedbackForm from './FeedbackForm'

import Hamburger from './icons/Hamburger'

export default function ActionsDropdown({ handlePrint = () => void(0), record = [], downloadContent = true }) {

    const [isOpen, setIsOpen] = useState(false)

    const pathname = usePathname()

    const t = useTranslations("Common")

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const metaData = {
        title: record[0]?.name || "Feedback",
        url: baseUrl + pathname,
        date: currentDate
    }

    const handleCopyToClipboard = () => {
        copyToClipboard(baseUrl + pathname)
        toast.success(t("copied"), toastOptions)
    }

    return (
        <div className="relative print:hidden">

            {isOpen && <FeedbackForm isOpen={isOpen} closeModal={closeModal} metaData={metaData} />}

            <Menu as="div" className="relative inline-block text-left dark:text-slate-700">
                <Menu.Button title='Actions' className="dark:text-slate-300">
                    <Hamburger />
                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute top-10 right-0 z-10 flex flex-col gap-1 p-1 text-sm bg-white whitespace-nowrap rounded-sm min-w-28 shadow-md">
                        <Menu.Item as="button" onClick={handleCopyToClipboard} className="actions-dropdown-item">{t("copyUrl")}</Menu.Item>
                        <Menu.Item as="button" onClick={handlePrint} className="actions-dropdown-item">{t("print")}</Menu.Item>
                        <Menu.Item as="button" onClick={openModal} className="actions-dropdown-item">{t("feedback")}</Menu.Item>
                        {downloadContent && (<Menu.Item as="button" onClick={() => exportData(record)} className="actions-dropdown-item">{t("download_json")}</Menu.Item>)}
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}
