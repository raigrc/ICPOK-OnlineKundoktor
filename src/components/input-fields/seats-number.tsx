import React from 'react';
import { Input } from "../ui/input";

type NoOfSeatsProps = {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const NoOfSeats: React.FC<NoOfSeatsProps> = ({ onChange, value, ...rest }) => {
  return (
    <Input
      label="No. of Seats: "
      placeholder="37"
      type="number"
      className="bg-transparent border-white rounded-md py-6 pl-[110px]"
      onChange={onChange}
      value={value}
      {...rest}
    />
  );
};

export default NoOfSeats;