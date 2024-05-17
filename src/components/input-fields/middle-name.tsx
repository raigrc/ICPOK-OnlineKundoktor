import React from 'react';
import { Input } from "../ui/input";

type MiddleNameProps = {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const MiddleName: React.FC<MiddleNameProps> = ({ onChange, value, ...rest }) => {
  return (
    <Input
      label="Middle Name: "
      className="bg-transparent border-white rounded-md py-6 pl-[120px] mb-6"
      onChange={onChange}
      value={value}
      {...rest}
    />
  );
};

export default MiddleName;
