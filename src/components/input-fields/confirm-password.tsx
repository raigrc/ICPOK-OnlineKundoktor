import React from "react";
import { Input } from "../ui/input";

type confirmPasswordProps = {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const confirmPassword: React.FC<confirmPasswordProps> = ({
  onChange,
  value,
  ...rest
}) => {
  return (
    <Input
      type="password"
      label="Confirm Password: "
      placeholder="***********"
      className="bg-transparent border-white rounded-md py-6 pl-[150px]"
      onChange={onChange}
      value={value}
      {...rest}
    />
  );
};

export default confirmPassword;
