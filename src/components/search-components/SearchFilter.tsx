import React, { useState, ReactNode } from 'react';
import { Button } from "../ui/button";
import { BiBuilding, BiUser, BiLocationPlus, BiCalendarAlt } from "react-icons/bi";
import { TbZoom } from "react-icons/tb";

const SearchFilter: React.FC = () => {
  const [tripType, setTripType] = useState<string>("one-way");

  const companyOptions = [
    { value: "", label: "Select a bus terminal" },
    { value: "araceli-bus-terminal", label: "Araceli Bus Terminal" },
    { value: "cubao-bus-terminal", label: "Cubao Bus Terminal" },
    { value: "buendia-bus-terminal", label: "Buendia Bus Terminal" },
    { value: "pasay-bus-terminal", label: "Pasay Bus Terminal" },
    { value: "balintawak-bus-terminal", label: "Balintawak Bus Terminal" }
  ];

  return (<>
     <div className='grid grid-cols-2 gap-4'>
      <TripButtons tripType={tripType} setTripType={setTripType} />
      <SelectDropdown icon={<BiBuilding size={40}/>} selectTitle={'Company'} options={companyOptions} />
      <InputField icon={<BiUser size={40}/>} selectTitle={'Passenger'} />
      <DestinationRangeField firstIcon={<BiLocationPlus size={40}/>} secondIcon={<BiLocationPlus size={40}/>}  />
      <DestinationDateRangeField firstIcon={<BiCalendarAlt size={40}/>} secondIcon={<BiCalendarAlt size={40}/>} />
     </div>
     <div className='grid grid-cols-1 py-4'>
        <Button className='h-12 text-md flex items-center justify-center gap-2'>
            <TbZoom size={25}/>
            <span>Search</span>
        </Button>
     </div>
     </>
  );
}

const TripButtons: React.FC<{ tripType: string; setTripType: React.Dispatch<React.SetStateAction<string>>; }> = ({ tripType, setTripType }) => {
    return ( 
        <>
            <Button 
                className='h-12' 
                variant={tripType === 'round-trip' ? "outline" : undefined}
                onClick={() => setTripType("one-way")}
            >
                One Way
            </Button>
            <Button 
                className='h-12' 
                variant={tripType === 'round-trip' ? undefined : "outline"}
                onClick={() => setTripType("round-trip")}
            >
                Round Trip
            </Button>
        </>
    );
}

const SelectDropdown: React.FC<{ icon: ReactNode; selectTitle: string; options: { value: string; label: string; }[]}> = ({ icon, selectTitle, options }) => (
    <div className='border-2 rounded-sm flex items-center py-3 pl-3 h-12'>
        {icon}
        <p className='pl-2 pr-5'>{selectTitle + ':'}</p>
        <select className='w-full h-11 bg-white text-zinc-950 dark:bg-zinc-950 dark:text-white'>
            {options.map((option, index) => (
                <option key={index} value={option.value}>{option.label}</option>
            ))}
        </select>
    </div>
);

const InputField: React.FC<{ icon: React.ReactNode; selectTitle: string }> = ({ icon, selectTitle }) => (
    <div className='border-2 rounded-sm flex items-center py-3 pl-3 h-12'>
        {icon}
        <p className='pl-2 pr-5'>{selectTitle + ':'}</p>
        <input 
            className='w-full h-11 bg-white text-zinc-950 dark:bg-zinc-950 dark:text-white' 
            type="number" 
            pattern="[0-9]*"
        />    
    </div>
);

const DestinationRangeField: React.FC<{ firstIcon: React.ReactNode; secondIcon: React.ReactNode; }> = ({ firstIcon, secondIcon }) => (
    <div className='border-2 rounded-sm grid grid-cols-2 h-12'>
        <div className='flex items-center border-r-2 rounded-sm pl-2'>
            {firstIcon}
            <p className='pl-2 pr-5'>From:</p>
            <input 
                className='w-full h-11 bg-white text-zinc-950 dark:bg-zinc-950 dark:text-white' 
                type='text' 
                placeholder='Origin'
            /> 
        </div>
        <div className='flex items-center pl-2'>
            {secondIcon}
            <p className='pl-2 pr-5'>To:</p>
            <input 
                className='w-full h-11 bg-white text-zinc-950 dark:bg-zinc-950 dark:text-white' 
                type='text' 
                placeholder='Destination'
            /> 
        </div>
    </div>
);

const DestinationDateRangeField: React.FC<{ firstIcon: React.ReactNode; secondIcon: React.ReactNode; }> = ({ firstIcon, secondIcon }) => (
    <div className='border-2 rounded-sm grid grid-cols-2 h-12'>
        <div className='flex items-center border-r-2 rounded-sm pl-2'>
            {firstIcon}
            <p className='pl-2 pr-5'>Departure:</p>
            <input 
                className='w-full h-11 bg-white text-zinc-950 dark:bg-zinc-950 dark:text-white' 
                type='date' 
                placeholder='Origin'
            /> 
        </div>
        <div className='flex items-center pl-2'>
            {secondIcon}
            <p className='pl-2 pr-5'>Return:</p>
            <input 
                className='w-full h-11 bg-white text-zinc-950 dark:bg-zinc-950 dark:text-white' 
                type='date' 
                placeholder='Destination'
            /> 
        </div>
    </div>
);

export default SearchFilter;
