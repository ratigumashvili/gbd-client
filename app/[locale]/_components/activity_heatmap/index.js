import dynamic from "next/dynamic";

const Calendar = dynamic(() => import('./Calendar'), {
    ssr: false,
    loading: () => <p>Loading...</p>,
})

export default Calendar