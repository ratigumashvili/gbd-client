import { Link } from "@/src/i18n/routing"
import { taxonomyParentSeparator } from "@/src/app/[locale]/_lib/helpers"

const taxonomy = [
    {
        id: 1,
        title: "Animalia",
        type: "kingdom"
    },
    {
        id: 2,
        title: "Arthropoda",
        type: "phylum"
    },
    {
        id: 3,
        title: "Arachnida",
        type: "class"
    },
    {
        id: 29,
        title: "Araneae",
        type: "order"
    },
    {
        id: 50,
        title: "Agelenidae",
        type: "family"
    },
    {
        id: 96,
        title: "Agelena",
        type: "genus"
    }
]

export default function TaxonomyParentNodes() {
    return (
        <div className="py-4 flex gap-2 flex-wrap text-lg">
            {taxonomy.map((item, index) => (
                <Link
                    key={item.id}
                    href={`/${item.type}/${item.title}?id=${item.id}`}
                    className={`font-medium ${index === taxonomy.length - 1 ? "text-gray-600 hover:text-gray-700/80 transition" : "text-teal-700 hover:text-teal-700/80 transition"}`}
                >
                    <span className="capitalize">{item.type}</span> {item.title} 
                    <span className="text-gray-400 font-normal">{taxonomyParentSeparator(index, taxonomy)}</span>
                </Link>
            ))}

        </div>
    )
}
