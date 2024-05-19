import * as Dialog from '@radix-ui/react-dialog';
import { Button } from "../ui/button";


const OpenModal = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <Button className="bg-transparent text-white hover:bg-black-200">
        Open
      </Button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black-200 data-[state=open]:animate-overlayShow fixed inset-0 z-9999 opacity-75" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-black-300 p-[25px] shadow-[0px_10px_38px_rgba(0, 0, 0, 0.35), 0px_10px_20px_rgba(0, 0, 0, 0.2)] focus:outline-none z-9999">
        <Dialog.Title className="text-white m-0 text-2xl font-medium">
          Bus Details
        </Dialog.Title>
        <div className="grid grid-rows-3 mt-3">
          <div>Name: DMMC DM11</div>
          <div>Seats: 30</div>
          <div>Created at: 18 May 2024</div>
        </div>
        <div className="flex justify-end">
          <Dialog.Close asChild>
            <Button className="bg-white text-black">Close</Button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <Button 
            className="bg-white text-black focus:shadow-black absolute top-[27px] right-[27px] inline-flex h-[30px] w-[30px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close">
            X
          </Button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default OpenModal;
