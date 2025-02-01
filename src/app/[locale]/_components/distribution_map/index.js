import dynamic from "next/dynamic";
import SkeletonLoader from "@/src/app/[locale]/_components/SkeletonLoader"

const Map = dynamic(() => import('./Distribution'), {
    ssr: false,
    loading: () => <SkeletonLoader classNames={"w-full h-[450px] mt-12"} />
})

export default Map