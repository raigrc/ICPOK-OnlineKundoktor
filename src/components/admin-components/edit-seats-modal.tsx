import * as Dialog from '@radix-ui/react-dialog';
import { Button } from "../ui/button";
import SeatsLeftRow from "../input-fields/seats-left-row";
import SeatsRightRow from "../input-fields/seats-right-row";
import NoOfSeats from "../input-fields/seats-number";
import SeatsDisplay from "../admin-components/seats-display";
const EditSeatsModal = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <Button className="bg-white text-black absolute right-0 px-3 my-1 mr-8 font-bold text-sm z-10">
        Edit
      </Button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black-200 data-[state=open]:animate-overlayShow fixed inset-0 z-20 opacity-75" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-100 w-[100vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-black-300 p-[25px] shadow-[0px_10px_38px_rgba(0, 0, 0, 0.35), 0px_10px_20px_rgba(0, 0, 0, 0.2)] focus:outline-none z-20">
        <Dialog.Title className="text-white m-0 text-2xl font-medium">
          Edit Seats
        </Dialog.Title>
        <div className="grid grid-cols-1 gap-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <SeatsLeftRow />
              <SeatsRightRow />
            </div>
            <div>
              <NoOfSeats />
            </div>
            <div>
              <SeatsDisplay />
            </div>
        </div>
        <div className="grid grid-cols-1 gap-3 mt-4">
          <Button className="text-md font-bold p-6">Update</Button>
        </div>
        <Dialog.Close asChild>
          <Button 
            className="bg-white text-black focus:shadow-black absolute top-[25px] right-[27px] inline-flex h-[32px] w-[30px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close">
            X
          </Button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default EditSeatsModal;