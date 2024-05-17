import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
              <div className="flex w-1/2" id="left">
                <div className="flex w-1/3 space-x-2">
                  <IoLocationOutline className="w-6 h-6" />
                  <p>From</p>
                </div>
                <div className="flex items-center">
                  <pre>:</pre>
                  <p>Cubao Manila</p>
                </div>
              </div>
              <div className="flex space-x-3" id="right">
                <MdOutlineMonitor className="w-6 h-6" />
                <FaWifi className="w-6 h-6" />
                <FaRegSnowflake className="w-6 h-6" />
              </div>
            </div>

            <div>
              <div className="flex w-1/2">
                <div className="flex w-1/3 space-x-2">
                  <IoLocationOutline className="w-6 h-6 stroke-green-400" />
                  <p>To</p>
                </div>
                <div className="flex items-center">
                  <pre>:</pre>
                  <p>Cubao Manila</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex w-1/2" id="left">
                <div className="flex w-1/3 space-x-2">
                  <LuClock3 className="w-6 h-6" />
                  <p>Departure</p>
                </div>
                <div className="flex items-center">
                  <pre>:</pre>
                  <p>Cubao Manila</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex w-1/2" id="left">
                <div className="flex w-1/3 space-x-2">
                  <LuClock3 className="w-6 h-6 stroke-green-400" />
                  <p>Arrival</p>
                </div>
                <div className="flex items-center">
                  <pre>:</pre>
                  <p>Cubao Manila</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex w-1/2">
                <div className="flex w-1/3 space-x-2">
                  <MdOutlineKeyboardDoubleArrowRight className="w-6 h-6 stroke-green-400" />
                  <p>Duration</p>
                </div>
                <div className="flex items-center">
                  <pre>:</pre>
                  <p>Cubao Manila</p>
                </div>
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
              <div className="flex w-1/2">
                <div className="flex w-1/3 space-x-2">
                  <FaRegBuilding className="w-6 h-6" />
                  <p>Company</p>
                </div>
                <div className="flex items-center">
                  <pre>:</pre>
                  <p>Cubao Manila</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex w-1/2">
                <div className="flex w-1/3 space-x-2">
                  <IoPerson className="w-6 h-6" />
                  <p>Driver Name</p>
                </div>
                <div className="flex items-center">
                  <pre>:</pre>
                  <p>Cubao Manila</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex w-1/2">
                <div className="flex w-1/3 space-x-2">
                  <FaBusSimple className="w-6 h-6" />
                  <p>Plate No.</p>
                </div>
                <div className="flex items-center">
                  <pre>:</pre>
                  <p>Cubao Manila</p>
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
            {/* Passenger 1 */}
            <div>
              <div className="flex w-1/2">
                <div className="flex w-1/3 space-x-2">
                  <GoPerson className="w-6 h-6" />
                  <p>#1</p>
                </div>
                <div className="flex divide-x-2">
                  <pre>:</pre>
                  <p className="px-2">Name</p>
                  <p className="px-2">Age</p>
                  <p className="px-2">Sex</p>
                  <p className="px-2">Dsiabilities</p>
                </div>
              </div>
            </div>

            {/* Passenger 2 */}
            <div>
              <div className="flex w-1/2">
                <div className="flex w-1/3 space-x-2">
                  <GoPerson className="w-6 h-6" />
                  <p>#2</p>
                </div>
                <div className="flex divide-x-2">
                  <pre>:</pre>
                  <p className="px-2">Name</p>
                  <p className="px-2">Age</p>
                  <p className="px-2">Sex</p>
                  <p className="px-2">Dsiabilities</p>
                </div>
              </div>
            </div>

            {/* Passenger 3 */}
            <div>
              <div className="flex w-1/2">
                <div className="flex w-1/3 space-x-2">
                  <GoPerson className="w-6 h-6" />
                  <p>#3</p>
                </div>
                <div className="flex divide-x-2">
                  <pre>:</pre>
                  <p className="px-2">Name</p>
                  <p className="px-2">Age</p>
                  <p className="px-2">Sex</p>
                  <p className="px-2">Dsiabilities</p>
                </div>
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
            <div>
              <div className="flex w-3/5">
                <div className="flex w-1/3 space-x-2">
                  <FiPhone className="w-6 h-6" />
                  <p>Contact Number</p>
                </div>
                <div className="flex items-center">
                  <pre>:</pre>
                  <p>Cubao Manila</p>
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
                  <p>Cubao Manila</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="flex items-center justify-end py-6 space-x-3">
          <Button size="lg" variant="outline">Back</Button>
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
  );
};

export default BookConfirmation;
