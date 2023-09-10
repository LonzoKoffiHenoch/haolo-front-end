import {RiFacebookLine, RiInstagramLine, RiTwitterLine, RiYoutubeLine} from "react-icons/ri";
import Link from "next/link";

export function NetworkSocial() {
    return (
        <div>
            <div className={"flex items-center gap-x-4 text-xl z-40"}>
                <Link href={""} className={"hover:text-accent transition-all duration-300 cursor-pointer"}>
                    <RiYoutubeLine/>
                </Link>
                <Link href={""} className={"hover:text-accent transition-all duration-300 cursor-pointer"}>
                    <RiInstagramLine/>
                </Link>
                <Link href={""} className={"hover:text-accent transition-all duration-300 cursor-pointer"}>
                    <RiTwitterLine/>
                </Link>
                <Link href={""} className={"hover:text-accent transition-all duration-300 cursor-pointer"}>
                    <RiFacebookLine/>
                </Link>


            </div>
        </div>
    );
}
