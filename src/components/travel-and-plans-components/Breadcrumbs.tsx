import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Breadcrumbs = () => {
    return (
    <div className="grid grid-cols-3 w-full p-8">
     <div className="col-span-2 flex justify-start gap-2">
      <div className="font-bold">Travel Plan</div>
      <div><IoIosArrowRoundForward size={25} /></div>
      <div>Passengers</div>
      <div><IoIosArrowRoundForward size={25} /></div>
      <div>Confirmation</div>
      <div><IoIosArrowRoundForward size={25} /></div>
      <div>Payment Method</div>
      </div>
      <div className="col-span-1 flex justify-center">Travel Plans 2</div>
    </div>
    );
  };
  
  export default Breadcrumbs;
