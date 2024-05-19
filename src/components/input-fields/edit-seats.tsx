import React from 'react';
import { Input } from "../ui/input";

type EditSeatsProps = {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const editSeats: React.FC<EditSeatsProps> = ({ onChange, value, ...rest }) => {
  return (
    <Input
      label="Seats: "
      placeholder="2x2 (37)"
      className="bg-transparent border-white rounded-md py-6 pl-[120px]"
      onChange={onChange}
      value={value}
      {...rest}
    />
  );
};

export default editSeats;