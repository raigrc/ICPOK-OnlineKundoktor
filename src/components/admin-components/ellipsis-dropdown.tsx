import { IoEllipsisHorizontal } from "react-icons/io5";
import { Button } from "../ui/button";
import * as Popover from '@radix-ui/react-popover';
import OpenModal from "../admin-components/open-modal";
import EditModal from "../admin-components/edit-modal";

const EllipsisDropdown = ({ id }: { id: number | string }) => {
    return (<div className="flex justify-center items-center">
        <input type="hidden" value={id} />
        <Popover.Root>
            <Popover.Trigger className="PopoverTrigger cursor-pointer">
                <IoEllipsisHorizontal size={25} />
            </Popover.Trigger>
            <Popover.Portal>
            <Popover.Content className="PopoverContent grid grid-cols-1 p-5 bg-black-300 rounded-md" sideOffset={5}>
                <OpenModal/>
                <EditModal/>
                <Button className="bg-transparent text-white hover:bg-black-200">Remove</Button>
            </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    </div>
    );
};

export default EllipsisDropdown;
