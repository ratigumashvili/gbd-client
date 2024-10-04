import Link from "next/link"
import Image from "next/image"

import { getData } from "../../_lib/apiCalls"

import NothingFound from "../../_components/NothingFound"
import TeamMemberDesc from "../../_components/TeamMemberDesc"

const TeamMemberPage = async ({ params }) => {

    const { data: member } = await getData(`researcher/${params.id}`, params.locale)

    if (!member) {
        return <NothingFound />
    }

    return (
        <div className="py-4">
            <article className="flex gap-6">
                <Image
                    src={member.image_url}
                    alt={member.title}
                    width={100}
                    height={100}
                    className="object-cover overflow-hidden self-start rounded-full w-28 h-28 shrink-0 mt-2"
                />
                <div>
                    <h2 className="font-medium text-xl mb-4">{member.title}</h2>
                    <p className="mb-6 text-teal-700"><Link href={member.researchgate} target="blank">Researchgate</Link></p>
                    <TeamMemberDesc member={member} />
                </div>
            </article>
        </div>
    )
}

export default TeamMemberPage