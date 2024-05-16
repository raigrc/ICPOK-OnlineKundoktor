import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FirstName from "../input-fields/first-name";
import MiddleName from "../input-fields/middle-name";
import LastName from "../input-fields/last-name";
import Suffix from "../input-fields/suffix";
import Gender from "../input-fields/gender";

interface PersonalInfoProps {
    firstName: string;
    setFirstName: React.Dispatch<React.SetStateAction<string>>;
    middleName: string;
    setMiddleName: React.Dispatch<React.SetStateAction<string>>;
    lastName: string;
    setLastName: React.Dispatch<React.SetStateAction<string>>;
    suffix: string;
    setSuffix: React.Dispatch<React.SetStateAction<string>>;
    gender: string;
    setGender: React.Dispatch<React.SetStateAction<string>>;
    handleNext: () => void;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({handleNext}/*{ firstName, setFirstName, middleName, setMiddleName, lastName, setLastName, suffix, setSuffix, gender, setGender, handleNext }*/) => {
    return (<div className="flex items-center justify-center h-screen bg-black-100">
        <Card className="w-2/3 bg-black-200">
         <CardContent>
            <div className="grid grid-cols-2 justify-end">
            <div className="text-end text-balance border-r border-white pr-9 flex flex-col justify-between h-full">
                <div>
                <p className="text-h3 mb-2">Sign Up Now - Your Journey Starts Here!</p>
                <p className="text-sm">
                    Plan your trip effortlessly. 
                    Reserve your seat now and choose your preferred departure time with ease. 
                    Create an account to track your reservations, updates on schedules and special offers. 
                    Start your journey by securing your bus ride today and enjoy a hassle-free travel experience.
                </p>
                </div>
                <div className="text-sm flex justify-end gap-x-6">
                <a href="">Terms</a>
                <a href="">Privacy</a>
                <a href="">Contact</a>
                </div>
            </div>

            <div className="flex items-center justify-center w-full">
                <div className="w-full px-9">
                <FirstName />
                <MiddleName />
                <LastName />
                <Suffix />
                <Gender />
                <div className="text-center my-6">
                    <Button onClick={handleNext} className="w-full py-6 text-sm font-semibold">
                        Next                    
                    </Button>
                </div>
                <div className="text-center mt-3 text-sm">
                    <span className="mr-2">
                        Already have an account?
                    </span>
                    <a href="/login" className="underline underline-offset-1">
                        Login now
                    </a>
                </div>
                </div>
            </div>
            </div>
         </CardContent>
        </Card>
    </div>
    );
};


/**
<div className="grid grid-cols-2 bg-gray-800 p-8 rounded-md max-w-screen-xl mx-auto">
        <div className="grid grid-rows-3 text-right px-8">
            <span className="text-5xl font-bold mb-2">
                Sign Up Now - Your Journey Starts Here!
            </span>
            <span className="text-md">
                Plan your trip effortlessly. 
                Reserve your seat now and choose your preferred departure time with ease. 
                Create an account to track your reservations, updates on schedules and special offers. 
                Start your journey by securing your bus ride today and enjoy a hassle-free travel experience.
            </span>
            <div className="flex justify-end gap-4 mt-auto">
            <span>Terms</span>
            <span>Privacy</span>
            <span>Contact</span>
            </div>
        </div>
        <div className="border-l-2 pl-8 border-white">
            <div className='flex items-center border-2 rounded-sm border-white mb-3'>
                <p className='pl-6 font-bold w-3/12'>First Name:</p>
                <input 
                    className='w-11/12 h-11 bg-transparent' 
                    type='text' 
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                /> 
            </div>
            <div className='flex items-center border-2 rounded-sm border-white mb-3'>
                <p className='pl-6 font-bold w-4/12'>Middle Name:</p>
                <input 
                    className='w-11/12 h-11 bg-transparent' 
                    type='text' 
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                    required
                /> 
            </div>
            <div className='flex items-center border-2 rounded-sm border-white mb-3'>
                <p className='pl-6 font-bold w-3/12'>Last Name:</p>
                <input 
                    className='w-11/12 h-11 bg-transparent' 
                    type='text' 
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                /> 
            </div>
            <div className='flex items-center border-2 rounded-sm border-white mb-3'>
                <p className='pl-6 font-bold w-2/12'>Suffix:</p>
                <select className='w-11/12 h-11 bg-transparent' value={suffix} onChange={(e) => setSuffix(e.target.value)}>
                    <option className="text-black" value="">Select Your Suffix</option>
                    <option className="text-black" value="sr">Sr</option>
                    <option className="text-black" value="jr">Jr.</option>
                    <option className="text-black" value="i">I</option>
                </select>
            </div>
            <div className='flex items-center border-2 rounded-sm border-white mb-3'>
                <p className='pl-6 font-bold w-2/12'>Gender:</p>
                <select className='w-11/12 h-11 bg-transparent' value={gender} onChange={(e) => setGender(e.target.value)} required>
                    <option className="text-black" value="">Select Your Gender</option>
                    <option className="text-black" value="male">Male</option>
                    <option className="text-black" value="female">Female</option>
                    <option className="text-black" value="other">Other</option>
                </select>
            </div>
            <div className='grid grid-cols-1 py-3'>
             <Button className='h-12 font-bold' onClick={handleNext}>Next</Button>
            </div>
            <div className="flex justify-center gap-1">
            <div>
             Already have an account?
            </div> 
            <div>
            <a href="/login" className="underline underline-offset-1 ">Login now</a>
            </div>
            </div>
        </div>        
    </div>
 */
export default PersonalInfo;
