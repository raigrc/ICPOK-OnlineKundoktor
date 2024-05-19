import React from 'react';
import { Input } from "../ui/input";

type EditModelNameProps = {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const editModelName: React.FC<EditModelNameProps> = ({ onChange, value, ...rest }) => {
  return (
    <Input
      label="Model Name: "
      placeholder="DDMCDMMC DM17"
      className="bg-transparent border-white rounded-md py-6 pl-[120px]"
      onChange={onChange}
      value={value}
      {...rest}
    />
  );
};

export default editModelName;