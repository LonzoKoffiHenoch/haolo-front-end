import {BsGeoAlt} from "react-icons/bs";
import {AiFillStar, AiOutlineHeart} from "react-icons/ai";
import {BiSolidTime} from "react-icons/bi";

export function CardOffers() {
    return (
        <div className={"rounded-xl shadow-xl w-[400px] pb-4 group hover:overflow-hidden"}>
            <div>
                <div className={"relative"}>
                    <div className={"overflow-hidden rounded-t-xl"}>
                        <img src="/images/slider-1.jpg" alt="test"
                             className={"rounded-t-xl group-hover:scale-110 object-cover duration-500 ease-in group-hover:duration-400 group-hover:ease-in-out"}/>
                    </div>
                    <div
                        className="absolute rounded-t-xl inset-0 bg-gradient-to-r from-black/30 to-transparent bg-opacity-10 ">

                    </div>
                    <div
                        className="absolute rounded-t-xl inset-0 bg-gradient-to-l from-black/30 to-transparent bg-opacity-10 ">

                    </div>

                    <div className={"absolute bottom-2 text-white px-6 flex gap-x-2 items-center"}>
                        <span>à partir</span>
                        <span className={"font-bold text-xl"}>120 000 FCFA</span>
                    </div>
                    <div
                        className={"absolute top-4 right-6 px-2 rounded-full bg-gray-400/60 text-white py-2 hover:bg-primary cursor-pointer duration-300 transition-all"}>
                        <AiOutlineHeart/>
                    </div>
                </div>
            </div>

            <div className={"px-6 flex flex-col space-y-5"}>
                <div className={"mt-4 flex items-center gap-x-2 "}>
                    <BsGeoAlt/>
                    <span>Abidjan</span>
                </div>
                <div className={"text-[11px] uppercase"}>Stonehenge, Windsor Castle, and Bath</div>
                <div className={"flex gap-x-2"}>
                    <div className={"flex text-yellow-300 text-xl"}>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                    </div>
                    <h5 className={"text-red-700"}>30 reviews</h5>
                </div>

                <div className={"flex items-center gap-x-2 mb-4"}>
                    <BiSolidTime/>
                    <span>3 jours & 2 nuits</span>
                </div>
            </div>
        </div>
    )
}
