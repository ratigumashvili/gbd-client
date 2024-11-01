import Image from "next/image"

import { getData } from "../../_lib/apiCalls"

import NothingFound from "../../_components/NothingFound"
import TeamMemberDesc from "../../_components/TeamMemberDesc"
import TeamMemberRecords from "../../_components/TeamMemberRecords"

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
                    <TeamMemberDesc member={member} />
                    <br />
                    <TeamMemberRecords />
                </div>
            </article>
        </div>
    )
}

export default TeamMemberPage