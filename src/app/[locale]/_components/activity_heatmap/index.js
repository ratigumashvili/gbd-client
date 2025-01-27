import dynamic from "next/dynamic";
import Loading from "@/src/app/[locale]/_components/Loading"

const Calendar = dynamic(() => import('./Calendar'), {
    ssr: false,
    loading: () => <Loading />,
})

export default Calendar