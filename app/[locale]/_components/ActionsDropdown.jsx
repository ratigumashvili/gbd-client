'use client'

import { Fragment, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Menu, Transition } from '@headlessui/react'
import { toast } from 'react-toastify'

import { copyToClipboard, currentDate, exportData, exportDataAsCSV, toastOptions, baseUrl } from '../_lib/helpers'

import FeedbackForm from './FeedbackForm'
import Hamburger from './icons/Hamburger'

export default function ActionsDropdown({ 
    handlePrint = () => void(0), 
    data, 
    coordinates = [],
    species = [],
    isSpecie = false, 
    downloadContent = true 
}) {

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
        title: data?.metadata?.scientific_name || "Feedback",
        url: baseUrl + pathname,
        date: currentDate
    }

     const dataToDownload = isSpecie ? {
        id: data?.metadata?.id,
        taxon_genera_id: data?.metadata?.tax_genera_id,
        origin: data?.metadata?.origin,
        georgian_name: data?.metadata?.georgian_name,
        english_name: data?.metadata?.english_name,
        scientific_name: data?.metadata?.scientific_name,
        scientific_name_id: data?.metadata?.scientific_name_id,
        title_according_to: data?.metadata?.according_title,
        synonyms: data?.metadata?.synonyms,
        subspecies: data?.metadata?.subspecies,
        taxonomy_source_name: data?.metadata?.taxonomy_source_name,
        taxonomy_source_url: data?.metadata?.taxonomy_source_url,
        comment: data?.metadata?.comment,
        reference_in_georgia: data?.metadata?.reference_in_georgia,
        references_list: data?.metadata?.references_list,
        national_red_list_status: data?.metadata?.national_red_list_status,
        iucn_red_list_status: data?.metadata?.iucn_red_list_status,
        protection_status: data?.metadata?.protection_status,
        reason: data?.metadata?.reason,
        trend: data?.metadata?.trend,
        conversion_status_comment: data?.metadata?.conversion_status_comment,
        conversion_status_references: data?.metadata?.conversion_status_references,
        evaluated_by: data?.metadata?.evaluated_by,
        date_evaluated: data?.metadata?.date_evaluated,
        coordinates: coordinates
    } : {
        scientific_name_id: data?.metadata?.scientific_name_id,
        name_according_to_title: data?.metadata?.according_title,
        name_according_to_url: data?.metadata?.according_url,
        published_in_year: data?.metadata?.published_in_year,
        taxon_rank_title: data?.metadata?.taxon_rank_title,
        taxon_rank_url: data?.metadata?.taxon_rank_url,
        scientific_name_authorship_title: data?.metadata?.scientific_name_authorship_title,
        scientific_name_authorship_url: data?.metadata?.scientific_name_authorship_url,
        english_name: data?.metadata?.english_name,
        english_url: data?.metadata?.english_url,
        georgian_name: data?.metadata?.georgian_name_title,
        gbd_remarks: data?.metadata?.gbd_remarks,
        children: species && species.length > 0 && species?.map((item) => item.title)
    }

    const handleCopyToClipboard = () => {
        copyToClipboard(baseUrl + pathname)
        toast.success(t("copied"), toastOptions)
    }

    return (
        <div className="relative print:hidden">

            {isOpen && <FeedbackForm isOpen={isOpen} closeModal={closeModal} metaData={metaData} />}

            <Menu as="div" className="relative inline-block text-left dark:text-slate-700">
                <Menu.Button title={t("actions")} className="dark:text-slate-300">
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
                        {downloadContent && (<Menu.Item as="button" onClick={() => exportData(dataToDownload)} className="actions-dropdown-item">{t("download_json")}</Menu.Item>)}
                        {downloadContent && (<Menu.Item as="button" onClick={() => exportDataAsCSV(dataToDownload)} className="actions-dropdown-item">{t("download_csv")}</Menu.Item>)}
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}
