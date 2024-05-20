import React from 'react';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectValue
} from "../ui/select";

interface ProvinceOption {
  label: string;
  value: string;
}

interface ProvinceProps {
  value?: string;
  onChange?: (value: string) => void;
}

const Province: React.FC<ProvinceProps> = ({ onChange }) => {
  const provinceOptions: ProvinceOption[] = [
    { label: "Select a Province", value: "select-a-province" },
  ];

  const handleValueChange = (newValue: string) => {
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <Select onValueChange={handleValueChange} defaultValue="select-a-province">
      <SelectTrigger className="h-[50px] py-3.5 mb-6">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {provinceOptions.map((option) => (
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

export default Province;
