import { Button } from "@/components/ui/button";
import { BiPlus } from "react-icons/bi";
import SearchBar from "../components/admin-components/search-bar";
import Pagination from "../components/admin-components/pagination";

const AdminBuses = () => {
  return <div className="bg-black-200 h-full">
    <div className="py-16 px-20">
        <div className="flex justify-between items-start">
            <div>
                <div className="text-4xl font-semibold">Buses</div>
            </div>
            <div>
                <Button className='w-full p-7 font-bold text-md gap-2'><BiPlus size={20} />New Model</Button>
            </div>
        </div>
        <div className="pt-7">
            <div>
                <SearchBar />
            </div>
        </div>
        <div>
            <Pagination />
        </div>
    </div>
</div>;
};

export default AdminBuses;
