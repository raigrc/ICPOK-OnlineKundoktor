import React from 'react';
import { Input } from "../ui/input";

type EditFleetNumberProps = {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const editFleetNumber: React.FC<EditFleetNumberProps> = ({ onChange, value, ...rest }) => {
  return (
    <Input
      label="Fleet No: "
      placeholder="200"
      className="bg-transparent border-white rounded-md py-6 pl-[90px]"
      onChange={onChange}
      value={value}
      type="number"
      {...rest}
    />
  );
};

export default editFleetNumber;