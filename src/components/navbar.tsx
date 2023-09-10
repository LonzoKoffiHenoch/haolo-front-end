import Link from "next/link";
import Container from "@/components/container";

export function Navbar() {
    return (
        <Container>
            <div className={" py-6 flex items-center justify-between  z-40 bg-white"}>

                <Link href={"w-8 "}>
                    <img src={"/images/logo/black.png"} className={"w-36"}/>
                </Link>

                <div className={"flex gap-x-4"}>
                    {navItems.map((item, index) => (
                        <div key={index}
                             className={"cursor-pointer relative hover:text-primary after:w-8 after:h-[2px] after:absolute after:-bottom-1 after:left-0 hover:after:bg-primary hover:after:w-[100%] hover:after:duration-300"}>
                            <Link href={`/${item.link}`} className={"uppercase text-sm"}>{item.title}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    )
}

const navItems = [
    {
        title: "Résidences",
        link: "residences"
    },
    {
        title: "Hôtels",
        link: "hotels"
    },
    {
        title: "Véhicules",
        link: "vehicules"
    },
    {
        title: "Habitations",
        link: "habitations"
    },
    {
        title: "Paradis Enfant",
        link: "paradis-enfant"
    },
    {
        title: "Accessoires",
        link: "accessoires"
    },
]
