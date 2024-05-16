
import { Button } from "../components/ui/button";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center h-screen p-8">
        <div className="grid grid-cols-2 bg-gray-700 p-8 rounded-md max-w-screen-xl mx-auto">
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
                <div className="flex justify-end gap-2 mt-auto">
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
                    /> 
                </div>
                <div className='flex items-center border-2 rounded-sm border-white mb-3'>
                    <p className='pl-6 font-bold w-4/12'>Middle Name:</p>
                    <input 
                        className='w-11/12 h-11 bg-transparent' 
                        type='text' 
                    /> 
                </div>
                <div className='flex items-center border-2 rounded-sm border-white mb-3'>
                    <p className='pl-6 font-bold w-3/12'>Last Name:</p>
                    <input 
                        className='w-11/12 h-11 bg-transparent' 
                        type='text' 
                    /> 
                </div>
                <div className='flex items-center border-2 rounded-sm border-white mb-3'>
                    <p className='pl-6 font-bold w-2/12'>Suffix:</p>
                    <select className='w-11/12 h-11 bg-transparent'>
                        <option className="text-black" value="">Select Your Suffix</option>
                        <option className="text-black" value="sr">Sr</option>
                        <option className="text-black" value="jr">Jr.</option>
                        <option className="text-black" value="i">I</option>
                    </select>
                </div>
                <div className='flex items-center border-2 rounded-sm border-white mb-3'>
                    <p className='pl-6 font-bold w-2/12'>Gender:</p>
                    <select className='w-11/12 h-11 bg-transparent'>
                        <option className="text-black" value="">Select Your Gender</option>
                        <option className="text-black" value="male">Male</option>
                        <option className="text-black" value="female">Female</option>
                        <option className="text-black" value="other">Other</option>
                    </select>
                </div>
                <div className='grid grid-cols-1 py-3'>
                 <Button className='h-12 font-bold'>Next</Button>
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
    </div>
  );
};

export default SignUp;
