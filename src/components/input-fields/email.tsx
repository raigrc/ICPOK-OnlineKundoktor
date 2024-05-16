import { Input } from "../ui/input";

const email = () => {
  return (
    <Input
      label="Email: "
      placeholder="sample@gmail.com "
      className="bg-transparent border-white rounded-md py-6 pl-[60px] mb-6"
    />
  );
};

export default email;
