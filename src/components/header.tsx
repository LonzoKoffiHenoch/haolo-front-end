import {Navbar} from "@/components/navbar";
import {HeadSection} from "@/components/headSection";
import {Separator} from "@/components/ui/separator"

export function Header() {
    return (
        <div className={""}>
            <HeadSection/>
            <Separator orientation="horizontal"/>
            <Navbar/>
           
        </div>
    );
}
