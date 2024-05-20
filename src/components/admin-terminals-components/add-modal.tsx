import * as Dialog from '@radix-ui/react-dialog';
import { Button } from "../ui/button";
import { BiPlus } from "react-icons/bi";
import EditTerminalName from '../input-fields/edit-terminal-name';
import Province from '../input-fields/province';
import City from '../input-fields/city';

const EditModal = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <Button className='w-full p-7 font-bold text-md gap-2'>
        <BiPlus size={20} />
        New Terminal
      </Button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black-200 data-[state=open]:animate-overlayShow fixed inset-0 z-20 opacity-75" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[100vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-black-300 p-[25px] shadow-[0px_10px_38px_rgba(0, 0, 0, 0.35), 0px_10px_20px_rgba(0, 0, 0, 0.2)] focus:outline-none z-20">
        <Dialog.Title className="text-white m-0 text-2xl font-medium">
          New Terminal
        </Dialog.Title>
        <div className="grid grid-rows-3 mt-6">
          <div><EditTerminalName/></div>
          <div><Province/></div>
          <div><City/></div>
          <Button className="text-md font-bold p-6">Add Terminal</Button>
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

export default EditModal;
