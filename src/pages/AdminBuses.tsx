import { Button } from "@/components/ui/button";
import { BiPlus } from "react-icons/bi";
import SearchBar from "../components/admin-components/search-bar";
import Pagination from "../components/admin-components/pagination";
import Table from "../components/admin-components/table";

const AdminBuses = () => {
    const columns = [
        { key: 'model_name', title: 'Model Name' },
        { key: 'seats', title: 'Seats' },
        { key: 'created_at', title: 'Created at' },
        { key: 'actions', title: 'Actions' },
    ];
    
    const data = [
        { model_name: 'DMMC DM11', seats: 30, created_at: '18 May 2024', actions: 1 },
        { model_name: 'DMMC DM12', seats: 31, created_at: '19 May 2024', actions: 2 },
        { model_name: 'DMMC DM13', seats: 32, created_at: '20 May 2024', actions: 3 },
        { model_name: 'DMMC DM14', seats: 33, created_at: '21 May 2024', actions: 4 },
        { model_name: 'DMMC DM15', seats: 34, created_at: '18 May 2024', actions: 5 },
        { model_name: 'DMMC DM16', seats: 33, created_at: '18 May 2024', actions: 6 },
        { model_name: 'DMMC DM17', seats: 33, created_at: '18 May 2024', actions: 7 },
        { model_name: 'DMMC DM18', seats: 33, created_at: '18 May 2024', actions: 8 },
        { model_name: 'DMMC DM19', seats: 33, created_at: '18 May 2024', actions: 9 },
        { model_name: 'DMMC DM20', seats: 33, created_at: '18 May 2024', actions: 10 },
        { model_name: 'DMMC DM21', seats: 33, created_at: '18 May 2024', actions: 11 },
        { model_name: 'DMMC DM22', seats: 33, created_at: '18 May 2024', actions: 12 },
        { model_name: 'DMMC DM23', seats: 33, created_at: '18 May 2024', actions: 13 },
        { model_name: 'DMMC DM24', seats: 33, created_at: '18 May 2024', actions: 14 },
    ];

  return <div className="bg-black-200 py-16 px-20">
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
    <Pagination className="mb-6" />
    <Table columns={columns} data={data} />
    <Pagination className="mt-6" />
</div>;
};

export default AdminBuses;
