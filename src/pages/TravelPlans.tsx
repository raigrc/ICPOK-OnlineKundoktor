import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

const FormSchema = z.object({
  mobileno: z.string().min(11, {
    message: "Mobile No. must be at least 11 numbers.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
});

interface Props {}

const TravelPlans = (props: Props) => {

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      mobileno: "",
      email: "",
    },
  });
  return (
    <div className="flex w-full max-w-screen-xl mx-auto space-x-3">
      <div className="w-3/4 py-3 space-y-3">
        {/* Travel Details */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between border-b-2 border-primary">
            <CardTitle>Travel Details</CardTitle>
            <CardTitle>Thu | May 18</CardTitle>
          </CardHeader>
          <CardContent className="py-3 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex justify-between w-1/3" id="left">
                <div className="flex space-x-2">
                  <IoLocationOutline className="w-6 h-6" />
                  <p>From</p>
                </div>
                <div>
                  <p>: Cubao Manila</p>
                </div>
              </div>
              <div className="flex space-x-3" id="right">
                <MdOutlineMonitor className="w-6 h-6" />
                <FaWifi className="w-6 h-6" />
                <FaRegSnowflake className="w-6 h-6" />
              </div>
            </div>

            <div>
              <div className="flex justify-between w-1/3">
                <div className="flex space-x-2">
                  <IoLocationOutline className="w-6 h-6 stroke-green-400" />
                  <p>To</p>
                </div>
                <div>
                  <p>: Cubao Manila</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex justify-between w-1/3" id="left">
                <div className="flex space-x-2">
                  <LuClock3 className="w-6 h-6" />
                  <p>Departure</p>
                </div>
                <div>
                  <p>: Cubao Manila</p>
                </div>
              </div>

              <div id="right-rate">
                <h3 className="text-xl font-bold">4.0</h3>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex justify-between w-1/3" id="left">
                <div className="flex space-x-2">
                  <LuClock3 className="w-6 h-6 stroke-green-400" />
                  <p>Arrival</p>
                </div>
                <div>
                  <p>: Cubao Manila</p>
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
              <div className="flex justify-between w-1/3">
                <div className="flex space-x-2">
                  <MdOutlineKeyboardDoubleArrowRight className="w-6 h-6 stroke-green-400" />
                  <p>Duration</p>
                </div>
                <div>
                  <p>: Cubao Manila</p>
                </div>
              </div>
              <div id="review-number">
                <p className="text-sm">50 reviews</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* //Bus Details */}
        <Card>
          <CardHeader className="border-b-2 border-primary">
            <CardTitle>Bus Details</CardTitle>
          </CardHeader>
          <CardContent className="py-3 space-y-3">
            <div>
              <div className="flex justify-between w-1/3">
                <div className="flex space-x-2">
                  <FaRegBuilding className="w-6 h-6" />
                  <p>Company</p>
                </div>
                <div>
                  <p>: Cubao Manila</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between w-1/3">
                <div className="flex space-x-2">
                  <IoPerson className="w-6 h-6" />
                  <p>Driver Name</p>
                </div>
                <div>
                  <p>: Cubao Manila</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between w-1/3">
                <div className="flex space-x-2">
                  <FaBusSimple className="w-6 h-6" />
                  <p>Plate No.</p>
                </div>
                <div>
                  <p>: Cubao Manila</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Passengers */}
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
                    &#8369; 999.00
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
                    &#8369; 999.00
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
                    &#8369; 999.00
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

        {/* Contact Details */}
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
                        <Input className="pl-36" />
                      </FormControl>
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
                        <Input className="pl-36" />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </CardContent>
        </Card>
        <div className="flex items-center justify-end py-6">
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
  );
};

export default TravelPlans;
