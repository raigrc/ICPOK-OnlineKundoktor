import React from 'react';
import { Input } from "../ui/input";

type FirstNameProps = {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const FirstName: React.FC<FirstNameProps> = ({ onChange, value, ...rest }) => {
  return (
    <Input
      label="First Name: "
      className="bg-transparent border-white rounded-md py-6 pl-[100px] mb-6"
      onChange={onChange}
      value={value}
      {...rest}
    />
  );
};

export default FirstName;
