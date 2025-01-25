import Image from "next/image"

import { getData } from "@/src/app/[locale]/_lib/apiCalls"

import NothingFound from "@/src/app/[locale]/_components/NothingFound"
import TeamMemberDesc from "@/src/app/[locale]/_components/TeamMemberDesc"
import TeamMemberRecords from "@/src/app/[locale]/_components/TeamMemberRecords"

const TeamMemberPage = async ({ params }) => {

    const { data: member } = await getData(`researcher/${params.id}`, params.locale)

    if (!member) {
        return <NothingFound />
    }

    return (
        <div className="py-4">
            <article className="flex flex-col md:flex-row gap-6">
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