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

const Suffix = () => {
  const suffixOptions: SuffixOption[] = [
    { label: "Select Your Suffix", value: "select-your-suffix" },
    { label: "Jr.", value: "jr" },
    { label: "Sr.", value: "sr" },
    { label: "III", value: "iii" },
  ];

  return (
    <Select defaultValue="select-your-suffix">
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
