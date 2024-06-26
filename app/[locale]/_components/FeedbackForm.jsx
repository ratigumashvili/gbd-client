'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from "rehype-sanitize";

import { useUserContext } from '../_context/UserContext';

import { toast } from 'react-toastify';
import { toastOptions } from '../_lib/helpers';

import Close from './icons/Close';


export default function FeedbackForm({ isOpen, closeModal, metaData }) {

    const [issueTitle, setIssueTitle] = useState('')
    const [description, setDescription] = useState('')

    const [formError, setFormError] = useState(false)

    const { user } = useUserContext()

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setFormError(false)
        if (issueTitle === '' || description === '') {
            setFormError("Please, fill out required '*' fields")
        } else {
            console.log({ issueTitle, description, metaData })
            closeModal()
            toast.success("Your feedback was sent", toastOptions)
        }
    }

    return (
        <>
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
                                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900 flex items-center justify-between"
                                    >
                                        <span>Feedback form</span>
                                        <button onClick={closeModal}>
                                            <Close />
                                        </button>
                                    </Dialog.Title>

                                    {user.loggedIn ? (
                                        <form className="mt-2 flex flex-col gap-4" onSubmit={handleFormSubmit}>
                                            <small>Issue title <span className='text-red-700'>*</span></small>
                                            <input
                                                value={issueTitle}
                                                onChange={(e) => setIssueTitle(e.target.value)}
                                                type="text"
                                                className='p-2 bg-transparent border rounded-md outline-teal-500 placeholder:text-xs'
                                                placeholder='Provide descriptive title'
                                            />
                                            <small>Issue description <span className='text-red-700'>*</span></small>
                                            <MDEditor
                                                value={description}
                                                onChange={setDescription}
                                                previewOptions={{
                                                    rehypePlugins: [[rehypeSanitize]],
                                                }}
                                                textareaProps={{
                                                    placeholder: 'Describe an issue',
                                                }}
                                            />

                                            <div className="mt-4 flex items-center justify-between">
                                                <button
                                                    type="submit"
                                                    className="button"
                                                    onClick={handleFormSubmit}
                                                >
                                                    Send feedback
                                                </button>

                                                {formError && <p className='text-sm text-red-700'>{formError}</p>}
                                            </div>

                                        </form>
                                    ) : <p className='my-6 text-red-700'>Only authorised users can leave their feedback. Please, login to your account.</p>}

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
