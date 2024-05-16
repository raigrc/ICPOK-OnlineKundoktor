import React from "react";
import { Button } from "./button";
import { Input } from "./input";
import search from "../../assets/images/search-icon.svg";
import company from "../../assets/images/company.svg";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const BookSeatsForm = () => {
  return (
    <>
      <div className="text-[80px]">Book Your Seats Now!</div>
      <div className="space-x-4 grid grid-cols-2 w-full">
        <Button className="bg-white">One Way</Button>
        <Button className="bg-transparent border-white" variant="outline">
          Round Trip
        </Button>
      </div>
      <div className="space-x-4 grid grid-cols-2 w-full">
        <div className="flex flex-col">
          <Select id="company">
          <SelectTrigger className="text-sm-bold">Company:
              <SelectValue className="" placeholder="Select a Company" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Bus Line Companies</SelectLabel>
                <SelectItem value="apple">JAC Liner</SelectItem>
                <SelectItem value="banana">Joybus Trasport</SelectItem>
                <SelectItem value="blueberry">PP Bus Lines</SelectItem>
                <SelectItem value="grapes">Metro Cebu Autobus Corp.</SelectItem>
                <SelectItem value="pineapple">Narpin Transport</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Input
          label="Passenger: "
          className="w-full rounded-md pl-28 bg-transparent border-white"
          placeholder="10"
        />
      </div>
      <div className="space-x-4 grid grid-cols-2 w-full">
        <div className="flex">
          <Input
            label="From: "
            className="w-1/2 pl-20 bg-transparent rounded-l-md border-white border-r-0"
            placeholder="Origin"
          />
          <Input
            label="To: "
            className="w-1/2 pl-12 bg-transparent rounded-r-md border-white"
            placeholder="Destination"
          />
        </div>
        <Input
          label="Departure: "
          type="date"
          className="pl-28 rounded-md bg-transparent border-white"
        />
      </div>
      <div className="space-x-4 flex w-full">
        <Button className="w-full bg-white gap-2">
          <img src={search} alt="" />
          Search
        </Button>
      </div>
    </>
  );
};

export default BookSeatsForm;
