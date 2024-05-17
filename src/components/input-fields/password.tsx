import React from 'react';
import { Input } from "../ui/input";

type passwordProps = {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const password: React.FC<passwordProps> = ({ onChange, value, ...rest }) => {
  return (
    <Input
      label="Password: "
      placeholder="***********"
      className="bg-transparent border-white rounded-md py-6 pl-[90px]"
      onChange={onChange}
      value={value}
      {...rest}
    />
  );
};

export default password;