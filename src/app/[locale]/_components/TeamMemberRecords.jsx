const { useTranslations } = require("next-intl")

const ComponentTitle = () => {
    const t = useTranslations("Team")
    return <h2 className="font-medium text-xl mb-4">{t("registered")}</h2>
}

const TeamMemberRecords = async ({data = []}) => {
    return (
        <div>
            <ComponentTitle />
        </div>
    )
}

export default TeamMemberRecords