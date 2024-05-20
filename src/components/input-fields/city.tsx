import React from 'react';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectValue
} from "../ui/select";

interface CityOption {
  label: string;
  value: string;
}

interface CityProps {
  value?: string;
  onChange?: (value: string) => void;
}

const Province: React.FC<CityProps> = ({ onChange }) => {
  const cityOptions: CityOption[] = [
    { label: "Select a City", value: "select-a-city" },
  ];

  const handleValueChange = (newValue: string) => {
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <Select onValueChange={handleValueChange} defaultValue="select-a-city">
      <SelectTrigger className="h-[50px] py-3.5 mb-6">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {cityOptions.map((option) => (
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
