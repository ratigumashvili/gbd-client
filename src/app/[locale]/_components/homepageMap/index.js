import dynamic from "next/dynamic";
import Loading from "../Loading";

const Map = dynamic(() => import('./HomePageMap'), {
    ssr: false,
    loading: () => <Loading />,
})

export default Map