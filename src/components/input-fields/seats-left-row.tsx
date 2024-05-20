import React from 'react';
import { Input } from "../ui/input";

type SitsLeftRowProps = {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const SitsLeftRow: React.FC<SitsLeftRowProps> = ({ onChange, value, ...rest }) => {
  return (
    <Input
      label="Left Row: "
      placeholder="2"
      type="number"
      className="bg-transparent border-white rounded-md py-6 pl-[90px]"
      onChange={onChange}
      value={value}
      {...rest}
    />
  );
};

export default SitsLeftRow;