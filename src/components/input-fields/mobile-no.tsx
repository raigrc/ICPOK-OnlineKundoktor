import React from 'react';
import { Input } from "../ui/input";

type MobileNoProps = {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const MobileNo: React.FC<MobileNoProps> = ({ onChange, value, ...rest }) => {
  return (
    <Input
      label="Mobile No: "
      className="bg-transparent border-white rounded-md py-6 pl-[100px] mb-6"
      placeholder="+63"
      maxLength={13}
      onChange={onChange}
      value={value}
      {...rest}
    />
  );
};

export default MobileNo;