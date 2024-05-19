import React from 'react';
import { Input } from "../ui/input";

type SitsRightRowProps = {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const SitsRightRow: React.FC<SitsRightRowProps> = ({ onChange, value, ...rest }) => {
  return (
    <Input
      label="Right Row: "
      placeholder="2"
      type="number"
      className="bg-transparent border-white rounded-md py-6 pl-[100px]"
      onChange={onChange}
      value={value}
      {...rest}
    />
  );
};

export default SitsRightRow;