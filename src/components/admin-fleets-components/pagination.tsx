import { Button } from "@/components/ui/button";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Pagination = ({ className }: { className?: string }) => {
  return <div className={className}>
    <div className="flex justify-between flex-wrap">
        <div className="flex items-center">
            1 - 4 out of 1000 Buses
        </div>
        <div className="flex items-center">
            <span className="pr-2">Showing</span>
            <select className="text-black p-2 rounded-md">
                <option value="5">5</option>
                <option value="20">25</option>
                <option value="50">50</option>
            </select>
            <span className="pl-2 pr-5">items</span>
            <div className="flex items-center flex-wrap">
                <Button className="p-2 mr-2"><BiChevronLeft size={25} /></Button>
                <Button className="p-4 mx-2 bg-black-300 text-white hover:bg-black-300 text-md">1</Button>
                <span className="p-4">...</span>
                <Button className="p-4 mx-2 bg-transparent text-white hover:bg-black-300 text-md">2</Button>
                <Button className="p-4 mx-2 bg-transparent text-white hover:bg-black-300 text-md">3</Button>
                <Button className="p-4 mx-2 bg-transparent text-white hover:bg-black-300 text-md">4</Button>
                <span className="p-4">...</span>
                <Button className="p-4 mx-2 bg-transparent text-white hover:bg-black-300 text-md">9</Button>
                <Button className="p-2 ml-2"><BiChevronRight size={25} /></Button>
            </div>
        </div>
    </div>
  </div>;
};

export default Pagination;
