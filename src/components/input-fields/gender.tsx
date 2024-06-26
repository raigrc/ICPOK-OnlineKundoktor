import React from 'react';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectValue
} from "../ui/select";

interface GenderOption {
  label: string;
  value: string;
}

interface GenderProps {
  value?: string;
  onChange?: (value: string) => void;
}

const Gender: React.FC<GenderProps> = ({ onChange }) => {
  const genderOptions: GenderOption[] = [
    { label: "Select Your Gender", value: "select-your-gender" },
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  const handleValueChange = (newValue: string) => {
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <Select onValueChange={handleValueChange} defaultValue="select-your-gender">
      <SelectTrigger className="h-[50px] py-3.5 mb-6">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {genderOptions.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Gender;
