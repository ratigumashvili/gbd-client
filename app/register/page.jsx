'use client'

import { useFormState } from "react-dom"

import ZodErrors from "../_components/ZodErrors"

import { registerUserAction } from '../_lib/actions/auth-actions'
import { AUTH_FORM_INITIAL_STATE } from "../_lib/constants"

export default function Register() {

    const [registerFormState, registerFormAction] = useFormState(registerUserAction, AUTH_FORM_INITIAL_STATE)

    console.log(registerFormState)
    return (
        <div className="flex items-center justify-center">
            <form action={registerFormAction} className="w-full max-w-[320px]">
                <div className="my-8 flex flex-col gap-4">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder='Enter Your Name'
                        className='p-2 bg-transparent border rounded-md outline-teal-500'
                    />
                    <ZodErrors error={registerFormState?.zodErrors?.name} />
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder='Enter Your Email'
                        className='p-2 bg-transparent border rounded-md outline-teal-500'
                    />
                    <ZodErrors error={registerFormState?.zodErrors?.email} />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder='Enter Your Password'
                        className='p-2 bg-transparent border rounded-md outline-teal-500'
                    />
                    <ZodErrors error={registerFormState?.zodErrors?.password} />
                </div>

                <div className="mt-4 flex flex-col md:flex-row gap-4 items-center justify-between">
                    <button
                        type="submit"
                        className="w-full md:w-max inline-flex justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-900 focus-visible:ring-offset-2"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    )
}
