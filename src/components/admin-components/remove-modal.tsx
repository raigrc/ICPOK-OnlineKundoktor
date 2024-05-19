import * as Dialog from '@radix-ui/react-dialog';
import { Button } from "../ui/button";

const RemoveModal = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <Button className="bg-transparent text-white hover:bg-black-200">
        Remove
      </Button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black-200 data-[state=open]:animate-overlayShow fixed inset-0 z-20 opacity-75" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-black-300 p-[25px] shadow-[0px_10px_38px_rgba(0, 0, 0, 0.35), 0px_10px_20px_rgba(0, 0, 0, 0.2)] focus:outline-none z-20">
        <Dialog.Title className="text-[#FE8181] m-0 text-2xl font-bold">
          Remove Model
        </Dialog.Title>
        <div className="grid grid-rows-2 mt-4">
          <div className="font-semibold">
            Are you sure you want remove <span className="text-[#FE8181]">DMMC DM11</span>? This will remove all of its fleet numbers including schedules, tickets, etc.
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <Button className="bg-[#FE8181] text-md font-bold p-6">Yes, remove it!</Button>
            <Dialog.Close asChild>
              <Button className="text-md font-bold p-6">No, don't!</Button>
            </Dialog.Close>
          </div>
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

export default RemoveModal;
