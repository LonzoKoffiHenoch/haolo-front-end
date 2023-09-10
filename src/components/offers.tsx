import Link from "next/link";
import {ChevronRight} from "lucide-react";
import {CardOffers} from "@/components/cardOffers";
import Container from "@/components/container";

export function Offers() {
    return (
        <Container>
            <div className={"mt-16 pb-8"}>
                <div className={"flex justify-between"}>
                    <h4 className={"text-2xl text-primary uppercase font-semibold"}>Nos offres du moment</h4>
                    <Link href={"/"} className={"text-primary flex hover:text-black items-center gap-x-1"}>
                        <span>Voir plus </span>
                        <ChevronRight className={"w-4"}/>
                    </Link>
                </div>

                <h5 className={"text-lg text-gray-600"}>Choississez parmis les établissments adaptés à la fois au
                    travail et
                    à la
                    détente</h5>

                {/*    Card*/}
                <div className={"flex gap-x-8 mt-12"}>
                    {itemsCard.map((item, index) => (
                        <CardOffers key={index}/>
                    ))}
                </div>

            </div>
        </Container>
    );
}


const itemsCard = [
    {},
    {},
    {},
]