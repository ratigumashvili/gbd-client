import { getData } from "../../_lib/apiCalls"

const TeamMember = async ({ params }) => {

    const { data: member } = await getData(`researcher/${params.id}`, params.locale)

    return (
        <div className="py-4">
            Team Member
            <br /><br /><br />
            <pre className="max-w-8xl overflow-scroll border">{JSON.stringify(member, null, 2)}</pre>
        </div>
    )
}

export default TeamMember