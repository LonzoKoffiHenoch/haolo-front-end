import {AiFillStar} from "react-icons/ai";
import {Button} from "@/components/ui/button";

export function Destination() {
    return (
        <div className={"mt-24 grid grid-cols-4"}>
            <div className={"bg-primary py-6 px-2 text-white uppercase text-center font-bold"}>
                <h2 className={"text-4xl"}>Destination les plus fréquentées</h2>
            </div>
            {itemsCard.map((value, index) => (
                <div key={index} className={"relative group overflow-hidden"}>
                    <img src={value.image} alt=""
                         className={"h-[440px] w-auto object-cover group-hover:scale-110 group-hover:duration-500 group-hover:ease-in-out"}/>
                    <div
                        className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent bg-opacity-10 ">

                    </div>
                    <div
                        className={"absolute bottom-2 text-white px-4 font-bold group-hover:opacity-0 group-hover:duration-500 group-hover:scale-x-110"}>
                        <div className={"flex items-center mb-1 text-yellow-400"}>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                        </div>
                        <span className={"text-xl"}>{value.label}</span>
                    </div>
                    <div
                        className={"absolute top-0 h-[440px] group-hover:bg-primary/70 w-[100%] group-hover:duration-500 group-hover:transition-all group-hover:ease-in-out z-30 flex items-center justify-center"}>
                        <Button variant={"outline"}
                                className={"scale-x-0 group-hover:visible group-hover:scale-x-110 group-hover:duration-700 group-hover:transition-all"}>Reservez
                            Maintenant</Button>
                    </div>

                </div>
            ))}
        </div>
    );
}


const itemsCard = [
    {
        label: "Abidjan",
        image: "/images/img.jpg"
    },
    {
        label: "Bonoua",
        image: "/images/img2.jpg"
    },
    {
        label: "Aboisso",
        image: "/images/img3.jpg"
    },
    {
        label: "Bingerville",
        image: "/images/slider-1.jpg"
    },
    {
        label: "Assounidé",
        image: "/images/slider-2.jpg"
    },
    {
        label: "San Pedro",
        image: "/images/slider-3.jpg"
    },
    {
        label: "Yamoussoukro",
        image: "/images/img6.jpg"
    },
]
