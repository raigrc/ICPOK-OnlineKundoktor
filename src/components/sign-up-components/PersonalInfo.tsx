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

const PersonalInfo: React.FC<PersonalInfoProps> = ({ firstName, setFirstName, middleName, setMiddleName, lastName, setLastName, suffix, setSuffix, gender, setGender, handleNext }) => {
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
                <FirstName 
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
                <MiddleName 
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                    required
                />
                <LastName 
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
                <Suffix value={suffix} onChange={(newValue) => setSuffix(newValue)} />
                <Gender value={gender} onChange={(newValue) => setGender(newValue)} />
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

export default PersonalInfo;
