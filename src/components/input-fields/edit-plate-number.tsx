import React from 'react';
import { Input } from "../ui/input";

type EditPlateNumberProps = {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const editPlateNumber: React.FC<EditPlateNumberProps> = ({ onChange, value, ...rest }) => {
  return (
    <Input
      label="Plate No: "
      placeholder="123ABC"
      className="bg-transparent border-white rounded-md py-6 pl-[90px]"
      onChange={onChange}
      value={value}
      type="text"
      {...rest}
    />
  );
};

export default editPlateNumber;