import Link from 'next/link'
import Bug from './_components/icons/Bug'

export default function NotFound() {
    return (
        <div className='flex items-center justify-center p-20'>
            <div className='flex flex-col items-center gap-4'>
                <Bug width='100' height='100' />
                <div className='text-center my-4'>
                    <h2 className='font-medium text-2xl'>Oops! Something went wrong.</h2>
                    <p>Could not find requested page</p>
                </div>
                <Link href="/" className='button'>Return Home</Link>
            </div>
        </div>
    )
}