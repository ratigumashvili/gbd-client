"use client"

import { Fragment } from 'react'

import { Tab } from '@headlessui/react'

import { useTranslations } from 'next-intl'

function TeamMemberDesc({ member }) {

    const t = useTranslations("Team")

    return (
        <div>
            <Tab.Group>
                <Tab.List className="flex gap-2 font-firaGo">
                    <Tab as={Fragment}>
                        {({ selected }) => (
                            <button
                                className={
                                    selected ? 'bg-teal-700 text-white px-2 py-1 rounded-sm focus:outline-none' : 'px-2 py-1 border border-teal-700 rounded-sm'
                                }
                            >
                                {t("bio")}
                            </button>
                        )}
                    </Tab>
                    {member?.research_interests && (
                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button
                                    className={
                                        selected ? 'bg-teal-700 text-white px-2 py-1 rounded-sm focus:outline-none' : 'px-2 py-1 border border-teal-700 rounded-sm'
                                    }
                                >
                                    {t("interests")}
                                </button>
                            )}
                        </Tab>
                    )}
                </Tab.List>
                <Tab.Panels className="mt-4 text-gray-700">
                    <Tab.Panel>
                        <div
                            dangerouslySetInnerHTML={{ __html: member?.biography }}
                            className="[&>p]:mb-3 font-firaGo [&>a]:underline"
                        />
                    </Tab.Panel>
                    {member?.research_interests && (
                        <Tab.Panel>
                            <div
                                dangerouslySetInnerHTML={{ __html: member?.research_interests }}
                                className="[&>p]:mb-3 font-firaGo [&>a]:underline"
                            />
                        </Tab.Panel>
                    )}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}

export default TeamMemberDesc