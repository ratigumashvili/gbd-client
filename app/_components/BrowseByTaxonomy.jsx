import Link from 'next/link'

import { browseByTaxonomy } from '../_lib/data'

const Blocks = ({ name, url, count }) => {
    return (
        <Link href={`/taxonomy/${url}`}
            className='text-center flex-1 p-8 rounded-md border border-teal-600 bg-teal-600 text-white hover:bg-white hover:text-gray-900 transition-all ease-in'
        >
            <h4 className='font-medium text-xl mb-2'>{name}</h4>
            <span>{count} registered records</span>
        </Link>
    )
}

function BrowseByTaxonomy({name = "Taxonomy"}) {
    return (
        <div className="p-4 mb-4">
            <h2 className="text-2xl font-medium mb-4">{name}</h2>
            <div className='flex flex-col md:flex-row gap-4'>
                {browseByTaxonomy.map((item) => <Blocks key={item.id} {...item} />)}
            </div>
        </div>
    )
}

export default BrowseByTaxonomy