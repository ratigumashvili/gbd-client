import dynamic from "next/dynamic";

const Map = dynamic(() => import('./HomePageMap'), {
    ssr: false,
    loading: () => <p>Loading...</p>,
})

export default Map