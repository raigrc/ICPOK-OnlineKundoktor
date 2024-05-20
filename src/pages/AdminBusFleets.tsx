import SearchBar from "../components/admin-fleets-components/search-bar";
import Pagination from "../components/admin-fleets-components/pagination";
import Table from "../components/admin-fleets-components/table";
import AddModal from "../components/admin-fleets-components/add-modal";

const AdminBusFleets = () => {
    const columns = [
        { key: 'fleet_no', title: 'Fleet No.' },
        { key: 'bus_type', title: 'Bus Type' },
        { key: 'plate_no', title: 'Plate No.' },
        { key: 'created_at', title: 'Created at' },
        { key: 'actions', title: 'Actions' },
    ];
    
    const data = [
        { fleet_no: 200, bus_type: 'City', plate_no: '123ABC', created_at: '18 May 2024', actions: 1 },
        { fleet_no: 201, bus_type: 'Provincial', plate_no: '123ABC', created_at: '18 May 2024', actions: 2 },
        { fleet_no: 202, bus_type: 'Point-to-Point', plate_no: '123ABC', created_at: '18 May 2024', actions: 3 },
        { fleet_no: 203, bus_type: 'Airport Shuttle', plate_no: '123ABC', created_at: '18 May 2024', actions: 4 },
    ];

  return <div className="bg-black-200 py-16 px-20">
    <div className="flex justify-between items-start">
        <div>
            <div className="text-4xl font-semibold">DMMC DM11</div>
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

export default AdminBusFleets;
