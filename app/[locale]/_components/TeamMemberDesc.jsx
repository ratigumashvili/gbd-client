"use client"

import { Fragment } from 'react'

import { Link } from '@/navigation'

import { Tab } from '@headlessui/react'

import { useTranslations } from 'next-intl'

function TeamMemberDesc({ member }) {

    const t = useTranslations("Team")

    return (
        <>
            <h2 className="font-medium text-2xl mb-4">{member.title}</h2>
            <p className="mb-6 text-teal-700">
                <Link href={member.researchgate} target="blank">Researchgate</Link>
            </p>
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
                    <Tab as={Fragment}>
                        {({ selected }) => (
                            <button
                                className={
                                    selected ? 'bg-teal-700 text-white px-2 py-1 rounded-sm focus:outline-none' : 'px-2 py-1 border border-teal-700 rounded-sm'
                                }
                            >
                                {t("contacts")}
                            </button>
                        )}
                    </Tab>
                </Tab.List>
                <Tab.Panels className="mt-4 text-gray-700">
                    <Tab.Panel>
                        <div
                            dangerouslySetInnerHTML={{ __html: member?.biography }}
                            className="[&>p]:mb-3 font-firaGo [&>a]:underline dark:text-slate-400"
                        />
                    </Tab.Panel>
                    {member?.research_interests && (
                        <Tab.Panel>
                            <div
                                dangerouslySetInnerHTML={{ __html: member?.research_interests }}
                                className="[&>p]:mb-3 font-firaGo [&>a]:underline dark:text-slate-400"
                            />
                        </Tab.Panel>
                    )}
                    <Tab.Panel>
                        <div className='dark:text-slate-400'>
                            Email: <Link href={`mailto:info@gbd.ge`}>info@gbd.ge</Link>
                        </div>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </>
    )
}

export default TeamMemberDesc