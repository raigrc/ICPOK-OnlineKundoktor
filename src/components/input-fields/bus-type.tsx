import React from 'react';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectValue
} from "../ui/select";

interface BusTypeOption {
  label: string;
  value: string;
}

interface BusTypeProps {
  value?: string;
  onChange?: (value: string) => void;
}

const BusType: React.FC<BusTypeProps> = ({ onChange }) => {
  const busTypeOptions: BusTypeOption[] = [
    { label: "Select a Type", value: "select-a-type" },
  ];

  const handleValueChange = (newValue: string) => {
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <Select onValueChange={handleValueChange} defaultValue="select-a-type">
      <SelectTrigger className="h-[50px] py-3.5 mb-6">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {busTypeOptions.map((option) => (
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

export default BusType;
