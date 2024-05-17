import React from 'react';
import { Input } from "../ui/input";

type LastNameProps = {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const LastName: React.FC<LastNameProps> = ({ onChange, value, ...rest }) => {
  return (
    <Input
      label="Last Name: "
      className="bg-transparent border-white rounded-md py-6 pl-[100px] mb-6"
      onChange={onChange}
      value={value}
      {...rest}
    />
  );
};

export default LastName;
