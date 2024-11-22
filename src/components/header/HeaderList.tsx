import {headerListItems} from "@/lib/data";
import {Search} from "lucide-react";
import Link from "next/link";

const HeaderList = () => {

    return (

        <div className="flex flex-col space-y-4 p-4 justify-center items-center lg:flex-row lg:space-y-0 lg:space-x-6">

            <>
                {headerListItems.map((e) => (
                    <Link key={e.id} className={`text-slate ${e.className}`} href="/">
                        {e.name}
                    </Link>
                ))}
            </>

            <Search className="bg-primary p-1 rounded-full text-slate"/>


        </div>

    )


}

export default HeaderList;