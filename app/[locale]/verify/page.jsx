'use client'

import { useSearchParams } from "next/navigation"

export default function Verify() {
    const searchParams = useSearchParams()

    const verifyUrl = searchParams.get('verify_url')
    const url = verifyUrl.split('/')

    const id = url[7]
    const hash = url[8]
    const expires = searchParams.get('expires')
    const signature = searchParams.get('signature')


    return (
        <div>Verify Page:

            <br /><br /><br />

            verify_url: {verifyUrl}

            <br />

            id: {id}

            <br />

            hash: {hash}

            <br />

            expires: {expires}

            <br />

            signature: {signature}

        </div>
    )
}
