import React, { useState } from "react";
import { BiBuilding, BiLocationPlus, BiSolidTimeFive, BiChevronsRight, BiDesktop, BiWifi } from "react-icons/bi";
import { PiSnowflakeBold } from "react-icons/pi";
import { TbCurrencyPeso } from "react-icons/tb";
import { Button } from "../ui/button";

const CompanyReviews: React.FC = () => {

  const companyDetails = [
    {
      "Company": "DLTB Co.",
      "From": "Cubao, Manila",
      "To": "Legazpi Grand Central Terminal, Albay",
      "Departure": "05:00pm (GMT+)",
      "Arrival": "10:30pm (GMT+)",
      "Duration": "5h 30m",
      "Rating": 4,
      "Reviews": 82,
      "Price": 995.00
    },
    {
      "Company": "DLTB Co.",
      "From": "Cubao, Manila",
      "To": "Legazpi Grand Central Terminal, Albay",
      "Departure": "05:00pm (GMT+)",
      "Arrival": "10:30pm (GMT+)",
      "Duration": "5h 30m",
      "Rating": 1,
      "Reviews": 82,
      "Price": 995.00
    }
  ];

  return (<div className='py-4'>
    <div className="grid grid-cols-7 text-center border-b-2 black">
      <DateFilter />
    </div>
    <CompanyDetails companyDetails={companyDetails} />
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

interface CompanyDetail {
  Company: string;
  From: string;
  To: string;
  Departure: string;
  Arrival: string;
  Duration: string;
  Rating: number;
  Reviews: number;
  Price: number;
}

interface CompanyDetailsProps {
  companyDetails: CompanyDetail[];
}

const CompanyDetails: React.FC<CompanyDetailsProps> = ({ companyDetails }) => {
  return (
    <>
      {companyDetails.map((detail, index) => (
        <div className="w-full mt-8" key={index}>
          <div className="grid grid-cols-2 gap-4 text-white rounded-md bg-zinc-950 dark:bg-gray-900">
            <div className="p-8">
              <div className="grid grid-cols-3 mt-2">
                <div className="flex items-center font-bold"><BiBuilding size={30} className="mr-2" />Company</div>
                <div className="flex items-start col-span-2">
                  <div className="mr-2 font-bold">:</div>
                  <div>{detail.Company}</div>
                </div>
              </div>
              <div className="grid grid-cols-3 mt-2">
                <div className="flex items-center font-bold"><BiLocationPlus size={30} className="mr-2" />From</div>
                <div className="flex items-start col-span-2">
                  <div className="mr-2 font-bold">:</div>
                  <div>{detail.From}</div>
                </div>
              </div>
              <div className="grid grid-cols-3 mt-2">
                <div className="flex items-center font-bold"><BiLocationPlus size={30} className="mr-2" />To</div>
                <div className="flex items-start col-span-2">
                  <div className="mr-2 font-bold">:</div>
                  <div>{detail.To}</div>
                </div>
              </div>
              <div className="grid grid-cols-3 mt-2">
                <div className="flex items-center font-bold"><BiSolidTimeFive size={30} className="mr-2" />Departure</div>
                <div className="flex items-start col-span-2">
                  <div className="mr-2 font-bold">:</div>
                  <div>{detail.Departure}</div>
                </div>
              </div>
              <div className="grid grid-cols-3 mt-2">
                <div className="flex items-center font-bold"><BiSolidTimeFive size={30} className="mr-2" />Arrival</div>
                <div className="flex items-start col-span-2">
                  <div className="mr-2 font-bold">:</div>
                  <div>{detail.Arrival}</div>
                </div>
              </div>
              <div className="grid grid-cols-3 mt-2">
                <div className="flex items-center font-bold"><BiChevronsRight size={30} className="mr-2" />Duration</div>
                <div className="flex items-center col-span-2">
                  <div className="mr-2 font-bold">:</div>
                  <div>{detail.Duration}</div>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="grid grid-rows-[auto auto auto auto] gap-3">
                <div className="flex justify-end">
                  {[...Array(5)].map((_, i) => (
                    <React.Fragment key={i}>
                      <input type="radio" id={`star${5-i}`} name={`rating-${index}`} value={5-i} className="hidden" />
                      <label htmlFor={`star${5-i}`} className="mr-2 text-4xl">&#9733;</label>
                    </React.Fragment>
                  ))}
                </div>
                <div className="flex justify-end">
                  <div className="grid grid-cols-2 mr-4">
                    <span className="font-bold">{detail.Rating}.0</span>
                    <span>{detail.Reviews} reviews</span>
                  </div>
                </div>
                <div className="flex justify-end gap-3 p-5">
                  <BiDesktop size={30} />
                  <BiWifi size={30} />
                  <PiSnowflakeBold size={30} />
                </div>
                <div className="flex justify-end">
                  <span className="flex items-end h-full mr-4 text-2xl font-bold"><TbCurrencyPeso size={30} /> {detail.Price.toFixed(2)}</span>
                  <a href="/travel-plans">
                    <Button className="text-lg font-bold h-14">Reserve Now</Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};


export default CompanyReviews;
