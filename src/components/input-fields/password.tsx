import React, { useState } from "react";
import { Input } from "../ui/input";
import { BsEyeSlash, BsEye } from "react-icons/bs";

type PasswordProps = {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Password: React.FC<PasswordProps> = ({ onChange, value, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="relative">
      <Input
        type={showPassword ? "text" : "password"}
        label="Password: "
        placeholder="***********"
        className="bg-transparent border-white rounded-md py-6 pl-[88px] pr-[40px]" // Adjust padding to accommodate the icon
        onChange={onChange}
        value={value}
        {...rest}
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
      >
        {showPassword ? (
          <BsEye className="text-white" size={20} />
        ) : (
          <BsEyeSlash className="text-white" size={20} />
        )}
      </button>
    </div>
  );
};

export default Password;
