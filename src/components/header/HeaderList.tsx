import {headerListItems} from "@/lib/data";
import { Search } from "lucide-react";

const HeaderList = () => {

    return (

        <div className="flex justify-center items-center space-x-6">

            <>


            
            {headerListItems.map((e) => (
                <a key={e.id} className={`text-slate ${e.className}`} href="/">
                    {e.name}
                </a>
            ))}   
            </>

            <Search className="bg-primary p-1 rounded-full text-slate" />

         
           
        </div>

    )


}

export default HeaderList;