import Link from "next/link"

export default function TaxonomyChildNodes({ data }) {
    return (

        <ul>
            {data?.children.map(({ id, name, url, children }) => (
                <li key={id} className="px-4 py-4 mb-4 bg-slate-50 rounded-md hover:bg-teal-700 hover:text-white transition-all ease-in">
                    <Link href={url} className="flex justify-between">
                        <span>
                            {name}
                        </span>
                        <span>
                                {children.length} entries
                        </span>
                    </Link>
                </li>
            ))}
        </ul>

    )
}
