import React from 'react';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectValue
} from "../ui/select";

interface SuffixOption {
  label: string;
  value: string;
}

interface SuffixProps {
  value?: string;
  onChange?: (value: string) => void;
}

const Suffix: React.FC<SuffixProps> = ({ onChange }) => {
  const suffixOptions: SuffixOption[] = [
    { label: "Select Your Suffix", value: "select-your-suffix" },
    { label: "Jr.", value: "jr" },
    { label: "Sr.", value: "sr" },
    { label: "III", value: "iii" },
  ];

  const handleValueChange = (newValue: string) => {
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <Select onValueChange={handleValueChange} defaultValue="select-your-suffix">
      <SelectTrigger className="h-[50px] py-3.5 mb-6">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {suffixOptions.map((option) => (
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

export default Suffix;
