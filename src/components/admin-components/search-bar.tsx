import React from 'react';
import { Input } from "../ui/input";
import { TbZoom } from "react-icons/tb";
import { Button } from "@/components/ui/button";

type SearchBarProps = {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const SearchBar: React.FC<SearchBarProps> = ({ onChange, value, ...rest }) => {
  return (<>
        <div className="flex justify-between">
            <span>
                <TbZoom size={30} className="absolute ml-6 mt-4" />
            </span>
            <span>
                <Button className='absolute right-0 px-5 py-5 mt-3 mr-28 font-bold text-md z-10'>Search</Button>
            </span>
        </div>
        <Input
        placeholder="Search"
        className="bg-transparent border-white rounded-md py-8 pl-[60px] mb-6"
        onChange={onChange}
        value={value}
        {...rest}
        />
    </>
  );
};

export default SearchBar;
