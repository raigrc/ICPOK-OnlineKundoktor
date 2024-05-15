import React, { useState } from 'react';
import { Button } from "../components/ui/button";
import { BiBuilding } from "react-icons/bi";

const Search: React.FC = () => {
  const [tripType, setTripType] = useState<string>("one-way");

  return (
    <div className='grid grid-cols-2 gap-4 px-20 py-8'>
     <TripButtons tripType={tripType} setTripType={setTripType} />
     <div className='border-2 rounded-sm flex items-center p-3 h-12'>
         <BiBuilding size={40} />
         <p className='pl-2 pr-5'>Company:</p>
         <select className='text-black w-full h-auto bg-white dark:bg-zinc-950'>
          <option value="">Select a bus terminal</option>
          <option value="araceli-bus-terminal">Araceli Bus Terminal</option>
          <option value="cubao-bus-terminal">Cubao Bus Terminal</option>
          <option value="buendia-bus-terminal">Buendia Bus Terminal</option>
          <option value="pasay-bus-terminal">Pasay Bus Terminal</option>
          <option value="balintawak-bus-terminal">Balintawak Bus Terminal</option>
         </select>
        </div>
    </div>
  );
}

const TripButtons: React.FC<{ tripType: string; 
    setTripType: React.Dispatch<React.SetStateAction<string>>; 
    }> = ({ tripType, setTripType }) => {
        
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

export default Search;
