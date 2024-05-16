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

const Gender = () => {
  const genderOptions: GenderOption[] = [
    { label: "Select Your Gender", value: "select-your-gender" },
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ];

  return (
    <Select defaultValue="select-your-gender">
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
