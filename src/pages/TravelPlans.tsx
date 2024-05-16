import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

interface Props {}

const TravelPlans = (props: Props) => {
  return (
    <div className="flex w-full max-w-screen-xl mx-auto space-x-3">
      <div className="w-3/4 py-3 space-y-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between border-b-2 border-primary">
            <CardTitle>Travel Details</CardTitle>
            <CardTitle>Thu | May 18</CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
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
