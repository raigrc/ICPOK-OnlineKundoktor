import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMonitor } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { FaRegSnowflake } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaBusSimple } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";

interface Props {}

const BookConfirmation = (props: Props) => {
  return (
    <div className="w-full max-w-screen-xl mx-auto ">
      <BreadCrumb />

      <div className="flex w-full space-x-3">
        <div className="w-3/4 py-3 space-y-3">
          {/* Travel Details */}
          <TravelDetails />

          {/* //Bus Details */}
          <BusDetails />

          {/* Passengers */}
          <Passenger />

          {/* Contact Details */}
          <ContactDetails />
          <div className="flex items-center justify-end py-6 space-x-3">
            <Button size="lg" variant="outline">
              Back
            </Button>
            <Button size="lg">Next</Button>
          </div>
        </div>

        <div className="w-1/4 py-3 ">
          <Card className="sticky top-2">
            <CardHeader className="border-b-2 border-primary">
              <CardTitle>Receipt</CardTitle>
            </CardHeader>
            <CardContent className="h-56">
              <div className="flex flex-row items-center justify-between flex-1">
                <h3>Tickets</h3>
                <div className="flex items-center justify-between w-1/4">
                  <p>&#8369;</p>
                  <p>999.00</p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between flex-1">
                <h3>Taxes</h3>
                <div className="flex items-center justify-between w-1/4">
                  <p>&#8369;</p>
                  <p>50.00</p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between flex-1">
                <h3>Discount</h3>
                <div className="flex items-center justify-between w-1/4 text-green-400">
                  <p>&#8369;</p>
                  <p>-50.00</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t-2 border-primary">
              <div className="flex flex-row items-center justify-between flex-1">
                <h3>Total</h3>
                <div className="flex items-center justify-between w-1/4">
                  <p>&#8369;</p>
                  <p>999.00</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

const BreadCrumb: React.FC = () => {
  return (
    <Breadcrumb className="py-6">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/travel-plan" className="text-green-400">
            Travel Plan
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/passenger-info" className="text-green-400">
            Passengers
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-green-400">
            Confirmation
          </BreadcrumbPage>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Payment Method</BreadcrumbPage>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
      </BreadcrumbList>
    </Breadcrumb>
  );
};

const TravelDetails: React.FC = () => {
  const travelDetails = [
    {
      Company: "DLTB Co.",
      From: "Cubao, Manila",
      To: "Legazpi Grand Central Terminal, Albay",
      Departure: "05:00pm (GMT+)",
      Arrival: "10:30pm (GMT+)",
      Duration: "5h 30m",
      Rating: 4.0,
      Reviews: 82,
    },
  ];
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between border-b-2 border-primary">
        <CardTitle>Travel Details</CardTitle>
        <CardTitle>Thu | May 18</CardTitle>
      </CardHeader>
      {travelDetails.map((details, index) => (
        <CardContent className="py-3 space-y-3" key={index}>
          <div className="flex items-center justify-between">
            <div className="flex w-2/3" id="left">
              <div className="flex w-40 space-x-2">
                <IoLocationOutline className="w-6 h-6" />
                <p>From</p>
              </div>
              <div className="flex items-center">
                <pre>:</pre>
                <p>{details.From}</p>
              </div>
            </div>
            <div className="flex space-x-3" id="right">
              <MdOutlineMonitor className="w-6 h-6" />
              <FaWifi className="w-6 h-6" />
              <FaRegSnowflake className="w-6 h-6" />
            </div>
          </div>

          <div>
            <div className="flex w-2/3">
              <div className="flex w-40 space-x-2">
                <IoLocationOutline className="w-6 h-6 stroke-green-400" />
                <p>To</p>
              </div>
              <div className="flex items-center">
                <pre>:</pre>
                <p>{details.To}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex w-2/3" id="left">
              <div className="flex w-40 space-x-2">
                <LuClock3 className="w-6 h-6" />
                <p>Departure</p>
              </div>
              <div className="flex items-center">
                <pre>:</pre>
                <p>{details.Departure}</p>
              </div>
            </div>

            <div id="right-rate">
              <h3 className="text-xl font-bold">{details.Rating}</h3>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex w-2/3" id="left">
              <div className="flex w-40 space-x-2">
                <LuClock3 className="w-6 h-6 stroke-green-400" />
                <p>Arrival</p>
              </div>
              <div className="flex items-center">
                <pre>:</pre>
                <p>{details.Arrival}</p>
              </div>
            </div>
            <div className="flex space-x-2 " id="right-ratestar">
              <FaStar className="w-6 h-6 fill-yellow-400" />
              <FaStar className="w-6 h-6 fill-yellow-400" />
              <FaStar className="w-6 h-6 fill-yellow-400" />
              <FaStar className="w-6 h-6 fill-yellow-400" />
              <FaRegStar className="w-6 h-6" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex w-2/3">
              <div className="flex w-40 space-x-2">
                <MdOutlineKeyboardDoubleArrowRight className="w-6 h-6 stroke-green-400" />
                <p>Duration</p>
              </div>
              <div className="flex items-center">
                <pre>:</pre>
                <p>{details.Duration}</p>
              </div>
            </div>
            <div id="review-number">
              <p className="text-sm">{details.Reviews} Reviews</p>
            </div>
          </div>
        </CardContent>
      ))}
    </Card>
  );
};

const BusDetails: React.FC = () => {
  const busDetails = [
    {
      Company: "DLTB Co.",
      Driver: "Juan Dela Cruz",
      PlateNumber: "123ABC",
    },
  ];
  return (
    <Card>
      <CardHeader className="border-b-2 border-primary">
        <CardTitle>Bus Details</CardTitle>
      </CardHeader>
      <CardContent className="py-3 space-y-3">
        <div>
          <div className="flex w-2/3">
            <div className="flex w-40 space-x-2">
              <FaRegBuilding className="w-6 h-6" />
              <p>Company</p>
            </div>
            <div className="flex items-center">
              <pre>:</pre>
              <p>{busDetails[0].Company}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex w-2/3">
            <div className="flex w-40 space-x-2">
              <IoPerson className="w-6 h-6" />
              <p>Driver Name</p>
            </div>
            <div className="flex items-center">
              <pre>:</pre>
              <p>{busDetails[0].Driver}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex w-2/3">
            <div className="flex w-40 space-x-2">
              <FaBusSimple className="w-6 h-6" />
              <p>Plate No.</p>
            </div>
            <div className="flex items-center">
              <pre>:</pre>
              <p>{busDetails[0].PlateNumber}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Passenger: React.FC = () => {
  const passengerList = [
    {
      Name: "Lorenz Palomares Artillagas ",
      Age: "Adult",
      Sex: "Male",
      Disabilities: "PWD",
    },
    {
      Name: "Lorenz Palomares Robles",
      Age: "Child",
      Sex: "Male",
      Disabilities: "",
    },
    {
      Name: "Anne Palomares Robles",
      Age: "Infant",
      Sex: "Female",
      Disabilities: "",
    },
  ];

  const seatList = ["1A", "1B", "1C"];
  return (
    <Card>
      <CardHeader className="border-b-2 border-primary">
        <CardTitle>Passengers</CardTitle>
      </CardHeader>
      {passengerList.map((details, index) => (
        <CardContent className="py-3 space-y-3" key={index}>
          {/* Passenger 1 */}
          <div>
            <div className="flex">
              <div className="flex w-40 space-x-2">
                <GoPerson className="w-6 h-6" />
                <p>#1</p>
              </div>
              <div className="flex divide-x-2">
                <pre>:</pre>
                <p className="px-2">{details.Name}</p>
                <p className="px-2">{details.Age}</p>
                <p className="px-2">{details.Sex}</p>
                <p className="px-2">{details.Disabilities}</p>
              </div>
            </div>
          </div>
        </CardContent>
      ))}
      <CardFooter className="border-t-2 border-primary">
        <CardContent className="flex items-center py-3 ">
          <h1 className="w-40 text-xl font-bold">Seat(s)</h1>
          <div className="flex items-center">
            <pre>:</pre>
            <h2>{seatList.join(", ")}</h2>
          </div>
        </CardContent>
      </CardFooter>
    </Card>
  );
};

const ContactDetails: React.FC = () => {
  const contactDetails = [
    {
      ContactNumber: "+63 9123456789",
      Email: "example@mail.com",
    },
  ];
  return (
    <Card>
      <CardHeader className="border-b-2 border-primary">
        <CardTitle>Contact Details</CardTitle>
      </CardHeader>
      <CardContent className="py-3 space-y-3">
        <div>
          <div className="flex w-3/5">
            <div className="flex w-1/3 space-x-2">
              <FiPhone className="w-6 h-6" />
              <p>Contact Number</p>
            </div>
            <div className="flex items-center">
              <pre>:</pre>
              <p>{contactDetails[0].ContactNumber}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex w-3/5">
            <div className="flex w-1/3 space-x-2">
              <IoMailOutline className="w-6 h-6" />
              <p>Email Address</p>
            </div>
            <div className="flex items-center">
              <pre>:</pre>
              <p>{contactDetails[0].Email}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookConfirmation;
