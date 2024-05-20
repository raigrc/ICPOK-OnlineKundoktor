import { IoEllipsisHorizontal } from "react-icons/io5";
import * as Popover from '@radix-ui/react-popover';
import EditModal from "./edit-modal";
import RemoveModal from "./remove-modal";
import { Button } from "../ui/button";

const EllipsisDropdown = ({ id }: { id: number | string }) => {
    return (<div className="flex justify-center items-center">
        <input type="hidden" value={id} />
        <Popover.Root>
            <Popover.Trigger className="PopoverTrigger cursor-pointer">
                <IoEllipsisHorizontal size={25} />
            </Popover.Trigger>
            <Popover.Portal>
            <Popover.Content className="PopoverContent grid grid-cols-1 p-5 bg-black-300 rounded-md" sideOffset={5}>
                <Button className="bg-transparent text-white hover:bg-black-200">
                    <a href="/admin/buses/fleet" target="_blank">
                        Open
                    </a>
                </Button>
                <EditModal/>
                <RemoveModal/>
            </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    </div>
    );
};

export default EllipsisDropdown;
