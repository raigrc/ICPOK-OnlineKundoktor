import React, { useState } from "react";
import { BiBuilding, BiLocationPlus, BiSolidTimeFive, BiChevronsRight, BiDesktop, BiWifi } from "react-icons/bi";
import { PiSnowflakeBold } from "react-icons/pi";
import { TbCurrencyPeso } from "react-icons/tb";
import { Button } from "../ui/button";

const CompanyReviews: React.FC = () => {
  return (<div className='py-4'>
    <div className="grid grid-cols-7 border-b-2 black text-center">
      <DateFilter />
    </div>
    <CompanyDetails />
   </div>
 );
};

const DateFilter: React.FC = () => {
  const today = new Date();
  const dates = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(today.getDate() + i);
    dates.push(date);
  }

  const formattedDates = dates.map((date, index) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const dayOfMonth = date.getDate();
    return {
      index,
      formattedDate: `${day} | ${month} ${dayOfMonth}`
    };
  });

  const [selectedDateIndex, setSelectedDateIndex] = useState<number>(
    dates.findIndex(date => date.toDateString() === today.toDateString())
  );

  const handleDateClick = (index: number) => {
    setSelectedDateIndex(prevIndex => (prevIndex === index ? null : index) as number);
  };

  return (
    <>
      {formattedDates.map(({ index, formattedDate }) => (
        <div
          className={`py-3 font-bold ${index === selectedDateIndex ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950' : 'hover:bg-zinc-950 hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-zinc-950 hover:cursor-pointer'}`}
          key={index}
          onClick={() => handleDateClick(index)}
        >
          {formattedDate}
        </div>
      ))}
    </>
  );
};

const CompanyDetails: React.FC = () => {
 return (<>
    <div className="w-full mt-8">
     <div className="grid grid-cols-2 gap-4 text-white bg-zinc-950 dark:bg-gray-900 rounded-md">
       <div className="p-8">
          <div className="grid grid-cols-3 mt-2">
           <div className="flex items-center font-bold"><BiBuilding size={30} className="mr-2"/>Company</div>
           <div className="flex items-start col-span-2"> 
            <div className="mr-2 font-bold">:</div> 
            <div>DLTB Co.</div>
           </div>          </div>
          <div className="grid grid-cols-3 mt-2">
            <div className="flex items-center font-bold"><BiLocationPlus size={30} className="mr-2" />From</div>
            <div className="flex items-start col-span-2"> 
            <div className="mr-2 font-bold">:</div> 
            <div>Cubao, Manila</div>
           </div>          </div>
          <div className="grid grid-cols-3 mt-2">
           <div className="flex items-center font-bold"><BiLocationPlus size={30} className="mr-2" />To</div>
           <div className="flex items-start col-span-2"> 
            <div className="mr-2 font-bold">:</div> 
            <div>Legazpi Grand Central Terminal, Albay</div>
           </div>          </div>
          <div className="grid grid-cols-3 mt-2">
            <div className="flex items-center font-bold"><BiSolidTimeFive size={30} className="mr-2" />Departure</div>
            <div className="flex items-start col-span-2"> 
            <div className="mr-2 font-bold">:</div> 
            <div>05:00pm (GMT+)</div>
           </div>           
          </div>
          <div className="grid grid-cols-3 mt-2">
           <div className="flex items-center font-bold"><BiSolidTimeFive size={30} className="mr-2" />Arrival</div>
           <div className="flex items-start col-span-2"> 
            <div className="mr-2 font-bold">:</div> 
            <div>10:30pm (GMT+)</div>
           </div>
          </div>
          <div className="grid grid-cols-3 mt-2">
           <div className="flex items-center font-bold"><BiChevronsRight size={30} className="mr-2" />Duration</div>
           <div className="flex items-center col-span-2">
            <div className="mr-2 font-bold">:</div> 
            <div>5h 30m</div>
           </div>
          </div>
        </div>
        <div className="p-8">
          <div className="grid grid-rows-[auto auto auto auto] gap-3">
            <div className="flex justify-end">
              <input type="radio" id="star5" name="rating" value="5" className="hidden" />
              <label htmlFor="star5" className="text-4xl mr-2">&#9733;</label>
              <input type="radio" id="star4" name="rating" value="4" className="hidden" />
              <label htmlFor="star4" className="text-4xl mr-2">&#9733;</label>
              <input type="radio" id="star3" name="rating" value="3" className="hidden" />
              <label htmlFor="star3" className="text-4xl mr-2">&#9733;</label>
              <input type="radio" id="star2" name="rating" value="2" className="hidden" />
              <label htmlFor="star2" className="text-4xl mr-2">&#9733;</label>
              <input type="radio" id="star1" name="rating" value="1" className="hidden" />
              <label htmlFor="star1" className="text-4xl mr-2">&#9733;</label>
            </div>
            <div className="flex justify-end">
              <div className="grid grid-cols-2 mr-4">
               <span className="font-bold">4.0</span>
               <span>50 reviews</span>
              </div>
            </div>
            <div className="flex justify-end p-5 gap-3">
             <BiDesktop size={30} />
             <BiWifi size={30} />
             <PiSnowflakeBold size={30} />
            </div>
            <div className="flex justify-end">
              <span className="text-2xl font-bold flex items-end mr-4 h-full"><TbCurrencyPeso size={30}/> 995.00</span>
              <Button className="font-bold h-14 text-lg">Reserve Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
 );
};

export default CompanyReviews;
