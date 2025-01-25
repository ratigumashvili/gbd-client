import dynamic from "next/dynamic";
import Loading from "../Loading";

const Calendar = dynamic(() => import('./Calendar'), {
    ssr: false,
    loading: () => <Loading />,
})

export default Calendar