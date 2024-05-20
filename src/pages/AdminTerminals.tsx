import SearchBar from "../components/admin-terminals-components/search-bar";
import Pagination from "../components/admin-terminals-components/pagination";
import Table from "../components/admin-terminals-components/table";
import AddModal from "../components/admin-terminals-components/add-modal";

const AdminTerminals = () => {
    const columns = [
        { key: 'terminal_name', title: 'Terminal Name' },
        { key: 'province', title: 'Province' },
        { key: 'city', title: 'City' },
        { key: 'created_at', title: 'Created at' },
        { key: 'actions', title: 'Actions' },
    ];
    
    const data = [
        { terminal_name: 'Terminal Name', province: 'Laguna', city: 'Santa Rosa', created_at: '18 October 2024', actions: 1 },
        { terminal_name: 'Terminal Name', province: 'Laguna', city: 'Santa Rosa', created_at: '18 October 2024', actions: 2 },
        { terminal_name: 'Terminal Name', province: 'Laguna', city: 'Santa Rosa', created_at: '18 October 2024', actions: 3 },
        { terminal_name: 'Terminal Name', province: 'Laguna', city: 'Santa Rosa', created_at: '18 October 2024', actions: 4 },
    ];

  return <div className="bg-black-200 py-16 px-20">
    <div className="flex justify-between items-start">
        <div>
            <div className="text-4xl font-semibold">Terminals</div>
        </div>
        <div>
            <AddModal />
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

export default AdminTerminals;
