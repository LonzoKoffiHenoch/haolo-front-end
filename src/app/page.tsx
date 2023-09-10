import Carousel from "@/components/carousel";
import {Offers} from "@/components/offers";
import {Destination} from "@/components/destination";

export default function Home() {
    return (
        <main className=" h-[300px] ">
            <Carousel/>
            <Offers/>
            <Destination/>
        </main>
    )
}
