import React from 'react';
import { Input } from "../ui/input";

type EditTerminalNameProps = {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const editTerminalName: React.FC<EditTerminalNameProps> = ({ onChange, value, ...rest }) => {
  return (
    <Input
      label="Name: "
      placeholder="Legazpi Central Grand"
      className="bg-transparent border-white rounded-md py-6 pl-[70px]"
      onChange={onChange}
      value={value}
      {...rest}
    />
  );
};

export default editTerminalName;