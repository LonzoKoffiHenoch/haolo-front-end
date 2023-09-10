import {HiPhone} from "react-icons/hi2";
import {IoMdMailUnread} from "react-icons/io";
import Container from "@/components/container";
import {Divide} from "@/components/ui/divide";
import {NetworkSocial} from "@/components/networkSocial";
import {TbLogout, TbLogout2} from "react-icons/tb";
import {GiHamburgerMenu} from "react-icons/gi";


const info = [
    {
        label: "0707517297",
        icon: <HiPhone/>
    },
    {
        label: "info@haolo.ci",
        icon: <IoMdMailUnread/>
    },
    {}

]

export function HeadSection() {
    return (
        <Container>
            <div className={"min-h-max py-3 flex items-center justify-between"}>
                <div className={"flex items-center gap-x-5"}>
                    {info.map((value, index: number) => (
                        <div key={index} className={"flex items-center gap-x-2"}>
                            <span>{value.icon}</span>
                            <div>{value.label}</div>
                        </div>
                    ))}
                </div>
                <Divide/>
                <div className={"flex items-center gap-x-10"}>
                    <NetworkSocial/>
                    <div className={"flex items-center gap-x-2"}>
                    <span className={"flex items-center gap-x-1"}>
                   <TbLogout2/>
                    <span>Se connecter</span>
                </span>
                        <Divide/>
                        <span className={"flex items-center gap-x-1"}>
                   <TbLogout/>
                    <span>S'enregistrer</span>
                </span>
                        <Divide/>
                    </div>
                    <span
                        className={"py-2 px-3 bg-primary rounded-md text-white hover:bg-secondary cursor-pointer"}>
                    <GiHamburgerMenu/>
                </span>
                </div>

            </div>
        </Container>
    );
}
