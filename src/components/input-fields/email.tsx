import React from 'react';
import { Input } from "../ui/input";

type emailProps = {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const email: React.FC<emailProps> = ({ onChange, value, ...rest }) => {
  return (
    <Input
      label="Email: "
      placeholder="sample@gmail.com"
      className="bg-transparent border-white rounded-md py-6 pl-[60px] mb-6"
      onChange={onChange}
      value={value}
      {...rest}
    />
  );
};

export default email;