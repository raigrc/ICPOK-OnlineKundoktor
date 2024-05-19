import { IoEllipsisHorizontal } from "react-icons/io5";

interface Column {
    key?: string;
    title?: string;
}
  
interface RowData {
    [key: string]: string | number;
}
  
const Table: React.FC<{ columns: Column[]; data: RowData[] }> = ({ columns, data }) => {
    return (
      <div className="w-full shadow rounded overflow-hidden">
        <table className="w-full text-center">
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column.key || undefined} className="px-6 py-4 text-md font-semibold bg-black-300 tracking-wider">
                        {column.title ? column.title : ''}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={row.id || index} className={index % 2 === 0 ? 'bg-black-100' : 'bg-black-200'}>
                    {columns.map((column) => (
                        <td key={column.key || `${index}-${column.key}`} className="px-6 py-4 whitespace-nowrap">
                        {column.key === 'actions' ? (
                            <div className="flex justify-center items-center">
                                <IoEllipsisHorizontal size={25} className="cursor-pointer" />
                            </div>
                        ) : (
                            column.key && row[column.key]
                        )}
                        </td>
                    ))}
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    );
};
  
export default Table;
  