import {
  Card,
  CardContent,
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

import React from "react";
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
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Props {}

const TravelPlans: React.FC = () => {
  const handleSubmit = (data: any) => {
    console.log("Submitted data:", data);
  };
  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <BreadCrumb />
      <div className="flex w-full space-x-3 ">
        <div className="w-3/4 py-3 space-y-3">
          {/* Travel Details */}
          <TravelDetails />

          {/* //Bus Details */}
          <BusDetails />

          {/* Passengers */}
          <Passengers />

          {/* Contact Details */}
          <ContactDetails onSubmit={handleSubmit} />
          <div className="flex items-center justify-end py-6">
            <Button size="lg" onClick={() => handleSubmit}>
              Next
            </Button>
          </div>
        </div>

        <div className="w-1/4 py-3 ">
          <Receipt />
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
          <BreadcrumbPage className="text-green-400">
            Travel Plan
          </BreadcrumbPage>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Passengers</BreadcrumbPage>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Confirmation</BreadcrumbPage>
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

const Passengers: React.FC = () => {
  //! NEED TO WORK ON BUTTONS
  const priceList = [
    {
      Adult: "999.00",
      Children: "499.00",
      Infant: "99.00",
    },
  ];
  return (
    <Card>
      <CardHeader className="border-b-2 border-primary">
        <CardTitle>Passengers</CardTitle>
      </CardHeader>
      <CardContent className="py-3 space-y-3">
        {/* ADULTS */}
        <div className="flex items-center justify-between">
          <div id="left">
            <h1 className="text-xl font-semibold">
              Adults
              <span className="px-2 text-sm text-red-400">
                &#8369; {priceList[0].Adult}
              </span>
            </h1>
            <p className="text-sm text-gray-400">12 yrs old and above</p>
          </div>
          <div className="flex divide-x-2" id="right">
            <button>
              <FiMinus className="w-6 h-6" />
            </button>
            <p className="px-2 ">0</p>
            <button>
              <IoMdAdd className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* CHILDREN */}
        <div className="flex items-center justify-between">
          <div id="left">
            <h1 className="text-xl font-semibold">
              Children
              <span className="px-2 text-sm text-red-400">
                &#8369; {priceList[0].Children}
              </span>
            </h1>
            <p className="text-sm text-gray-400">12 yrs old and above</p>
          </div>
          <div className="flex divide-x-2" id="right">
            <button>
              <FiMinus className="w-6 h-6" />
            </button>
            <p className="px-2 ">0</p>
            <button>
              <IoMdAdd className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* INFANT */}
        <div className="flex items-center justify-between">
          <div id="left">
            <h1 className="text-xl font-semibold">
              Infant
              <span className="px-2 text-sm text-red-400">
                &#8369; {priceList[0].Infant}
              </span>
            </h1>
            <p className="text-sm text-gray-400">12 yrs old and above</p>
          </div>
          <div className="flex divide-x-2" id="right">
            <button>
              <FiMinus className="w-6 h-6" />
            </button>
            <p className="px-2 ">0</p>
            <button>
              <IoMdAdd className="w-6 h-6" />
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const FormSchema = z.object({
  mobileno: z.string().min(10, {
    message: "Please choose a seat.",
  }),
  email: z.string().min(2, {
    message: "Firstname must be at least 2 characters.",
  }),
});

const ContactDetails: React.FC<{ onSubmit: any }> = ({ onSubmit }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      mobileno: "",
      email: "",
    },
  });

  return (
    <Card>
      <CardHeader className="border-b-2 border-primary">
        <CardTitle>Contact Details</CardTitle>
      </CardHeader>
      <CardContent className="py-3 space-y-3">
        <Form {...form}>
          <form>
            <FormField
              control={form.control}
              name="mobileno"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel className="absolute -translate-y-1/2 top-1/2 left-4">
                    Contact Number:
                  </FormLabel>
                  <FormControl>
                    <Input className="pl-36" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel className="absolute -translate-y-1/2 top-1/2 left-4">
                    Email Address:
                  </FormLabel>
                  <FormControl>
                    <Input className="pl-36" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

const Receipt: React.FC = () => {
  return (
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
  );
};

export default TravelPlans;
