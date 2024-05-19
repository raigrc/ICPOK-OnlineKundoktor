import React from 'react';
import { Input } from "../ui/input";
import { Button } from "@/components/ui/button";

type EditSeatsProps = {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const editSeats: React.FC<EditSeatsProps> = ({ onChange, value, ...rest }) => {
  return (<>
    <span>
      <Button className='absolute right-0 px-3 my-1 mr-8 font-bold text-sm z-10'>Search</Button>
    </span>
    <Input
      label="Seats: "
      placeholder="2x2 (37)"
      className="bg-transparent border-white rounded-md py-6 pl-[70px]"
      onChange={onChange}
      value={value}
      {...rest}
    />
  </>);
};

export default editSeats;