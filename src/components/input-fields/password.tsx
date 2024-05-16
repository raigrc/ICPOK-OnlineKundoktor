import { Input } from "../ui/input";

const password = () => {
  return (
    <Input
      label="Password: "
      placeholder="***********"
      className="bg-transparent border-white rounded-md py-6 pl-[90px]"
    />
  );
};

export default password;
